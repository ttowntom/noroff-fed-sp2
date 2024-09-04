import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const errContainer = document.querySelector(`#error-container`);

// Create listing
export async function createListing(listing, action, method) {
  const actionURL = new URL(action);
  const listingURL = `${API_AUCTION_URL}${actionURL.pathname}`;
  const body = JSON.stringify(listing);

  let response;
  try {
    response = await authFetch(listingURL, {
      method,
      body,
    });

    // Handle error
    if (!response.ok) {
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
    throw new Error(error);
  }
}
