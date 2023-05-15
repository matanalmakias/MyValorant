// loginTry.js
import dotenv from "dotenv";
import { check } from "express-validator";
import { User } from "../../db/models/user.js";
import sgMail from "@sendgrid/mail";
import { Role } from "../../db/models/role.js";

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// Middleware to validate email and nickname params
export const validateParams = [
  check("email").isEmail().withMessage("Please provide a valid email"),
  check("nickName")
    .isLength({ min: 2 })
    .withMessage("Nickname must be at least 2 characters long"),
];

// Middleware to check if user already exists with the given nickname
export const checkNickNameExists = async (req, res, next) => {
  try {
    const { nickName } = req.params;
    const existingUser = await User.findOne({ nickName });
    if (existingUser) {
      return res.status(400).json({ msg: `This nickname is already taken` });
    }
    next();
  } catch (e) {
    return next(e);
  }
};

// Middleware to check if user already exists with the given email
export const checkEmailExists = async (req, res, next) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (user !== null) {
      user.verficationCode = Math.floor(100000 + Math.random() * 900000);
      await user.save();
      return res.json({ msg: `Verification code sent to your email` });
    }
    next();
  } catch (e) {
    return next(e);
  }
};

// Middleware to check if user already exists with the given nickname
export const checkUserExists = async (req, res, next) => {
  try {
    const { email, nickName } = req.params;
    const user = await User.findOne({ email });
    if (user !== null) {
      return res.status(400).json({ msg: `The email is already taken` });
    }
    const existingUser = await User.findOne({ nickName });
    if (existingUser) {
      return res.status(400).json({ msg: `This nickname is already taken` });
    }
    next();
  } catch (e) {
    return next(e);
  }
};

// Middleware to create a new user object with the provided email and nickname
export const createUser = async (req, res, next) => {
  try {
    const { email, nickName } = req.params;
    const role = await Role.findOne({ name: "user" });
    req.newUser = new User({
      email,
      nickName,
      verficationCode: Math.floor(100000 + Math.random() * 900000),
      roles: [role],
    });
    next();
  } catch (e) {
    return res.status(500).json({ message: "Server DB Error", error: e });
  }
};

// Middleware to save the newly created user object to the database
export const saveUser = async (req, res, next) => {
  try {
    const savedUser = await req.newUser.save();
    req.savedUser = savedUser;
    next();
  } catch (e) {
    return res.status(500).json({ message: "Server DB Error", error: e });
  }
};

// Middleware to send the verification code to the user's email
export const sendVerificationCode = async (req, res, next) => {
  try {
    const { email } = req.params;
    const { verficationCode } = req.newUser;
    const msg = {
      to: email,
      from: process.env.EMAIL_ADDRESS,
      subject: "Your code for MyValorant!",
      text: `Your code is ${verficationCode}`,
    };
    await sgMail.send(msg);
    return res.json({ msg: `Verification code sent to your email` });
  } catch (e) {
    return res.status(500).json({ message: "Server Error", error: e });
  }
};
