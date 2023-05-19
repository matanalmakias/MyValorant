import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

async function getPlayerInformation(region, name, tag) {
  const apiKey = process.env.RIOT_API_TOKEN;

  const url = `https://${region}.api.riotgames.com/val/players/v1/players`;
  const headers = {
    "X-Riot-Token": apiKey,
  };
  const params = {
    gameName: name,
    tagLine: tag,
  };

  try {
    const response = await axios.get(url, { headers, params });
    const player = response.data;

    console.log(player);
    // Extract and display the rank information
    if (player.competitiveTier) {
      console.log(`Player Rank: ${player.competitiveTier}`);
    } else {
      console.log("Player rank not available.");
    }
  } catch (error) {
    console.error("Error retrieving player information:", error);
  }
}

getPlayerInformation("eu", "T5uv", "1222");
