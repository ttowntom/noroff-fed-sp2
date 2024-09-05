import renderListings from "../handlers/renderListings.mjs";

export default async function AuctionListings(
  listings,
  firstLoad = true,
  searchQuery = false,
) {
  const bulk = document.createElement(`${firstLoad ? "section" : "div"}`);
  bulk.classList.add("w-full", "flex", "flex-col", "mt-2");
  if (firstLoad) {
    bulk.id = "user-listings";
    const h2 = document.createElement("h2");
    h2.textContent = "Listings";
    h2.classList.add(
      "mb-4",
      "text-3xl",
      "font-bold",
      "text-lavender-dark",
      "font-rowdies",
    );
    bulk.appendChild(h2);
  }
  if (searchQuery) {
    const searchNotice = document.createElement("p");
    searchNotice.textContent = `with the search term: "${searchQuery}"`;
    searchNotice.classList.add("-mt-4", "mb-4", "text-lavender-dark");
    firstLoad && bulk.appendChild(searchNotice);
  }

  bulk.appendChild(renderListings(listings.data));

  if (listings.data.length === 0) {
    const msg = document.createElement("p");
    msg.classList.add("text-lavender-dark");
    msg.textContent = "There are no listings yet.";
    bulk.appendChild(msg);
  }

  return bulk;
}
