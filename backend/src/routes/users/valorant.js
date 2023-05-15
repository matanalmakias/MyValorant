// replace with your own API key
const apiKey = "YOUR_API_KEY_HERE";

async function getValorantAccountData(username, tagline) {
  try {
    const response = await axios.get(
      `https://eu.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${username}/${tagline}?api_key=${apiKey}`
    );
    const accountData = response.data;
    return accountData;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// example usage
const username = "exampleUsername";
const tagline = "exampleTagline";
const accountData = await getValorantAccountData(username, tagline);
if (accountData) {
  console.log(
    `Valorant account ID: ${accountData.gameName}:${accountData.tagLine}`
  );
} else {
  console.log("Failed to retrieve Valorant account data");
}
