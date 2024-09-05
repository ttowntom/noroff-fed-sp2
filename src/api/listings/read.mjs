import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "?_seller=true&_bids=true";

export async function getListings(limit = 9, page = 1) {
  try {
    const getListingURL = `${API_AUCTION_URL}/listings${action}&limit=${limit}&page=${page}`;

    const response = await authFetch(getListingURL);

    return await response.json();
  } catch (error) {
    throw new Error("Error getting listings: " + error.message);
  }
}

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

export async function searchListings(limit = 9, page = 1, searchQuery) {
  try {
    const getListingURL = `${API_AUCTION_URL}/listings/search${action}&limit=${limit}&page=${page}&q=${searchQuery}`;

    const response = await authFetch(getListingURL);

    return await response.json();
  } catch (error) {
    throw new Error("Error getting listings: " + error.message);
  }
}
