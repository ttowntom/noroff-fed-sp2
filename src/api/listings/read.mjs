import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "?_seller=true&_bids=true&sort=created&order=desc";

/**
 * Fetches a list of listings from the API
 * @param {number} limit - Number of listings to return
 * @param {number} page - Page number to return
 * @returns {Promise} - Promise object represents the list of listings
 */
export async function getListings(limit = 9, page = 1) {
  try {
    const getListingURL = `${API_AUCTION_URL}/listings${action}&limit=${limit}&page=${page}`;

    const response = await authFetch(getListingURL);

    return await response.json();
  } catch (error) {
    throw new Error("Error getting listings: " + error.message);
  }
}

/**
 * Fetches a single listing from the API
 * @param {string} id - ID of the listing to fetch
 * @returns {Promise} - Promise object represents the listing
 */
export async function getListing(id) {
  if (!id) {
    throw new Error("No listing ID provided");
  }

  try {
    const getListingURL = `${API_AUCTION_URL}/listings/${id}${action}`;

    const response = await authFetch(getListingURL);

    return await response.json();
  } catch (error) {
    throw new Error("Error getting listing: " + error.message);
  }
}

/**
 * Fetches a list of listings from the API
 * @param {number} limit - Number of listings to return
 * @param {number} page - Page number to return
 * @param {string} searchQuery - Search query to filter listings
 * @returns {Promise} - Promise object represents the list of listings
 */
export async function searchListings(limit = 9, page = 1, searchQuery) {
  try {
    const getListingURL = `${API_AUCTION_URL}/listings/search${action}&limit=${limit}&page=${page}&q=${searchQuery}`;
    const response = await authFetch(getListingURL);

    return await response.json();
  } catch (error) {
    throw new Error("Error getting listings: " + error.message);
  }
}
