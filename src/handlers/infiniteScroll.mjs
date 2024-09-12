import AuctionListings from "../components/AuctionListings.mjs";
import { getListings, searchListings } from "../api/listings/read.mjs";

import { renderListingsSkeleton } from "./renderListings.mjs";

const listingsPerPage = 9;
let currentPage = 1;
let isLoading = false;
let hasMore = true;

export default async function infiniteScroll(searchQuery = false) {
  if (isLoading || !hasMore) return;
  isLoading = true;

  const main = document.querySelector("main");
  const skeleton = renderListingsSkeleton();
  main.appendChild(skeleton);

  // Fetch listings
  try {
    let listings;
    if (searchQuery) {
      listings = await searchListings(
        listingsPerPage,
        currentPage,
        searchQuery
      );
    } else {
      listings = await getListings(listingsPerPage, currentPage);
    }

    // Create message element
    const msg = document.createElement("p");
    msg.classList.add(
      "mt-4",
      "text-white",
      "text-center",
      "py-2",
      "bg-lavender",
      "rounded-md"
    );

    // Check if there is data
    const hasData = listings.data.length > 0;

    // Return HTML
    if (hasData) {
      const html = await AuctionListings(
        listings,
        currentPage === 1,
        searchQuery
      );
      currentPage++;
      return html;
    } else if (!hasData && currentPage === 1) {
      msg.textContent = "Could not find any listings";
      return msg;
    } else {
      hasMore = false;
      msg.textContent = "All listings loaded";
      return msg;
    }
  } catch (error) {
    console.error(error);
  } finally {
    isLoading = false;
    skeleton.remove();
  }
}
