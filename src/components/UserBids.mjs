import { load } from "../storage/index.mjs";
import getBidsFromProfile from "../api/profile/bids.mjs";
import renderListings from "../handlers/renderListings.mjs";
import activeBids from "../handlers/activeBids.mjs";

// Get URL path and parameters
const searchParams = new URLSearchParams(window.location.search);
let nameParam = searchParams.get("name");

// Check if the logged in user is viewing their own profile
const loggedInUser = load("profile");
let isSelf = false;
if (loggedInUser) {
  isSelf = nameParam === loggedInUser.name;
}

if (!nameParam && loggedInUser) {
  nameParam = loggedInUser.name;
}

export default async function UserBids() {
  const section = document.createElement("section");
  section.id = "user-bids";
  section.classList.add("w-full", "flex", "flex-col", "gap-4", "mt-12");
  const h2 = document.createElement("h2");
  h2.textContent = "Active Bids";
  h2.classList.add(
    "text-3xl",
    "font-bold",
    "text-lavender-dark",
    "font-rowdies"
  );
  section.appendChild(h2);

  let bids = await getBidsFromProfile(nameParam);
  const activeBidsClean = activeBids(bids);
  section.appendChild(renderListings(activeBidsClean));

  if (bids.data.length === 0) {
    const msg = document.createElement("p");
    msg.classList.add("text-lavender-dark");
    msg.textContent = `${isSelf ? "You have" : `${nameParam} has`} no bids yet.`;
    section.appendChild(msg);
  }

  return section;
}
