import { model } from "mongoose";
import { Schema } from "mongoose";
import gameConfig from "../config/game.config.js";

const addressSchema = new Schema({
  _id: false,
  city: String,
  street: String,
  houseNumber: Number,
  floor: Number,
});
const teamSchema = new Schema({
  name: String,
  role: { type: String, default: "member" },
  _id: {
    type: Schema.Types.ObjectId,
    ref: `Team`,
  },
});
const applysSchema = new Schema({
  _id: false,
  applyId: { type: Schema.Types.ObjectId, ref: `TeamApply` },
  teamId: { type: Schema.Types.ObjectId, ref: `Team` },
});
const privateMsgSchema = new Schema({
  recivedMsg: [
    {
      _id: false,
      msg: String,
      user: { type: Schema.Types.ObjectId, ref: `User` },
    },
  ],
  sentMsg: [
    {
      _id: false,
      msg: String,
      user: { type: Schema.Types.ObjectId, ref: `User` },
    },
  ],
});

const userSchema = new Schema({
  isComplete: { type: Boolean, required: false, default: false },
  phoneNumber: { type: String, unique: true, sparse: true, default: null },
  region: { type: String, enum: gameConfig.regionList },
  nickName: { type: String, required: true, unique: true },
  address: addressSchema,
  verificationCode: { type: Number, required: false, unique: true },
  email: { type: String, required: true, unique: true },
  team: teamSchema,
  privateMsg: privateMsgSchema,
  applys: [applysSchema],
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Role",
    },
  ],
  createdAt: { type: Date, default: Date.now() },
});

const User = model("User", userSchema);

export { User };
