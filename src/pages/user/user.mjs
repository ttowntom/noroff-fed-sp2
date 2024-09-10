import UserBadge from "../../components/UserBadge.mjs";
import UserListings from "../../components/UserListings.mjs";
import UserWins from "../../components/UserWins.mjs";

// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get("name");

export default async function loadUserPage() {
  // Grab main
  const main = document.querySelector("main");
  main.ariaLive = "polite";
  const title = document.createElement("h1");
  title.classList.add("sr-only");
  title.textContent = userName;
  main.appendChild(title);

  main.appendChild(await UserBadge());
  main.appendChild(await UserListings());
  main.appendChild(await UserWins());
}
