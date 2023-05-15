import { Router } from "express";
import jwt from "jsonwebtoken";
import authConfig from "../db/config/auth.config.js";
import _ from "underscore";
import { User } from "../db/models/user.js";
import { Role } from "../db/models/role.js";
import { validateToken } from "../middleware/user/validateToken.js";
import { isManager } from "../middleware/roles/isManager.js";
import nodeEvents from "../nodeEvents/nodeEvents.js";
import multer from "multer";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";
import {
  checkNickNameExists,
  checkEmailExists,
  checkUserExists,
  validateParams,
  createUser,
  saveUser,
  sendVerificationCode,
} from "./users/loginTry.js";

const router = Router();

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const upload = multer();

// --------- Delete All Users ---------
router.delete("/deleteAll", validateToken, isManager, async (req, res) => {
  try {
    await User.deleteMany({});
    res.json({ message: `All users are deleted!` });
    return nodeEvents.emit("update");
  } catch (error) {
    console.log(error.message);
  }
});

// GET Self USER
router.get("/getSelfUser", validateToken, async (req, res) => {
  User.findOne({ _id: req.userId })
    .then((user) => {
      res.json(user);
    })
    .catch((e) => res.status(500).json({ message: "Error", error: e }));
});
// GET All USERS
router.get("/", (req, res) => {
  User.findOne()
    .then((user) => {
      res.json(user);
    })
    .catch((e) => res.status(500).json({ message: "Error", error: e }));
});

// < -------------- Final Login ---------------- >
router.post("/finalLogin/:email/:verfCode", async (req, res) => {
  //email and password:

  const body = req.body;
  let email = req.params.email;
  const verfCode = req.params.verfCode;
  let verfCodeAsNumber = parseInt(verfCode);
  const user = await User.findOne({ email: email }).populate("roles");

  if (user.isComplete === false) {
    user.address = {}; // Initialize the address object
    user.address.city = body.city;
    user.email = email;
    user.address.street = body.street;
    user.address.houseNumber = body.houseNumber;
    user.address.floor = body.floor;
    user.isComplete = true;
    await user.save();
  }
  if (user.verficationCode === verfCodeAsNumber) {
    const token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: "30d",
    });
    const authorities = [];
    for (let i = 0; i < user.roles.length; i++) {
      authorities.push(`ROLE_` + user.roles[i].name.toUpperCase());
    }
    res.status(200).json({
      id: user.id,
      msg: `You logged successfully`,
      roles: authorities,
      accessToken: token,
    });
    return nodeEvents.emit("update");
  } else {
    throw new Error("Invalid verification code");
  }
});
// < -------------- Exist Code Login ---------------- >
router.post("/existLogin/:phoneNum/:verfCode", async (req, res) => {
  //email and password:

  const body = req.body;
  let phoneNum = req.params.phoneNum;
  const verfCode = req.params.verfCode;
  let verfCodeAsNumber = parseInt(verfCode);
  const user = await User.findOne({ email: email }).populate("roles");

  if (user.isComplete === false) {
    user.address = {}; // Initialize the address object
    user.address.city = body.city;
    user.address.street = body.street;
    user.address.houseNumber = body.houseNumber;
    user.address.floor = body.floor;
    user.isComplete = true;
    await user.save();
  }
  if (user.verficationCode === verfCodeAsNumber) {
    const token = jwt.sign({ id: user.id }, authConfig.secret, {
      expiresIn: "30d",
    });
    const authorities = [];
    for (let i = 0; i < user.roles.length; i++) {
      authorities.push(`ROLE_` + user.roles[i].name.toUpperCase());
    }
    res.status(200).json({
      id: user.id,
      phoneNumer: `${phoneNum}`,
      roles: authorities,
      accessToken: token,
    });
    res.json({ msg: `You logged successfully!` });
    return nodeEvents.emit("update");
  } else {
    throw new Error("Invalid verification code");
  }
});
//<-----------Login Try HERE --------------->

router.post(
  "/tryLogin/:email/:nickName",
  validateParams,
  checkNickNameExists,
  checkEmailExists,
  checkUserExists,
  createUser,
  saveUser,
  sendVerificationCode
);

export { router as authRouter };
