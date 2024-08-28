import MenuCard from "./MenuCard.mjs";

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
    // "sm:w-5/6",
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
  col2.innerHTML = `
    <i class="fa-solid fa-dollar-sign"></i>
    <div class="flex flex-col">
      <p class="font-semibold mb-0 pb-0 text-lavender-dark">10 000</p>
      <p class="font-light -mt-2 pt-0 text-lavender-dark">credits</p>
    </div>
  `;
  return col2;
}

function createActionsColumn() {
  const col3 = document.createElement("nav");
  col3.classList.add("flex", "justify-end", "gap-6", "pt-2");

  const newListingLink = createNewListingLink();
  const menuButton = createMenuButton();

  col3.append(newListingLink, menuButton);
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

function createMenuButton() {
  const button = document.createElement("button");
  button.classList.add(
    "flex",
    "gap-2",
    "items-center",
    "hover:text-opacity-90",
    "group",
  );

  const icon = document.createElement("i");
  icon.id = "menu-icon";
  icon.classList.add(
    "fa-solid",
    "fa-circle-chevron-down",
    "sm:fa-circle-user",
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
  text.textContent = "John Doe";

  button.append(icon, text);
  return button;
}

function setupMenuToggle(menuButton) {
  let menuOpen = false;

  menuButton.addEventListener("click", () => {
    const menuCard = document.querySelector("#menu-card");
    const menuIcon = document.querySelector("#menu-icon");
    menuCard.classList.toggle("hidden");
    menuIcon.classList.toggle("fa-circle-chevron-down");
    menuIcon.classList.toggle("fa-circle-xmark");
    menuOpen = !menuOpen;
  });

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
