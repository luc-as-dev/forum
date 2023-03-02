import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

export const VALID_TO_UPDATE = ["name", "email", "password", "dateOfBirth"];
const PUBLIC_VALUE = ["name", "profile"];
const SALT_ROUNDS = 8;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      validate(value) {
        if (value.length < 6) {
          throw new Error("Password must be at least 6 characters");
        }
      },
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) throw new Error("Email is invalid");
      },
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Date of birth is required"],
    },
    profile: {
      firstName: {
        type: String,
        trim: true,
        maxLength: 50,
      },
      lastName: {
        type: String,
        trim: true,
        maxLength: 50,
      },
      avatar: {
        seed: {
          type: String,
          trim: true,
          minlength: 1,
          default: function () {
            return this._id.toString();
          },
        },
        styleName: {
          type: String,
          trim: true,
          default: "identicon",
        },
      },
      bio: {
        type: String,
        trim: true,
        maxLength: 500,
      },
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

//  Generate token
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jsonwebtoken.sign(
    { _id: user._id.toString() },
    process.env.SECRET
  );

  user.tokens = [...user.tokens, { token }];
  await user.save();

  return token;
};

// Public user information
userSchema.methods.getPublic = function () {
  const user = this;
  const publicUser = {};

  PUBLIC_VALUE.forEach((key) => (publicUser[key] = user[key]));

  return publicUser;
};

// To control displayed key-value pairs
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};

//  Find user by email and password
userSchema.statics.findByCredentials = async (email, password) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      if (!user) throw new Error();
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) throw new Error();

    return user;
  } catch (e) {
    throw new Error("Unable to login");
  }
};

// Pre save middleware
userSchema.pre("save", async function (next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }

  next();
});

userSchema.post("save", function (err, doc, next) {
  if (err.errors) {
    const errors = {};
    const errKeys = Object.keys(err.errors);
    errKeys.forEach(
      (key) =>
        (errors[key] = {
          message: err.errors[key].properties.message,
        })
    );
    next(errors);
  } else if (err.name === "MongoServerError" && err.code === 11000) {
    const errors = {};
    const errKeys = Object.keys(err.keyValue);
    errKeys.forEach(
      (key) =>
        (errors[key] = {
          message: "Email is already registered",
        })
    );
    next(errors);
  } else {
    next(err);
  }
});

export const User = mongoose.model("User", userSchema);
