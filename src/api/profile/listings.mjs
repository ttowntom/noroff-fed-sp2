import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "?_seller=true&_bids=true&sort=created&order=desc";

export default async function getListingsFromProfile(
  username,
  limit = 100,
  page = 1,
) {
  try {
    const getPostURL = `${API_AUCTION_URL}/profiles/${username}/listings${action}&limit=${limit}&page=${page}`;

    const response = await authFetch(getPostURL);

    return await response.json();
  } catch (error) {
    throw new Error("Error getting listings: " + error.message);
  }
}
