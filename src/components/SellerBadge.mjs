export default function SellerBadge(sellerObj) {
  const badgeContainer = document.createElement("div");
  badgeContainer.id = "badge-container";
  badgeContainer.classList.add("flex", "gap-4");

  const userBadge = document.createElement("div");
  userBadge.classList.add(
    "flex",
    "flex-grow",
    "items-center",
    "gap-4",
    "bg-white",
    "p-2",
    "text-lavender-dark",
  );

  const textContainer = document.createElement("div");
  textContainer.classList.add("flex", "flex-col");

  const userAvatar = document.createElement("img");
  userAvatar.src = sellerObj.avatar.url;
  userAvatar.alt = `${sellerObj.name}'s avatar`;
  userAvatar.classList.add("rounded-full", "w-16", "h-16");

  const userEmail = document.createElement("p");
  userEmail.textContent = "Seller";
  textContainer.appendChild(userEmail);

  const userName = document.createElement("p");
  userName.textContent = sellerObj.name;
  userName.classList.add("font-semibold", "text-lg");
  textContainer.appendChild(userName);

  userBadge.appendChild(userAvatar);
  userBadge.appendChild(textContainer);
  badgeContainer.appendChild(userBadge);

  return badgeContainer;
}
