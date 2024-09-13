import { API_BASE_URL } from "../constants.mjs";
import {
  listingSubmitLoader,
  listingSubmitLoaderOff,
} from "../../handlers/listingSubmitLoader.mjs";

import { login } from "./login.mjs";

/**
 * Registers a user
 * @param {object} profile - User profile
 * @param {string} action - URL to fetch
 * @param {string} method - HTTP method
 */
export async function register(profile, action, method) {
  const actionURL = new URL(action);
  const registrationURL = `${API_BASE_URL}${actionURL.pathname}`;
  const body = JSON.stringify(profile);

  try {
    // Set loader
    listingSubmitLoader();

    // Fetch
    const response = await fetch(registrationURL, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    // Handle error
    if (!response.ok) {
      listingSubmitLoaderOff();
      const errorData = await response.json();
      const errContainer = document.querySelector(`#error-container`);
      errContainer.innerHTML = "";

      errorData.errors.forEach((error) => {
        const errMsg = document.createElement("p");
        errMsg.textContent = error.message;
        errContainer.classList.remove("hidden");
        errContainer.appendChild(errMsg);
      });
    } else if (response.ok) {
      // Handle success

      // Log in user after registration
      const loginProfile = {
        email: profile.email,
        password: profile.password,
      };
      const loginAction = `${API_BASE_URL}/auth/login`;
      const loginMethod = "POST";
      login(loginProfile, loginAction, loginMethod);
    }
  } catch (error) {
    listingSubmitLoaderOff();
    throw new Error(error);
  }
}
