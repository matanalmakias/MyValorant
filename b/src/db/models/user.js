import { model } from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  phone: String,
  verficationCode: { type: Number, required: false, unique: true },
  subscribe: { type: Schema.Types.ObjectId, ref: `Subscribe` },
  createdAt: { type: Date, default: Date.now() },
  roles: [
    {
      type: Schema.Types.ObjectId,
      ref: "Role",
    },
  ],
});

const User = model("User", userSchema);

export { User };
