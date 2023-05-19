import { model } from "mongoose";
import { Schema } from "mongoose";

const chatSchema = new Schema({
  _id: false,
  senderId: { type: Schema.Types.ObjectId, ref: `User` },
  msg: String,
  date: { type: Date, default: Date.now() },
});
const generalChatSchema = new Schema({ name: String, msgs: [chatSchema] });
const GeneralChat = model("GeneralChat", generalChatSchema);

export { GeneralChat };
