import router from "./router.mjs";
import Footer from "./components/Footer.mjs";
import Header from "./components/Header.mjs";
import positionMenuCard from "./handlers/positionMenuCard.mjs";

const main = document.querySelector("main");
main.classList.add(
  "w-full",
  "sm:w-5/6",
  "sm:max-w-screen-xl",
  "mx-auto",
  "mt-4",
  "flex-grow",
);

// Call the router function
router();

// Add the header
document.body.prepend(Header());

// Position the menu card
positionMenuCard();

// Add the footer
document.body.appendChild(Footer());
