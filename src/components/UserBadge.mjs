import { load } from "../storage/index.mjs";
import { getProfile } from "../api/profile/profileRead.mjs";
import editAvatar from "../handlers/editAvatar.mjs";

import Button from "./Button.mjs";

// Get URL path and parameters
const searchParams = new URLSearchParams(window.location.search);
let nameParam = searchParams.get("name");
console.log(nameParam);

// Check if the logged in user is viewing their own profile
const loggedInUser = load("profile");
let isSelf = false;
if (loggedInUser) {
  isSelf = nameParam === loggedInUser.name;
}

if (!nameParam && loggedInUser) {
  nameParam = loggedInUser.name;
}

export default async function UserBadge() {
  const user = await getProfile(nameParam);

  const badgeContainer = document.createElement("div");
  badgeContainer.id = "badge-container";
  badgeContainer.classList.add("flex", "gap-4", "flex-wrap");

  const userBadge = document.createElement("div");
  userBadge.classList.add(
    "flex",
    "flex-grow",
    "items-center",
    "gap-4",
    "bg-white",
    "p-2",
    "text-lavender-dark"
  );

  const textContainer = document.createElement("div");
  textContainer.classList.add("flex", "flex-col");

  const userAvatar = document.createElement("img");
  userAvatar.src = user.data.avatar.url;
  userAvatar.alt = `${user.data.name}'s avatar`;
  userAvatar.classList.add("rounded-full", "w-16", "h-16");

  const userName = document.createElement("p");
  userName.textContent = user.data.name;
  userName.classList.add("font-semibold", "text-lg", "break-all");
  textContainer.appendChild(userName);

  const userEmail = document.createElement("p");
  userEmail.textContent = user.data.email;
  userEmail.classList.add("break-all");
  textContainer.appendChild(userEmail);

  userBadge.appendChild(userAvatar);
  userBadge.appendChild(textContainer);
  badgeContainer.appendChild(userBadge);
  if (isSelf) {
    badgeContainer.ariaLive = "polite";
    badgeContainer.appendChild(
      Button("user-pen", "button", "Edit avatar", "lavender", false, () =>
        editAvatar(user.data)
      )
    );
  }

  return badgeContainer;
}
