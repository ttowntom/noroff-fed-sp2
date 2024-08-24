import { API_BASE_URL } from "../constants.mjs";
// import { login } from "./login.mjs";

export async function register(profile, action, method) {
  const actionURL = new URL(action);
  const registrationURL = `${API_BASE_URL}${actionURL.pathname}`;
  const body = JSON.stringify(profile);

  try {
    const response = await fetch(registrationURL, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });

    // Handle error
    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
      const errContainer = document.querySelector(`#error-container`);

      errorData.errors.forEach((error) => {
        const errMsg = document.createElement("p");
        errMsg.textContent = error.message;
        errContainer.appendChild(errMsg);
      });
    } else if (response.ok) {
      // Handle success
      console.log(response);

      // Log in user after registration
      // const loginProfile = {
      //   email: profile.email,
      //   password: profile.password,
      // };
      // const loginAction = `${API_BASE_URL}/auth/login`;
      // const loginMethod = "POST";
      // login(loginProfile, loginAction, loginMethod);
    }
  } catch (error) {
    throw new Error(error);
  }
}
