import { Router } from "express";
import { validateToken } from "../../middleware/user/validateToken.js";
import { User } from "../../db/models/user.js";
import { Team } from "../../db/models/team/teams.js";
import { TeamApply } from "../../db/models/team/apply.js";
import nodeEvent from "../../nodeEvents/nodeEvents.js";

import {
  checkTeamNameExists,
  checkUserHasNoTeam,
  createTeam,
  validateRegionInput,
  validateTeamInput,
} from "./createTeam.js";
import { getTeams } from "./getTeams.js";
import {
  AlreadyHasTeam,
  checkIfAlreadyApplied,
  createTeamApply,
  emitTeamsUpdate,
  saveUserApply,
  updateTeamApplyCount,
} from "./applyTeam.js";
import {
  approvePlayer,
  checkIsManager,
  checkIsPending,
  isAlreadyHasTeam,
} from "./approvePlayer.js";
import { TeamChat } from "../../db/models/team/chat.js";
import { addTeamChatMsg, checkTeamChatRoom } from "./chatMsg.js";
const router = Router();

router.post(
  "/createTeam",
  validateToken,
  validateTeamInput,
  validateRegionInput,
  checkTeamNameExists,
  checkUserHasNoTeam,
  createTeam
);

router.get("/", getTeams);

router.post(
  "/apply/:teamId",
  validateToken,
  AlreadyHasTeam,
  checkIfAlreadyApplied,
  createTeamApply,
  saveUserApply,
  updateTeamApplyCount,
  emitTeamsUpdate,
  (req, res) => {
    res.json({ msg: `The apply has been sent to the leader!` });
  }
);

// Route with middleware pipeline
router.put(
  "/approvePlayer/:applyId/:sign",
  validateToken,
  checkIsManager,
  checkIsPending,
  isAlreadyHasTeam,
  approvePlayer
);

router.post("/chatMsg", validateToken, checkTeamChatRoom, addTeamChatMsg);

export { router as teamRouter };
