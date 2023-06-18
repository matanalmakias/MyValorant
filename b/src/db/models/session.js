import { model } from "mongoose";
import { Schema } from "mongoose";
import dbConfig from "../config/db.config";

const sessionSchema = new Schema({
  playerId: Schema.Types.ObjectId,
  coachId: Schema.Types.ObjectId,
  date: { startTime: Date, endTime: Date },
  price: Number,
  status: {
    type: String,
    enum: dbConfig.orderStatusEnum,
    default: "Pending",
  },
  createdAt: { type: Date, default: Date.now() },
});

const Session = model("Session", sessionSchema);

export { Session };
