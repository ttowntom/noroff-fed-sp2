import { load } from "../storage/index.mjs";

import BidButton from "./BidButton.mjs";
import TimeLeftBar from "./TimeLeftBar.mjs";
import BidUserBadge from "./BidUserBadge.mjs";

/**
 * Creates a card to display the bid information
 * @param {object} listing - Listing object to display
 * @returns {HTMLElement} - Bid card element
 */
export default function BidCard(listing) {
  const isOwner = listing.seller.name === load("profile")?.name;

  // Check if the listing has ended
  const now = new Date();
  const endsAt = new Date(listing.endsAt);
  const hasEnded = now > endsAt;

  const priceArr = listing.bids;
  let price;
  let priceStr;
  let highestBid;
  if (priceArr.length > 0) {
    // Price is the last items in the array
    price = priceArr[priceArr.length - 1].amount.toLocaleString();
    priceStr = `$${price}`;
    highestBid = priceArr[priceArr.length - 1];
  } else {
    priceStr = "No bids yet";
  }

  // Create the card container
  const bidCard = document.createElement("div");
  bidCard.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "py-4",
    "gap-4",
    "rounded-md",
    "border",
    "border-battleship",
    "border-1"
  );

  // Create the title element
  const bidTitle = document.createElement("h2");
  if (hasEnded && priceArr.length === 0) {
    bidTitle.textContent = "There were no bids";
  }
  if (hasEnded && priceArr.length > 0) {
    bidTitle.textContent = "Winning bid";
  }
  if (!hasEnded && priceArr.length === 0) {
    bidTitle.textContent = "";
  }
  if (!hasEnded && priceArr.length > 0) {
    bidTitle.textContent = "Last bid";
  }
  bidTitle.classList.add("text-sm", "text-lavender-dark", "-mb-4");
  if (hasEnded && priceArr.length === 0) {
    bidTitle.classList.add("mb-2");
  }
  bidCard.appendChild(bidTitle);

  // Create the price amount element
  const priceAmount = document.createElement("p");
  priceAmount.textContent = priceStr;
  priceAmount.classList.add("text-2xl", "font-semibold", "text-lavender-dark");
  if (!hasEnded || (hasEnded && priceArr.length !== 0)) {
    bidCard.appendChild(priceAmount);
  }

  // Create the time left bar
  bidCard.appendChild(TimeLeftBar(listing, true));

  // Create the bid button or show the winner
  !hasEnded && bidCard.appendChild(BidButton(listing));
  if (hasEnded && priceArr.length > 0) {
    const winner = document.createElement("p");
    winner.textContent = "Winner";
    winner.classList.add("text-lavender-dark", "text-sm", "-mb-4");
    bidCard.appendChild(winner);
    bidCard.appendChild(BidUserBadge(highestBid, false));
  }
  if (hasEnded && priceArr.length === 0 && isOwner) {
    bidCard.appendChild(BidButton(listing));
  }

  return bidCard;
}
