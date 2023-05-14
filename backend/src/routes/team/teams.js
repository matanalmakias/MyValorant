import { Router } from "express";
import { validateToken } from "../../middleware/user/validateToken.js";
import { User } from "../../db/models/user.js";
import { Team } from "../../db/models/team/teams.js";
import nodeEvent from "../../nodeEvents/nodeEvents.js";
import {
  checkTeamNameExists,
  checkUserHasNoTeam,
  createTeam,
  validateRegionInput,
  validateTeamInput,
} from "./createTeam.js";
import { getTeams } from "./getTeams.js";
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
export { router as teamRouter };
