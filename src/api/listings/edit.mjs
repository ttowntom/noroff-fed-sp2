import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";
import {
  listingSubmitLoader,
  listingSubmitLoaderOff,
} from "../../handlers/listingSubmitLoader.mjs";

const errContainer = document.querySelector(`#error-container`);

// Create listing
export async function editListing(listing, action, method, id) {
  const actionURL = new URL(action);
  const listingURL = `${API_AUCTION_URL}${actionURL.pathname}/${id}`;
  const body = JSON.stringify(listing);

  let response;
  try {
    // Set loader
    listingSubmitLoader();

    // Fetch
    response = await authFetch(listingURL, {
      method,
      body,
    });

    /// Handle error
    if (!response.ok) {
      listingSubmitLoaderOff();
      const errorData = JSON.parse(response.message);
      errContainer.textContent = `Error: ${errorData[0].message}`;
      errContainer.classList.remove("hidden");
    }

    // Handle success
    const data = await response.json();
    const id = data.data.id;

    // Redirect
    window.location.href = "/listings/?listing=" + id;
  } catch (error) {
    listingSubmitLoaderOff();
    throw new Error(error);
  }
}
