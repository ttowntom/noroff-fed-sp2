import loadLoginPage from "./pages/user/login.mjs";
import loadRegistrationPage from "./pages/user/registration.mjs";
import loadNewListingPage from "./pages/listings/newListing.mjs";
import Footer from "./components/Footer.mjs";

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
      document.body.appendChild(Footer());
      break;
    case "/user/sign-up/":
      // Registration page
      loadRegistrationPage();
      document.body.appendChild(Footer());
      break;
    case "/user/login/":
      // Login page
      loadLoginPage();
      document.body.appendChild(Footer());
      break;
    case "/listings/new-listing/":
      // New listing page
      loadNewListingPage();
      document.body.appendChild(Footer());
      break;

    default:
      // Insert Footer before closing body tag
      break;
  }
}
