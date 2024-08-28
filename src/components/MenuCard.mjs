function createCreditsContainer() {
  const creditsContainer = document.createElement("div");
  creditsContainer.classList.add(
    "w-full",
    "flex",
    "items-center",
    "justify-center",
    "gap-2",
    "bg-white",
    "p-2",
    "my-2",
    "rounded-md",
    "text-lavender-dark",
  );
  creditsContainer.innerHTML = `
	<i class="fa-solid fa-dollar-sign "></i>
	<div class="flex flex-col">
		<p class="font-semibold mb-0 pb-0" text-lavender-dark>10 000</p>
		<p class="font-light -mt-2 pt-0 text-lavender-dark">credits</p>
	</div>
`;
  return creditsContainer;
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
    "mt-14",
    "absolute",
    "z-50",
    "py-4",
    "px-6",
    "bg-lavender-dark",
    "shadow-lg",
    "rounded-md",
  );

  const menuList = document.createElement("ul");
  menuList.classList.add("flex", "flex-col", "gap-2", "items-center");

  const menuItems = [
    { name: "My account", link: "/user/" },
    { name: "New listing", link: "/listings/new-listing/" },
    { name: "Credits" },
    { name: "Log out", link: "/user/logout/" },
  ];

  menuItems.forEach((item) => {
    if (item.name === "Credits") {
      const menuItem = createCreditsContainer();
      menuList.appendChild(menuItem);
    } else {
      const menuItem = document.createElement("li");
      const menuLink = document.createElement("a");
      menuLink.href = item.link;
      menuLink.textContent = item.name;
      menuLink.classList.add("text-white", "hover:underline");
      menuItem.appendChild(menuLink);
      menuList.appendChild(menuItem);
    }
  });

  menuCard.appendChild(menuList);

  return menuCard;
}
