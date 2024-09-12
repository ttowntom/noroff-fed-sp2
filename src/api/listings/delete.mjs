import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import { load } from "../../storage/index.mjs";

const user = load("profile")?.name;

const action = "/listings";
const method = "DELETE";

export default async function deleteListing(id) {
  if (!id) {
    throw new Error("No listing ID provided");
  }

  const deleteListingURL = `${API_AUCTION_URL}${action}/${id}`;

  const response = await authFetch(deleteListingURL, {
    method,
  });

  if (!response.ok) {
    const resString = JSON.parse(response.message);
    const errContainer = document.querySelector("#error-container");
    errContainer.textContent = `Error: ${resString[0].message}`;
  }

  window.location.href = `/user/?name=${user}`;
}
