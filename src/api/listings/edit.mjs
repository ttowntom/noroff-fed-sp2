import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const errContainer = document.querySelector(`#error-container`);

// Create listing
export async function editListing(listing, action, method, id) {
  const actionURL = new URL(action);
  const listingURL = `${API_AUCTION_URL}${actionURL.pathname}/${id}`;
  const body = JSON.stringify(listing);

  let response;
  try {
    response = await authFetch(listingURL, {
      method,
      body,
    });

    // Handle error
    if (!response.ok) {
      const errorData = await response.json();
      errContainer.innerHTML =
        "<p class='font-bold'>Could not save listing</p>";

      errorData.errors.forEach((error) => {
        const errMsg = document.createElement("p");
        errMsg.textContent = error.message;
        errContainer.classList.remove("hidden");
        errContainer.appendChild(errMsg);
      });
    }

    // Handle success
    const data = await response.json();
    console.log(data);
    const id = data.data.id;

    // Redirect
    window.location.href = "/listings/?listing=" + id;
  } catch (error) {
    const errors = JSON.parse(error.message);

    errContainer.innerHTML = "<p class='font-bold'>Could not save listing</p>";

    errors.forEach((error) => {
      const errMsg = document.createElement("p");
      errMsg.textContent = error.message;
      errContainer.classList.remove("hidden");
      errContainer.appendChild(errMsg);
    });

    throw new Error(error);
  }
}
