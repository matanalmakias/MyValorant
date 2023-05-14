import mongoose from "mongoose";
import { TeamApply } from "../../db/models/team/apply.js";
import { Team } from "../../db/models/team/teams.js";
import nodeEvent from "../../nodeEvents/nodeEvents.js";
async function checkIfAlreadyApplied(req, res, next) {
  const teamId = req.params.teamId;
  const isAlreadyApplied = req.user.applys.some(
    (item) => item.teamId.toString() === teamId
  );
  if (isAlreadyApplied) {
    return res.status(400).json({ error: "Already applied to this team" });
  }
  next();
}

async function createTeamApply(req, res, next) {
  const teamId = req.params.teamId;
  const team = await Team.findById(teamId);

  const newApply = new TeamApply({
    letter: req.body.letter,
    links: req.body.links,
    creator: req.userId,
    teamId: team._id,
  });

  req.newApply = newApply;
  await newApply.save();
  next();
}

async function saveUserApply(req, res, next) {
  const newApply = req.newApply;

  req.user.applys?.push({
    applyId: newApply._id,
    teamId: newApply.teamId,
  });
  await req.user.save();

  next();
}

async function updateTeamApplyCount(req, res, next) {
  const teamId = req.params.teamId;
  const team = await Team.findById(teamId);

  team.applys?.push(mongoose.Types.ObjectId(req.userId));
  team.appliesCount = team.applys.length;
  await team.save();

  next();
}

function emitTeamsUpdate(req, res, next) {
  nodeEvent.emit("teams-update");
  next();
}
export {
  checkIfAlreadyApplied,
  createTeamApply,
  emitTeamsUpdate,
  saveUserApply,
  updateTeamApplyCount,
};
