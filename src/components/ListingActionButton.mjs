import { load } from "../storage/index.mjs";
import BidModal from "./BidModal.mjs";

export default function ListingActionButton(listing) {
  const isOwner =
    listing.seller && listing.seller.name === load("profile")?.name;

  // Check if the listing has ended
  const now = new Date();
  const endsAt = new Date(listing.endsAt);
  const hasEnded = endsAt < now;

  // Create the button
  const button = document.createElement("button");
  if (isOwner && !hasEnded) {
    button.textContent = "Edit";
    button.classList.add("bg-lavender", "text-white", "hover:bg-opacity-100");
  }
  if (hasEnded) {
    button.textContent = "Ended";
    button.classList.add("bg-white", "text-lavender-dark");
  }
  if (!isOwner && !hasEnded) {
    button.textContent = "Bid";
    button.classList.add("bg-golf", "text-white", "hover:bg-opacity-100");
  }
  button.classList.add(
    "uppercase",
    "text-sm",
    "font-semibold",
    "rounded",
    "p-1",
    "bg-opacity-80",
    "shadow-md",
  );

  // Add the action styling and event listener
  if (!hasEnded && isOwner) {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = `/listings/edit-listing/?listing=${listing.id}`;
    });
  }

  if (!hasEnded && !isOwner) {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      const modal = BidModal(listing);
      document.body.appendChild(modal);
    });
  }

  return button;
}
