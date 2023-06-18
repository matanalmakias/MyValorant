import { Router } from "express";
import jwt from "jsonwebtoken";
import authConfig from "../db/config/auth.config.js";
import _ from "underscore";
import { User } from "../db/models/user.js";
import { Role } from "../db/models/role.js";
import { validateToken } from "../middleware/user/validateToken.js";
import { isManager } from "../middleware/roles/isManager.js";
import nodeEvents from "../nodeEvents/nodeEvents.js";
import nodemailer from "nodemailer";
const router = Router();

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
      email: `${email}`,
      roles: authorities,
      accessToken: token,
    });
    return nodeEvents.emit("update");
  } else {
    return res.json({ message: `הקוד ששלחת לא נכון` });
  }
});
//<-----------Login Try HERE --------------->
router.post("/tryLogin/:email", async (req, res) => {
  try {
    const email = req.params.email;

    const user = await User.findOne({ email: email });

    let isRegistered = false;
    let randomNumber = Math.floor(100000 + Math.random() * 900000);
    if (user !== null) {
      user.verficationCode = randomNumber;
      await user.save();
      isRegistered = true;
    }
    if (user === null) {
      const role = await Role.findOne({ name: "user" });
      const newUser = new User({
        email: email,
        verficationCode: randomNumber,
        roles: [role],
      });

      await new Promise(async (resolve, reject) => {
        newUser.save(async (error, savedUser) => {
          if (error) {
            reject(error);
          } else {
            isRegistered = true;

            resolve(savedUser);
          }
        });
      });
    }
    if (isRegistered === true) {
      const mailOptions = {
        from: "info@madigital.co.il",
        to: email,
        subject: "Welcome to Madigital!",
        text: `Your code is ${randomNumber}`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    }
    res.json({ message: `הקוד נשלח אליך לאימייל.` });
    return nodeEvents.emit("update");
  } catch (e) {
    return res.status(500).json({ message: "Server DB Error", error: e });
  }
});

export { router as authRouter };
