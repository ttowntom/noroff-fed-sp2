import AuctionListings from "../components/AuctionListings.mjs";
import { getListings } from "../api/listings/read.mjs";

const listingsPerPage = 9;
let currentPage = 1;
let isLoading = false;
let hasMore = true;

export default async function infiniteScroll() {
  if (isLoading || !hasMore) return;

  isLoading = true;
  try {
    const listings = await getListings(listingsPerPage, currentPage);
    if (listings.data.length > 0) {
      currentPage++;
      return await AuctionListings(listings, currentPage <= 2);
    } else {
      hasMore = false;
      const userListings = document.getElementById("user-listings");
      if (userListings) {
        const msg = document.createElement("p");
        msg.classList.add(
          "text-white",
          "text-center",
          "mt-4",
          "py-2",
          "px-4",
          "bg-lavender",
          "rounded",
        );
        msg.textContent = "All listings loaded";
        userListings.appendChild(msg);
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    isLoading = false;
  }
}
