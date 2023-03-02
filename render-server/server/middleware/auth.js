import jsonwebtoken from "jsonwebtoken";
import { User } from "../../database/models/user.js";

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jsonwebtoken.verify(token, process.env.SECRET);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    } else {
      req.token = token;
      req.user = user;

      next();
    }
  } catch (error) {
    res
      .status(401)
      .send({ authentication: { message: "Please authenticate" } });
  }
};

export default auth;
