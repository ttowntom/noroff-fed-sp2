export default function ListingActionButton(listing) {
  const now = new Date();
  const endsAt = new Date(listing.endsAt);
  const hasEnded = endsAt < now;

  const button = document.createElement("button");
  button.textContent = `${hasEnded ? "Ended" : "Edit"}`;
  button.classList.add(
    "uppercase",
    "text-sm",
    "font-semibold",
    "rounded",
    "p-1",
    "hover:bg-opacity-80",
  );

  if (!hasEnded) {
    button.classList.add("bg-lavender", "text-white");
  } else {
    button.classList.add("bg-white", "text-lavender-dark");
  }

  return button;
}
