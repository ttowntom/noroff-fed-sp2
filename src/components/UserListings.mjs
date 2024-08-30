import { load } from "../storage/index.mjs";
import getListingsFromProfile from "../api/profile/listings.mjs";

// Check if the current user is the same as the user being viewed
const params = new URLSearchParams(location.search);
const currUser = params.get("name");
const isSelf = currUser === load("profile").name;

export default async function UserListings() {
  const section = document.createElement("section");
  section.id = "user-listings";
  section.classList.add("w-full", "flex", "flex-col", "gap-4", "mt-6");
  const h2 = document.createElement("h2");
  h2.textContent = "Listings";
  h2.classList.add(
    "text-3xl",
    "font-bold",
    "text-lavender-dark",
    "font-rowdies",
  );

  section.appendChild(h2);

  let listings = await getListingsFromProfile(currUser);
  console.log(listings);

  if (listings.data.length === 0) {
    const msg = document.createElement("p");
    msg.classList.add("text-lavender-dark");
    msg.textContent = `${isSelf ? "You have" : `${currUser} has`} no listings yet.`;
    section.appendChild(msg);
  }

  return section;
}
