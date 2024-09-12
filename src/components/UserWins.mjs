import { load } from "../storage/index.mjs";
import getWinsFromProfile from "../api/profile/wins.mjs";
import renderListings from "../handlers/renderListings.mjs";

// Get URL path and parameters
const searchParams = new URLSearchParams(window.location.search);
const nameParam = searchParams.get("name");

// Check if the logged in user is viewing their own profile
const loggedInUser = load("profile");
let isSelf = false;
if (loggedInUser) {
  isSelf = nameParam === loggedInUser.name;
}

export default async function UserWins() {
  const section = document.createElement("section");
  section.id = "user-wins";
  section.classList.add("w-full", "flex", "flex-col", "gap-4", "mt-12");
  const h2 = document.createElement("h2");
  h2.textContent = "Wins";
  h2.classList.add(
    "text-3xl",
    "font-bold",
    "text-lavender-dark",
    "font-rowdies"
  );

  section.appendChild(h2);

  let listings = await getWinsFromProfile(nameParam);
  section.appendChild(renderListings(listings.data));

  if (listings.data.length === 0) {
    const msg = document.createElement("p");
    msg.classList.add("text-lavender-dark");
    msg.textContent = `${isSelf ? "You have" : `${nameParam} has`} no wins yet.`;
    section.appendChild(msg);
  }

  return section;
}
