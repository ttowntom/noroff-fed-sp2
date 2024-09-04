import biddingTimeline from "../handlers/biddingTimeline.mjs";

export default function BiddingTimeline(listing) {
  const container = document.createElement("div");
  container.classList.add("w-full", "md:w-1/3", "my-4", "md:my-0");

  const titleEl = document.createElement("h2");
  titleEl.textContent = "Bidding timeline";
  titleEl.classList.add(
    "text-xl",
    "font-semibold",
    "text-lavender-dark",
    "text-center",
  );
  container.appendChild(titleEl);

  container.appendChild(biddingTimeline(listing.bids));

  return container;
}
