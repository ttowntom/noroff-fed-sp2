import UserBadge from "../../components/UserBadge.mjs";
import UserListings from "../../components/UserListings.mjs";
import UserWins from "../../components/UserWins.mjs";

import { load } from "../../storage/index.mjs";
const user = load("profile")?.name || null;

export default async function loadUserPage() {
  if (!user) {
    window.location.href = "/user/login/";
    return;
  }

  const main = document.querySelector("main");

  main.appendChild(await UserBadge());
  main.appendChild(await UserListings());
  main.appendChild(await UserWins());
}
