import { load } from "../storage/index.mjs";
const user = load("profile");

export default function hamburgerMenuToggle() {
  let menuOpen = false;
  const btn = document.querySelector(`#btn-${user.name.toLowerCase()}`);

  if (user) {
    const menuCard = document.querySelector("#menu-card");
    const menuIcon = document.querySelector(
      `#btn-${user.name.toLowerCase()} i`
    );

    menuCard.classList.remove("hidden");
    menuIcon.classList.remove("fa-circle-user");
    menuIcon.classList.add("fa-circle-chevron-down");
    menuOpen = !menuOpen;
  }

  function closeMenu(e) {
    if (
      menuOpen &&
      !e.target.closest("#menu-card") &&
      !e.target.closest("button")
    ) {
      const menuCard = document.querySelector("#menu-card");
      const menuIcon = document.querySelector(
        `#btn-${user.name.toLowerCase()} i`
      );
      menuCard.classList.add("hidden");
      menuIcon.classList.remove("fa-circle-chevron-down");
      menuIcon.classList.add("fa-circle-user");
      menuOpen = false;
    }
  }

  user && document.addEventListener("click", (e) => closeMenu(e));

  // Close menu when user clicks on the button
  user &&
    btn.addEventListener("click", () => {
      const menuCard = document.querySelector("#menu-card");
      const menuIcon = document.querySelector(
        `#btn-${user.name.toLowerCase()} i`
      );

      if (menuOpen) {
        menuCard.classList.add("hidden");
        menuIcon.classList.remove("fa-circle-chevron-down");
        menuIcon.classList.add("fa-circle-user");
      } else {
        menuCard.classList.remove("hidden");
        menuIcon.classList.remove("fa-circle-user");
        menuIcon.classList.add("fa-circle-chevron-down");
      }

      menuOpen = false;
    });
}
