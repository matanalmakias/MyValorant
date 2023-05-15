import { model } from "mongoose";
import { Schema } from "mongoose";

const chatMsgSchema = new Schema({
  _id: false,
  msg: [{ type: String }],
  sender: {
    _id: { type: Schema.Types.ObjectId, ref: `User` },
    name: { type: String, ref: "User" },
  },
});
const teamChatSchema = new Schema({
  msgs: [chatMsgSchema],
  _id: { type: Schema.Types.ObjectId, ref: `Team`, requried: true },
});

const TeamChat = model("TeamChat", teamChatSchema);
export { TeamChat };
