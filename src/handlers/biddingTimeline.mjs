import BidUserBadge from "../components/BidUserBadge.mjs";
import groupBidsByDate from "./groupBids.mjs";
import renameDate from "./renameDate.mjs";

export default function biddingTimeline(bidsArr) {
  let bids;
  let groupedBids;
  if (bidsArr.length > 0) {
    bids = bidsArr;
    groupedBids = groupBidsByDate(bids);
  } else {
    bids = false;
  }

  const container = document.createElement("div");

  if (!bids) {
    const noBids = document.createElement("p");
    noBids.textContent = "No bids yet";
    noBids.classList.add("text-lavender-dark", "text-center");
    container.appendChild(noBids);

    return container;
  }

  // Loop through each date in the groupedBids object
  for (const date in groupedBids) {
    if (Object.prototype.hasOwnProperty.call(groupedBids, date)) {
      // Create a headline for the date
      const dateHeadline = document.createElement("h2");
      const renamedDate = renameDate(date);
      dateHeadline.textContent = renamedDate;
      dateHeadline.classList.add("text-center", "text-lavender", "mt-4");

      // Append the headline to the container
      container.appendChild(dateHeadline);

      // Loop through each bid for this date
      groupedBids[date].forEach((bid) => {
        // Create a badge for each bid
        const badge = BidUserBadge(bid);

        // Append the badge to the container
        container.appendChild(badge);
      });
    }
  }

  return container;
}
