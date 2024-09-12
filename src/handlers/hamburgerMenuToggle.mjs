import { load } from "../storage/index.mjs";
const user = load("profile");

export default function hamburgerMenuToggle() {
  let menuOpen = false;

  if (user) {
    const menuCard = document.querySelector("#menu-card");
    const menuIcon = document.querySelector(`#btn-${user.name} i`);
    menuCard.classList.toggle("hidden");
    menuIcon.classList.toggle("fa-circle-user");
    menuIcon.classList.toggle("fa-circle-chevron-down");
    menuOpen = !menuOpen;
  }

  user &&
    document.addEventListener("click", (e) => {
      if (
        menuOpen &&
        !e.target.closest("#menu-card") &&
        !e.target.closest("button")
      ) {
        console.log("closing menu");
        const menuCard = document.querySelector("#menu-card");
        const menuIcon = document.querySelector(`#btn-${user.name} i`);
        menuCard.classList.add("hidden");
        menuIcon.classList.remove("fa-circle-chevron-down");
        menuIcon.classList.add("fa-circle-user");
        menuOpen = false;
      }
    });
}
