import { model } from "mongoose";
import { Schema } from "mongoose";

const addressSchema = new Schema({
  _id: false,
  city: String,
  street: String,
  houseNumber: Number,
  floor: Number,
});
const teamSchema = new Schema({
  name: String,
  role: { type: String, required: true },
  _id: {
    type: Schema.Types.ObjectId,
    ref: `Team`,
  },
});
const userSchema = new Schema({
  isComplete: { type: Boolean, required: false, default: false, unique: false },
  phoneNumber: { type: String, unique: true },
  nickName: { type: String, required: true, unique: true },
  address: addressSchema,
  verficationCode: { type: Number, required: false, unique: true },
  email: { type: String, required: true, unique: true },
  team: teamSchema,
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Role",
    },
  ],
});

const User = model("User", userSchema);

export { User };
