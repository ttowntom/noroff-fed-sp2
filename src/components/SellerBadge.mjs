export default function SellerBadge(sellerObj) {
  const userBadge = document.createElement("div");
  userBadge.classList.add(
    "flex",
    "items-center",
    "mt-4",
    "sm:mt-0",
    "gap-4",
    "text-lavender-dark"
  );

  const textContainer = document.createElement("div");
  textContainer.classList.add("flex", "flex-col");

  const userAvatar = document.createElement("img");
  userAvatar.src = sellerObj.avatar.url;
  userAvatar.alt = `${sellerObj.name}'s avatar`;
  userAvatar.classList.add("rounded-full", "w-16", "h-16");

  const userLabel = document.createElement("p");
  userLabel.textContent = "Seller";
  textContainer.appendChild(userLabel);

  const userName = document.createElement("a");
  userName.textContent = sellerObj.name;
  userName.href = `/user/?name=${sellerObj.name}`;
  userName.classList.add("font-semibold", "text-lg", "hover:underline");
  textContainer.appendChild(userName);

  userBadge.appendChild(userAvatar);
  userBadge.appendChild(textContainer);

  return userBadge;
}
