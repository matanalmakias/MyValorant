import { model } from "mongoose";
import { Schema } from "mongoose";

const coachSchema = new Schema({
  name: String,

  desc: String,
  picture: String,
  priceForHour: Number,
  phone: String,
  owner: { type: Schema.Types.ObjectId, ref: `User` },
  createdAt: { type: Date, default: Date.now() },
});

const Coach = model("Coach", coachSchema);

export { Coach };
