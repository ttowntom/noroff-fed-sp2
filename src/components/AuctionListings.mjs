import renderListings from "../handlers/renderListings.mjs";

export default async function AuctionListings(listings, firstLoad = true) {
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

  bulk.appendChild(renderListings(listings.data));

  if (listings.data.length === 0) {
    const msg = document.createElement("p");
    msg.classList.add("text-lavender-dark");
    msg.textContent = "There are no listings yet.";
    bulk.appendChild(msg);
  }

  return bulk;
}
