import { API_BASE_URL } from "../constants.mjs";
import { getProfile } from "../profile/profileRead.mjs";
import * as storage from "../../storage/index.mjs";

export async function login(profile, action, method) {
  const actionURL = new URL(action);
  const loginURL = `${API_BASE_URL}${actionURL.pathname}`;
  const body = JSON.stringify(profile);

  let response;
  try {
    response = await fetch(loginURL, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    // Handle error
    if (!response.ok) {
      const errorData = await response.json();
      const errContainer = document.querySelector(`#error-container`);
      errContainer.innerHTML = "";

      errorData.errors.forEach((error) => {
        const errMsg = document.createElement("p");
        errMsg.textContent = error.message;
        errContainer.classList.remove("hidden");
        errContainer.appendChild(errMsg);
      });
    }

    // Handle success
    const data = await response.json();
    const { accessToken, ...user } = data.data;

    // Save data to local storage
    storage.save("token", accessToken);
    storage.save("profile", user);

    // Get full user profile and save credits
    const profile = await getProfile(user.name);
    storage.save("credits", profile.data.credits);

    // Redirect
    window.location.href = "/";
  } catch (error) {
    throw new Error(error);
  }
}
