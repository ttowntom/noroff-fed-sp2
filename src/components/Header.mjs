import { load } from "../storage/index.mjs";
import MenuCard from "./MenuCard.mjs";
import MenuButton from "./MenuButton.mjs";
import hamburgerMenuToggle from "../handlers/hamburgerMenuToggle.mjs";
const user = load("profile");
const credits = load("credits");

export default function Header() {
  const header = createHeader();
  const contentsContainer = createContentsContainer();
  const col1 = createLogoColumn();
  const col2 = createCreditsColumn();
  const col3 = createActionsColumn();
  const menuCard = MenuCard();

  menuCard && contentsContainer.append(menuCard);
  header.append(contentsContainer);
  contentsContainer.append(col1, col2, col3);
  return header;
}

function createHeader() {
  const header = document.createElement("header");
  header.classList.add(
    "py-2",
    "sm:py-4",
    "px-2",
    "sm:px-0",
    "w-full",
    "flex",
    "justify-end",
    "sm:mx-auto",
    "bg-white",
    "z-50",
    "sticky",
    "top-0",
    "shadow-lg",
  );
  return header;
}

function createContentsContainer() {
  const container = document.createElement("div");
  container.id = "header-contents";
  container.classList.add(
    "w-full",
    "sm:w-5/6",
    "sm:max-w-screen-xl",
    "mx-auto",
    "flex",
    "flex-row",
    "items-center",
    "justify-between",
    "gap-4",
    "bg-white",
  );
  return container;
}

function createLogoColumn() {
  const col1 = document.createElement("div");
  col1.classList.add("sm:w-1/4", "flex");
  col1.innerHTML = `
    <a href="/">
      <img src="/images/quickBid-logo.svg" alt="QuickBid Logo" class="w-full max-h-10" />
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
    "text-lavender-dark",
  );

  if (!user) {
    col2.innerHTML = ``;
  } else {
    col2.innerHTML = `
    <i class="fa-solid fa-dollar-sign"></i>
    <div class="flex flex-col">
      <p class="font-semibold mb-0 pb-0 text-lavender-dark">${credits}</p>
      <p class="font-light -mt-2 pt-0 text-lavender-dark">credits</p>
    </div>
  `;
  }
  return col2;
}

function createActionsColumn() {
  const col3 = document.createElement("nav");
  col3.classList.add("flex", "justify-end", "gap-6");

  // New listing link
  let newListingLink;
  if (user) {
    newListingLink = MenuButton(
      ["fa-circle-plus"],
      "New listing",
      () => {
        window.location.href = "/listings/new-listing/";
      },
      true,
    );
    col3.append(newListingLink);
  }

  // Profile link and hamburger menu / log in button
  let menuButton;
  if (user) {
    menuButton = MenuButton(["fa-circle-user"], user.name, hamburgerMenuToggle);
  } else {
    menuButton = MenuButton(["fa-right-to-bracket"], "Log in", () => {
      window.location.href = "/user/login/";
    });
  }

  col3.append(menuButton);

  return col3;
}
