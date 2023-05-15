import { TeamApply } from "../../db/models/team/apply.js";
import { Team } from "../../db/models/team/teams.js";
import { User } from "../../db/models/user.js";

// Middleware to check if user is team manager
const isAlreadyHasTeam = async (req, res, next) => {
  const { applyId } = req.params;
  const apply = await TeamApply.findById(applyId);
  const user = await User.findById(apply.creator);
  if (user.team === undefined) {
    next();
  } else {
    return res.json({
      msg: `${user.nickName} is already have a team ${user?.team?.name}`,
    });
  }
};

// Middleware to check if user is team manager
const checkIsManager = async (req, res, next) => {
  const { applyId } = req.params;
  const apply = await TeamApply.findById(applyId);
  const team = await Team.findById(apply.teamId);
  const isManagerOfTeam = team.manager.name === req.user.nickName;
  if (!isManagerOfTeam) {
    return res
      .status(400)
      .json({ msg: `You're not the leader of the team ${team.name}` });
  }
  next();
};

// Middleware to check if apply status is pending
const checkIsPending = async (req, res, next) => {
  const { applyId } = req.params;
  const apply = await TeamApply.findById(applyId);
  if (apply.status !== "Pending") {
    return res.json({ msg: `Application status is ended` });
  }
  next();
};

// Middleware to handle approving a player
const approvePlayer = async (req, res, next) => {
  const { applyId, sign } = req.params;
  const apply = await TeamApply.findById(applyId);
  const team = await Team.findById(apply.teamId);
  const player = await User.findById(apply.creator._id);

  let role = apply.preferredRole;
  if (team.players.some((item) => item.gameRole === apply.preferredRole)) {
    role = null;
  }

  if (sign === "yes") {
    apply.status = "Approved";
    team.players.push({
      nickName: player.nickName,
      gameRole: role,
      _id: apply.creator._id,
    });
    player.team = { _id: team._id, name: team.name };
    await apply.save();
    await team.save();
    await player.save();
    res.json({ msg: `The player approved and joined the team` });
  } else if (sign === "no") {
    apply.status = "Disapproved";
    await apply.save();
    res.json({ msg: `The player is disapproved succesfully` });
    nodeEvent.emit("teams-update");
  } else {
    return res.status(400).json({ msg: `Invalid sign parameter` });
  }
};

export { approvePlayer, checkIsManager, checkIsPending, isAlreadyHasTeam };
