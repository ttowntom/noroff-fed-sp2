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
      const html = await AuctionListings(listings, currentPage === 1);
      currentPage++;
      return html;
    } else {
      hasMore = false;
      const msg = document.createElement("p");
      msg.classList.add(
        "mt-4",
        "text-white",
        "text-center",
        "py-2",
        "bg-lavender",
        "rounded-md",
      );
      msg.textContent = "All listings loaded";
      return msg;
    }
  } catch (error) {
    console.error(error);
  } finally {
    isLoading = false;
  }
}
