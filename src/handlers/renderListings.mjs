import ListingCard, {
  ListingCardSkeleton,
} from "../components/ListingCard.mjs";

export default function renderListings(listingsArr) {
  const container = document.createElement("div");
  container.classList.add("flex", "flex-wrap", "gap-2");

  listingsArr.forEach((listing) => {
    const card = ListingCard(listing);
    container.appendChild(card);
  });

  return container;
}

export function renderListingsSkeleton() {
  const container = document.createElement("div");
  container.classList.add("flex", "flex-wrap", "gap-2");

  for (let i = 0; i < 3; i++) {
    const card = ListingCardSkeleton();
    container.appendChild(card);
  }

  return container;
}
