import logout from "../handlers/logout.mjs";

function createCreditsContainer() {
  const creditsContainer = document.createElement("div");
  creditsContainer.classList.add(
    "w-full",
    "flex",
    "items-center",
    "justify-center",
    "gap-2",
    "bg-white",
    "py-2",
    "px-4",
    "my-2",
    "rounded-md",
    "text-lavender-dark",
  );
  creditsContainer.innerHTML = `
    <i class="fa-solid fa-dollar-sign"></i>
    <div class="flex flex-col">
      <p class="font-semibold mb-0 pb-0 text-lavender-dark">10 000</p>
      <p class="font-light -mt-2 pt-0 text-lavender-dark">credits</p>
    </div>
  `;
  return creditsContainer;
}

function createLogoutButton() {
  const logoutButton = document.createElement("button");
  logoutButton.classList.add(
    "w-full",
    "bg-lavender-light",
    "text-white",
    "py-2",
    "rounded-md",
    "hover:bg-lavender",
  );
  logoutButton.textContent = "Log out";

  logoutButton.addEventListener("click", logout);

  return logoutButton;
}

function createMenuItem(name, link) {
  const menuItem = document.createElement("li");
  const menuLink = document.createElement("a");
  menuLink.href = link;
  menuLink.textContent = name;
  menuLink.classList.add("text-white", "hover:underline");
  menuItem.appendChild(menuLink);
  return menuItem;
}

function createMenuList() {
  const menuList = document.createElement("ul");
  menuList.classList.add("flex", "flex-col", "gap-2", "items-center");

  menuList.appendChild(createMenuItem("Profile", "/user/"));
  menuList.appendChild(createMenuItem("New listing", "/listings/new-listing/"));
  menuList.appendChild(createCreditsContainer());
  menuList.appendChild(createLogoutButton());

  return menuList;
}

export default function MenuCard() {
  const menuCard = document.createElement("div");
  menuCard.id = "menu-card";
  menuCard.classList.add(
    "hidden",
    "flex",
    "flex-col",
    "w-full",
    "sm:w-1/4",
    "mt-20",
    "absolute",
    "z-50",
    "py-4",
    "px-6",
    "bg-lavender-dark",
    "shadow-lg",
    "rounded-md",
  );

  menuCard.appendChild(createMenuList());

  return menuCard;
}
