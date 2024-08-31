import BidButton from "./BidButton.mjs";
import TimeLeftBar from "./TimeLeftBar.mjs";

export default function BidCard(listing) {
  const priceArr = listing.bids || [];
  let price;
  let priceStr;
  if (priceArr.length > 0) {
    // Price is the last items in the array
    price = priceArr[priceArr.length - 1].amount.toLocaleString();
    priceStr = `$${price}`;
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
    "border-1",
  );

  // Create the title element
  const bidTitle = document.createElement("h3");
  bidTitle.textContent = "Last bid";
  bidTitle.classList.add("text-sm", "text-lavender-dark", "-mb-4");
  bidCard.appendChild(bidTitle);

  // Create the price amount element
  const priceAmount = document.createElement("p");
  priceAmount.textContent = priceStr;
  priceAmount.classList.add("text-2xl", "font-semibold", "text-lavender-dark");
  bidCard.appendChild(priceAmount);

  // Create the time left bar
  bidCard.appendChild(TimeLeftBar(listing, true));

  // Create the bid button
  bidCard.appendChild(BidButton());

  return bidCard;
}
