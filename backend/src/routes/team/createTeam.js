import gameConfig from "../../db/config/game.config.js";
import { Team } from "../../db/models/team/teams.js";
import nodeEvent from "../../nodeEvents/nodeEvents.js";
const validateTeamInput = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({ msg: "Team name is required." });
  }
  next();
};

const checkTeamNameExists = async (req, res, next) => {
  try {
    const existName = await Team.findOne({ name: req.body.name });
    if (existName) {
      return res.status(400).json({ msg: "Team name already exists." });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

const checkUserHasNoTeam = async (req, res, next) => {
  try {
    if (req.user.team) {
      return res
        .status(400)
        .json({ msg: `You're already a member of team ${req.user.team.name}` });
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};
const validateRegionInput = (req, res, next) => {
  const validRegions = gameConfig.regionList;
  const region = req.body.region;

  if (!validRegions.includes(region)) {
    return res.status(400).json({ msg: "Invalid region." });
  }

  next();
};

const createTeam = async (req, res) => {
  try {
    const newTeam = new Team({
      name: req.body.name,
      region: req.body.region,
      manager: { _id: req.user._id, name: req.user.nickName },
      players: [{ _id: req.user._id, gameRole: "Jett" }],
    });

    req.user.team = {
      _id: newTeam._id,
      role: "creator",
      name: newTeam.name,
    };

    await req.user.save();
    await newTeam.save();

    res.json({ msg: "The team has been created successfully!" });

    return nodeEvent.emit("teams-update");
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

export {
  checkTeamNameExists,
  checkUserHasNoTeam,
  createTeam,
  validateRegionInput,
  validateTeamInput,
};
