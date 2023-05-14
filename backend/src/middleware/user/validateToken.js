import jwt from "jsonwebtoken";

import authConfig from "../../db/config/auth.config.js";
import { User } from "../../db/models/user.js";

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: "No Token Provided" });
  }

  try {
    const { id } = jwt.verify(token, authConfig.secret);
    req.userId = id;
    req.user = await User.findOne({ _id: id });
    next();
  } catch (err) {
    return res.status(403).json({ message: "Invalid Token" });
  }
};

export { validateToken };
