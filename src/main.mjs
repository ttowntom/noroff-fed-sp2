import router from "./router.mjs";
import Footer from "./components/Footer.mjs";
import Header from "./components/Header.mjs";

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

document.body.prepend(Header());
document.body.appendChild(Footer());
