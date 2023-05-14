import { model } from "mongoose";
import { Schema } from "mongoose";

const linksSchema = new Schema({
  _id: false,
  title: String,
  link: String,
});
const applySchema = new Schema({
  letter: String,
  links: [linksSchema],
  creator: { type: Schema.Types.ObjectId, ref: `User` },
  teamId: { type: Schema.Types.ObjectId, ref: `Team` },
});

const TeamApply = model("TeamApply", applySchema);
export { TeamApply };
