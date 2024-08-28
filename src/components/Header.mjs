import MenuCard from "./MenuCard.mjs";

export default function Header() {
  const header = document.createElement("header");
  header.classList.add(
    "w-full",
    "sm:w-5/6",
    "sm:max-w-screen-xl",
    "mx-auto",
    "p-4",
    "flex",
    "flex-row",
    "items-center",
    "justify-between",
    "gap-4",
  );

  const col1 = document.createElement("div");
  col1.classList.add("sm:w-1/4");
  col1.innerHTML = `
		<a href="/">
		<img src="/assets/quickBid-logo.svg" alt="QuickBid Logo" class="w-full max-h-16" />
		</a>
	`;

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
		<i class="fa-solid fa-dollar-sign "></i>
		<div class="flex flex-col">
			<p class="font-semibold mb-0 pb-0" text-lavender-dark>10 000</p>
			<p class="font-light -mt-2 pt-0 text-lavender-dark">credits</p>
		</div>
	`;

  const col3 = document.createElement("div");
  col3.classList.add("flex", "justify-end", "gap-6", "pt-2");
  col3.innerHTML = `
		<a href="/listings/new-listing/" class="hidden sm:flex gap-2 items-center hover:text-opacity-90 group">
			<i class="fa-solid fa-circle-plus text-3xl text-lavender group-hover:text-opacity-90"></i>
			<p class="font-semibold text-sm text-lavender-dark group-hover:text-opacity-90">New listing</p>
		</a>
	`;
  // <button class="hidden sm:flex gap-2 items-center hover:text-opacity-90 group">
  // 		<i class="fa-solid fa-circle-user text-3xl text-lavender group-hover:text-opacity-90"></i>
  // 		<p class="font-semibold text-sm text-lavender-dark group-hover:text-opacity-90">John Doe</p>
  // 	</button>
  // 	<button class="sm:hidden">
  // 		<i class="fa-solid fa-circle-chevron-down text-4xl text-lavender hover:text-opacity-90"></i>
  // 	</button>

  const menuButton = document.createElement("button");
  menuButton.classList.add(
    "flex",
    "gap-2",
    "items-center",
    "hover:text-opacity-90",
    "group",
  );
  const menuIcon = document.createElement("i");
  menuIcon.id = "menu-icon";
  menuIcon.classList.add(
    "fa-solid",
    "fa-circle-chevron-down",
    "sm:fa-circle-user",
    "text-4xl",
    "sm:text-3xl",
    "text-lavender",
    "group-hover:text-opacity-90",
  );
  const menuText = document.createElement("p");
  menuText.classList.add(
    "hidden",
    "sm:flex",
    "font-semibold",
    "text-sm",
    "text-lavender-dark",
    "group-hover:text-opacity-90",
  );
  menuText.textContent = "John Doe";

  menuButton.appendChild(menuIcon);
  menuButton.appendChild(menuText);
  col3.appendChild(menuButton);
  col3.appendChild(MenuCard());

  // Open menu when clicking on button
  let menuOpen = false;
  menuButton.addEventListener("click", () => {
    const menuCard = document.querySelector("#menu-card");
    menuCard.classList.toggle("hidden");
    menuIcon.classList.remove("fa-circle-chevron-down");
    menuIcon.classList.add("fa-circle-xmark");
    menuOpen = true;
  });

  // Close menu when clicking outside
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

  header.appendChild(col1);
  header.appendChild(col2);
  header.appendChild(col3);

  return header;
}
