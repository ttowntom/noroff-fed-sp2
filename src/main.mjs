import router from "./router.mjs";
import Footer from "./components/Footer.mjs";
import Header from "./components/Header.mjs";

// Call the router function
router();

document.body.prepend(Header());
document.body.appendChild(Footer());
