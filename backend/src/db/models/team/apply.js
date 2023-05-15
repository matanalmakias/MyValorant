import { model } from "mongoose";
import { Schema } from "mongoose";
import gameConfig from "../../config/game.config.js";

const linksSchema = new Schema({
  _id: false,
  title: String,
  link: String,
});
const applySchema = new Schema({
  letter: String,
  links: [linksSchema],
  preferredRole: { type: String, enum: gameConfig.gameRoles },
  status: {
    type: String,
    enum: [`Approved`, `Disapproved`, `Pending`],
    default: `Pending`,
  },
  creator: { type: Schema.Types.ObjectId, ref: `User` },
  teamId: { type: Schema.Types.ObjectId, ref: `Team` },
});

const TeamApply = model("TeamApply", applySchema);
export { TeamApply };
