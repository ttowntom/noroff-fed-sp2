import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { load } from "../../storage/index.mjs";

const user = load("profile").name;

export default async function bidOnListing(id, bidAmount) {
  const action = "/listings";
  const method = "POST";
  const body = JSON.stringify({ amount: bidAmount });

  if (!id) {
    throw new Error("No listing ID provided");
  }

  const bidOnListingURL = `${API_AUCTION_URL}${action}/${id}/bids`;

  const response = await authFetch(bidOnListingURL, {
    method,
    body,
  });

  if (!response.ok) {
    const resString = JSON.parse(response.message);
    const errContainer = document.querySelector("#error-container");
    errContainer.textContent = `Error: ${resString[0].message}`;
  }

  window.location.href = `/listings/?listing=${id}`;
}
