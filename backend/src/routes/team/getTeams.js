import { Team } from "../../db/models/team/teams.js";

const getTeams = async (req, res, next) => {
  const { rank, location } = req.params;
  let teams = await Team.find({});
  teams.forEach((item, index) => {
    if (item.players.length < 5) {
      item.needPlayers = true;
    }
  });
  res.json(teams);
};

export { getTeams };
