import UserBadge from "../../components/UserBadge.mjs";
import UserListings from "../../components/UserListings.mjs";
import UserWins from "../../components/UserWins.mjs";
import UserBids from "../../components/UserBids.mjs";
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
    const userBids = await UserBids();

    // Remove skeleton loader
    main.removeChild(skeletonLoader);

    main.appendChild(userBadge);
    main.appendChild(userListings);
    main.appendChild(userBids);
    main.appendChild(userWins);
  } catch (error) {
    const errMsg = document.createElement("p");
    errMsg.classList.add("text-red-500", "text-center", "mt-4");
    errMsg.textContent = "An error occurred while fetching user data";
    main.appendChild(errMsg);
  }
}
