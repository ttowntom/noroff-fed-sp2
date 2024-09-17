import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { renderListingsSkeleton } from "../../handlers/renderListings.mjs";

const main = document.querySelector("main");
const sort = "?sort=id";

/**
 * Fetches a list of bids from the API
 * @param {string} username - Username of the profile to fetch wins for
 * @returns {Promise} - Promise object represents the list of wins
 */
export default async function getBidsFromProfile(username) {
  try {
    // Render skeleton
    const skeleton = renderListingsSkeleton();
    skeleton.id = "listings-skeleton";
    main.appendChild(skeleton);

    const getPostURL = `${API_AUCTION_URL}/profiles/${username}/bids${sort}&_listings=true`;

    const response = await authFetch(getPostURL);

    return await response.json();
  } catch (error) {
    throw new Error("Error getting bids: " + error.message);
  } finally {
    // Remove skeleton
    const skeleton = document.getElementById("listings-skeleton");
    skeleton.remove();
  }
}
