import loadLoginPage from "./pages/user/login.mjs";
import loadRegistrationPage from "./pages/user/registration.mjs";
import loadNewListingPage from "./pages/listings/newListing.mjs";
import loadUserPage from "./pages/user/user.mjs";
import loadListingPage from "./pages/listings/listing.mjs";
import loadEditListingPage from "./pages/listings/editListing.mjs";
import loadListingsPage from "./pages/listings/listings.mjs";
import loadSearchListingsPage from "./pages/listings/search.mjs";
import { load } from "./storage/index.mjs";

export default function router() {
  // Get path
  const path = location.pathname;

  switch (path) {
    case "/":
      // Listings page
      loadListingsPage();
      break;
    case "/user/sign-up/":
      // Registration page
      loadRegistrationPage();
      break;
    case "/user/login/":
      // Login page
      loadLoginPage();
      break;
    case "/listings/":
      // Listing page
      loadListingPage();
      break;
    case "/listings/search/":
      // Listing page
      loadSearchListingsPage();
      break;
    case "/listings/new-listing/":
      // New listing page
      loadNewListingPage();
      break;
    case "/listings/edit-listing/":
      // Edit listing page
      loadEditListingPage();
      break;
    case "/user/":
      // User page
      loadUserPage();
      break;

    default:
      break;
  }
}
