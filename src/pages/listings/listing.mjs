import { getListing } from "../../api/listings/read.mjs";
import ListingDescription from "../../components/ListingDescription.mjs";
import Slider from "../../components/Slider.mjs";
import SellerBadge from "../../components/SellerBadge.mjs";
import BidCard from "../../components/BidCard.mjs";
import BiddingTimeline from "../../components/BiddingTimeline.mjs";

const listingId = new URLSearchParams(location.search).get("listing");

export default async function loadListingPage() {
  const main = document.querySelector("main");
  const container = document.createElement("div");

  try {
    const listing = await getListing(listingId);

    // Section for slider and bidding
    const topSection = document.createElement("section");
    topSection.classList.add("flex", "gap-4", "flex-wrap", "md:flex-nowrap");
    const sliderContainer = document.createElement("div");
    sliderContainer.classList.add("w-full", "md:w-2/3");
    sliderContainer.appendChild(Slider(listing.data.media));
    topSection.appendChild(sliderContainer);
    main.appendChild(topSection);

    // Seller and bidding
    const biddingSection = document.createElement("aside");
    biddingSection.classList.add(
      "w-full",
      "md:w-1/3",
      "flex",
      "flex-col-reverse",
      "md:flex-col",
      "gap-4",
      "p-2",
      "sm:p-0",
    );
    // Seller info
    biddingSection.appendChild(SellerBadge(listing.data.seller));
    // Bidding info
    biddingSection.appendChild(BidCard(listing.data));
    topSection.appendChild(biddingSection);

    // Section for description and bidding timeline
    const bottomSection = document.createElement("section");
    bottomSection.classList.add(
      "flex",
      "flex-wrap",
      "gap-4",
      "mt-2",
      "md:mt-10",
      "p-2",
      "sm:p-0",
    );
    bottomSection.appendChild(ListingDescription(listing));
    bottomSection.appendChild(BiddingTimeline(listing.data));
    main.appendChild(bottomSection);
    return container;
  } catch (error) {
    console.error(error);

    container.textContent = "An error occurred. Please try again later.";
    main.appendChild(container);
    return container;
  }
}
