import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

export const VALID_TO_UPDATE = ["name", "email", "password", "dateOfBirth"];
const SALT_ROUNDS = 8;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 6,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid");
        }
      },
    },
    dateOfBirth: {
      type: Date,
      required: true,
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
        type: String,
        trim: true,
        default: "/user/avatar/default.png",
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

export const User = mongoose.model("User", userSchema);
