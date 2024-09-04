import { getListings } from "../../api/listings/read.mjs";
import AuctionListings from "../../components/AuctionListings.mjs";

export default async function loadListingsPage() {
  const main = document.querySelector("main");
  const container = document.createElement("div");

  try {
    const listings = await getListings();
    main.appendChild(await AuctionListings(listings));
  } catch (error) {
    console.error(error);

    container.textContent = "An error occurred. Please try again later.";
    main.appendChild(container);
  }
}
