import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

export default async function getWinsFromProfile(
  username,
  limit = 100,
  page = 1,
) {
  try {
    const getPostURL = `${API_AUCTION_URL}/profiles/${username}/wins?limit=${limit}&page=${page}`;

    const response = await authFetch(getPostURL);

    return await response.json();
  } catch (error) {
    throw new Error("Error getting wins: " + error.message);
  }
}
