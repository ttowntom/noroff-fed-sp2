import { load } from "../storage/index.mjs";
import getWinsFromProfile from "../api/profile/wins.mjs";

// Check if the current user is the same as the user being viewed
const params = new URLSearchParams(location.search);
const currUser = params.get("name");
const isSelf = currUser === load("profile").name;

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
    "font-rowdies",
  );

  section.appendChild(h2);

  let listings = await getWinsFromProfile(currUser);
  console.log(listings.data);

  if (listings.data.length === 0) {
    const msg = document.createElement("p");
    msg.classList.add("text-lavender-dark");
    msg.textContent = `${isSelf ? "You have" : `${currUser} has`} no wins yet.`;
    section.appendChild(msg);
  }

  return section;
}
