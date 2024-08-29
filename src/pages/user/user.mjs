import UserBadge from "../../components/UserBadge.mjs";
export default async function loadUserPage() {
  const main = document.querySelector("main");

  main.appendChild(await UserBadge());
}
