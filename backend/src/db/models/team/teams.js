import { model } from "mongoose";
import { Schema } from "mongoose";
import gameConfig from "../../config/game.config.js";
const managerSchema = new Schema({
  name: { type: String, ref: "User" },
  _id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const playerSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "User" },
  gameRole: { type: String, enum: gameConfig.gameRoles },
});

const teamSchema = new Schema({
  name: { type: String, unique: true, required: true },
  tag: String,
  region: { type: String, required: true, enum: gameConfig.regionList },
  manager: { type: managerSchema, ref: "User" },
  applys: [{ type: Schema.Types.ObjectId, ref: `TeamApply` }],
  appliesCount: Number,
  players: [{ type: playerSchema, ref: "User" }],
  needPlayers: Boolean,
});

const Team = model("Team", teamSchema);
export { Team };
