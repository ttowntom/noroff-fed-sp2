export default function BidUserBadge(bidData) {
  const badgeContainer = document.createElement("li");
  badgeContainer.classList.add("bids-badge", "flex", "gap-4");

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
  userAvatar.src = bidData.bidder.avatar.url;
  userAvatar.alt = `${bidData.name}'s avatar`;
  userAvatar.classList.add("rounded-full", "w-8", "h-8");

  const userName = document.createElement("a");
  userName.textContent = bidData.bidder.name;
  userName.href = `/user/?name=${bidData.bidder.name}`;
  userName.classList.add("text-lavender", "hover:underline", "text-sm");
  textContainer.appendChild(userName);

  const bidAmount = document.createElement("p");
  bidAmount.textContent = "$ " + bidData.amount;
  bidAmount.classList.add("text-lavender-dark", "text-sm", "font-semibold");
  textContainer.appendChild(bidAmount);

  userBadge.appendChild(userAvatar);
  userBadge.appendChild(textContainer);
  badgeContainer.appendChild(userBadge);

  return badgeContainer;
}
