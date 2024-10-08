import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "?_listings=true&_wins=true&sort=created&order=desc";

/**
 * Fetches a list of profiles from the API
 * @param {number} limit - Number of profiles to return
 * @param {number} page - Page number to return
 * @returns {Promise} - Promise object represents the list of profiles
 */
export async function getProfiles(limit = 100, page = 1) {
  try {
    const getProfilesURL = `${API_AUCTION_URL}/profiles${action}&limit=${limit}&page=${page}`;

    const response = await authFetch(getProfilesURL);

    return await response.json();
  } catch (error) {
    throw new Error("Error getting profiles: " + error.message);
  }
}

/**
 * Fetches a single profile from the API
 * @param {string} name - Name of the profile to fetch
 * @returns {Promise} - Promise object represents the profile
 */
export async function getProfile(name) {
  if (!name) {
    throw new Error("No profile ID provided");
  }

  try {
    const getProfileURL = `${API_AUCTION_URL}/profiles/${name}${action}`;

    const response = await authFetch(getProfileURL);

    return await response.json();
  } catch (error) {
    throw new Error("Error getting profile: " + error.message);
  }
}
