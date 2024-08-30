import { API_AUCTION_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/profiles";
const method = "PUT";

export async function updateProfile(name, profileData) {
  if (!name) {
    throw new Error("No profile ID provided");
  }

  const updateProfileURL = `${API_AUCTION_URL}${action}/${name}`;

  const response = await authFetch(updateProfileURL, {
    method,
    body: JSON.stringify(profileData),
  });

  // Handle error
  if (!response.ok) {
    const errorContainer = document.querySelector("#error-container");
    errorContainer.classList.remove("hidden");
    errorContainer.textContent = "Failed to update profile: " + response;

    throw new Error("Failed to update profile");
  }

  // Handle success
  const data = await response.json();
  // Re-direct to the updated profile
  window.location.href = `/user/?name=${data.data.name}`;
}
