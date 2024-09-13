import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { load, save } from "../../storage/index.mjs";
import {
  listingSubmitLoader,
  listingSubmitLoaderOff,
} from "../../handlers/listingSubmitLoader.mjs";

/**
 * Places a bid on a listing
 * @param {string} id - ID of the listing to bid on
 * @param {number} bidAmount - Amount to bid on the listing
 */
export default async function bidOnListing(id, bidAmount) {
  const action = "/listings";
  const method = "POST";
  const body = JSON.stringify({ amount: bidAmount });

  if (!id) {
    throw new Error("No listing ID provided");
  }

  const bidOnListingURL = `${API_AUCTION_URL}${action}/${id}/bids`;

  // Set loader
  listingSubmitLoader();

  const response = await authFetch(bidOnListingURL, {
    method,
    body,
  });

  if (!response.ok) {
    listingSubmitLoaderOff();
    const resString = JSON.parse(response.message);
    const errContainer = document.querySelector("#error-bid");
    errContainer.textContent = `Error: ${resString[0].message}`;
    errContainer.classList.add("text-white", "text-center");
  }

  if (response.ok) {
    const credits = load("credits");
    save("credits", credits - bidAmount);

    window.location.href = `/listings/?listing=${id}`;
  }
}
