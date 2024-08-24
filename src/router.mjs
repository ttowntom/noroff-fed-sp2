import loadRegistrationPage from "./pages/user/registration.mjs";

export default function router() {
  console.log("Router Loaded");

  // Get current path
  const path = location.pathname;
  console.log(path);

  // Get url parameters
  // const urlParams = new URLSearchParams(window.location.search);

  switch (path) {
    case "/":
      // Listings page
      break;
    case "/user/sign-up/index.html":
      // Registration page
      loadRegistrationPage();
      break;

    default:
      break;
  }
}
