import UserBadge from "../../components/UserBadge.mjs";
import UserListings from "../../components/UserListings.mjs";
import UserWins from "../../components/UserWins.mjs";
import updateTitle from "../../handlers/updateTitle.mjs";
import UserPageSkeleton from "../../components/UserPageSkeleton.mjs";
import { load } from "../../storage/index.mjs";

// Load logged in user
const user = load("profile")?.name;

// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
let userName = urlParams.get("name") || user;

export default async function loadUserPage() {
  // Update title
  updateTitle(false, userName);

  // Grab main
  const main = document.querySelector("main");
  main.ariaLive = "polite";
  const title = document.createElement("h1");
  title.classList.add("sr-only");
  title.textContent = userName;
  main.appendChild(title);

  // Append skeleton loader
  const skeletonLoader = UserPageSkeleton();
  main.appendChild(skeletonLoader);

  try {
    const userBadge = await UserBadge();
    const userListings = await UserListings();
    const userWins = await UserWins();

    // Remove skeleton loader
    main.removeChild(skeletonLoader);

    main.appendChild(userBadge);
    main.appendChild(userListings);
    main.appendChild(userWins);
  } catch (error) {
    console.error("Failed to load user page:", error);
  }
}
