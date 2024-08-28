import { load } from "../storage/index.mjs";
import MenuCard from "./MenuCard.mjs";
const user = load("profile");

export default function Header() {
  const header = createHeader();
  const contentsContainer = createContentsContainer();
  const col1 = createLogoColumn();
  const col2 = createCreditsColumn();
  const col3 = createActionsColumn();

  header.append(MenuCard(), contentsContainer);
  contentsContainer.append(col1, col2, col3);
  return header;
}

function createHeader() {
  const header = document.createElement("header");
  header.classList.add("sm:w-5/6", "flex", "justify-end", "sm:mx-auto");
  return header;
}

function createContentsContainer() {
  const container = document.createElement("div");
  container.classList.add(
    "w-full",
    "sm:max-w-screen-xl",
    "mx-auto",
    "p-4",
    "flex",
    "flex-row",
    "items-center",
    "justify-between",
    "gap-4",
  );
  return container;
}

function createLogoColumn() {
  const col1 = document.createElement("div");
  col1.classList.add("sm:w-1/4");
  col1.innerHTML = `
    <a href="/">
      <img src="/assets/quickBid-logo.svg" alt="QuickBid Logo" class="w-full max-h-16" />
    </a>
  `;
  return col1;
}

function createCreditsColumn() {
  const col2 = document.createElement("div");
  col2.classList.add(
    "hidden",
    "sm:flex",
    "items-center",
    "gap-2",
    "pt-2",
    "text-lavender-dark",
  );

  if (!user) {
    col2.innerHTML = ``;
  } else {
    col2.innerHTML = `
    <i class="fa-solid fa-dollar-sign"></i>
    <div class="flex flex-col">
      <p class="font-semibold mb-0 pb-0 text-lavender-dark">10 000</p>
      <p class="font-light -mt-2 pt-0 text-lavender-dark">credits</p>
    </div>
  `;
  }
  return col2;
}

function createActionsColumn() {
  const col3 = document.createElement("nav");
  col3.classList.add("flex", "justify-end", "gap-6", "pt-2");

  let menuButton;
  let newListingLink;
  if (user) {
    newListingLink = createNewListingLink();
    col3.append(newListingLink);
  }
  if (user) {
    menuButton = createMenuButton();
  } else {
    menuButton = document.createElement("a");
    menuButton.href = "/user/login/";
    menuButton.innerHTML = createLoginButton();
  }

  col3.append(menuButton);
  setupMenuToggle(menuButton);

  return col3;
}

function createNewListingLink() {
  const link = document.createElement("a");
  link.href = "/listings/new-listing/";
  link.classList.add(
    "hidden",
    "sm:flex",
    "gap-2",
    "items-center",
    "hover:text-opacity-90",
    "group",
  );
  link.innerHTML = `
    <i class="fa-solid fa-circle-plus text-3xl text-lavender group-hover:text-opacity-90"></i>
    <p class="font-semibold text-sm text-lavender-dark group-hover:text-opacity-90">New listing</p>
  `;
  return link;
}

function createButton(iconClass, textContent) {
  const button = document.createElement("button");
  button.classList.add(
    "flex",
    "gap-2",
    "items-center",
    "hover:text-opacity-90",
    "group",
  );

  const icon = document.createElement("i");
  icon.classList.add(
    ...iconClass,
    "fa-solid",
    "text-4xl",
    "sm:text-3xl",
    "text-lavender",
    "group-hover:text-opacity-90",
  );

  const text = document.createElement("p");
  text.classList.add(
    "hidden",
    "sm:flex",
    "font-semibold",
    "text-sm",
    "text-lavender-dark",
    "group-hover:text-opacity-90",
  );
  text.textContent = textContent;

  button.append(icon, text);
  return button;
}

function createLoginButton() {
  const iconClass = ["fa-right-to-bracket"];
  return createButton(iconClass, "Log in");
}

function createMenuButton(user) {
  const iconClass = ["fa-circle-chevron-down"];
  return createButton(iconClass, "username");
}

function setupMenuToggle(menuButton) {
  let menuOpen = false;

  user &&
    menuButton.addEventListener("click", () => {
      const menuCard = document.querySelector("#menu-card");
      const menuIcon = document.querySelector("#menu-icon");
      menuCard.classList.toggle("hidden");
      menuIcon.classList.toggle("fa-circle-chevron-down");
      menuIcon.classList.toggle("fa-circle-xmark");
      menuOpen = !menuOpen;
    });

  user &&
    document.addEventListener("click", (e) => {
      if (
        menuOpen &&
        !e.target.closest("#menu-card") &&
        !e.target.closest("button")
      ) {
        const menuCard = document.querySelector("#menu-card");
        const menuIcon = document.querySelector("#menu-icon");
        menuCard.classList.add("hidden");
        menuIcon.classList.remove("fa-circle-xmark");
        menuIcon.classList.add("fa-circle-chevron-down");
        menuOpen = false;
      }
    });
}
