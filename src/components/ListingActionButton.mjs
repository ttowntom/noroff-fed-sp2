export default function ListingActionButton(listing) {
  // Check if the listing has ended
  const now = new Date();
  const endsAt = new Date(listing.endsAt);
  const hasEnded = endsAt < now;

  // Create the button
  const button = document.createElement("button");
  button.textContent = `${hasEnded ? "Ended" : "Edit"}`;
  button.classList.add(
    "uppercase",
    "text-sm",
    "font-semibold",
    "rounded",
    "p-1",
    "bg-opacity-80",
    "hover:bg-opacity-100",
    "shadow-md",
  );

  // Add the action styling and event listener
  if (!hasEnded) {
    button.classList.add("bg-lavender", "text-white");
    button.addEventListener("click", (e) => {
      e.preventDefault();
    });
  } else {
    button.classList.add("bg-white", "text-lavender-dark");
  }

  return button;
}
