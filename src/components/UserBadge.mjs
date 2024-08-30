import { load } from "../storage/index.mjs";
import { getProfile } from "../api/profile/profileRead.mjs";
import Button from "./Button.mjs";
import editAvatar from "../handlers/editAvatar.mjs";

// Get URL path and parameters
const searchParams = new URLSearchParams(window.location.search);
const nameParam = searchParams.get("name");

// Check if the logged in user is viewing their own profile
const loggedInUser = load("profile");
const isSelf = nameParam === loggedInUser.name;

export default async function UserBadge() {
  const user = await getProfile(nameParam);

  const badgeContainer = document.createElement("div");
  badgeContainer.id = "badge-container";
  badgeContainer.classList.add("flex", "gap-4");

  const userBadge = document.createElement("div");
  userBadge.classList.add(
    "flex",
    "flex-grow",
    "items-center",
    "gap-4",
    "bg-white",
    "p-2",
    "text-lavender-dark",
  );

  const textContainer = document.createElement("div");
  textContainer.classList.add("flex", "flex-col");

  const userAvatar = document.createElement("img");
  userAvatar.src = user.data.avatar.url;
  userAvatar.alt = `${user.data.name}'s avatar`;
  userAvatar.classList.add("rounded-full", "w-16", "h-16");

  const userName = document.createElement("p");
  userName.textContent = user.data.name;
  userName.classList.add("font-semibold", "text-lg");
  textContainer.appendChild(userName);

  const userEmail = document.createElement("p");
  userEmail.textContent = user.data.email;
  textContainer.appendChild(userEmail);

  userBadge.appendChild(userAvatar);
  userBadge.appendChild(textContainer);
  badgeContainer.appendChild(userBadge);
  isSelf &&
    badgeContainer.appendChild(
      Button("user-pen", "button", "Edit avatar", "lavender", false, () =>
        editAvatar(user.data),
      ),
    );

  return badgeContainer;
}
