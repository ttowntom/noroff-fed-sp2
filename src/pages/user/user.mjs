import UserBadge from "../../components/UserBadge.mjs";
import UserListings from "../../components/UserListings.mjs";
import UserWins from "../../components/UserWins.mjs";

export default async function loadUserPage() {
  const main = document.querySelector("main");

  main.appendChild(await UserBadge());
  main.appendChild(await UserListings());
  main.appendChild(await UserWins());
}
