import ListingActionButton from "./ListingActionButton.mjs";

export default function ListingCard(listing) {
  const imgUrl =
    listing.media[0]?.url ||
    "https://images.unsplash.com/photo-1519114563721-eb52c00b9129?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const price = listing.price || null;

  // Create the card container
  const card = document.createElement("article");
  card.id = listing.id;
  card.classList.add(
    "flex",
    "flex-col",
    "flex-grow",
    "w-full",
    "sm:w-1/3",
    "md:w-1/4",
    "rounded-md",
    "shadow-md",
    "overflow-hidden",
  );

  const cardContent = document.createElement("div");
  cardContent.classList.add(
    "relative",
    "w-full",
    "h-48",
    "overflow-hidden",
    "gradient-overlay",
  );

  // Add img as background to the cardContent
  cardContent.style.backgroundImage = `url(${imgUrl})`;
  cardContent.style.backgroundSize = "cover";
  cardContent.style.backgroundPosition = "center";
  card.appendChild(cardContent);

  const wrapper = document.createElement("div");
  wrapper.classList.add(
    "flex",
    "mb-2",
    "mx-2",
    "justify-between",
    "items-end",
    "absolute",
    "bottom-0",
    "left-0",
    "right-0",
  );

  const textContainer = document.createElement("div");
  textContainer.classList.add("flex", "flex-col", "gap-2");

  // Create the title element
  const title = document.createElement("h3");
  title.textContent = listing.title;
  title.classList.add("text-white", "text-2xl", "font-rowdies");
  textContainer.appendChild(title);

  // Create the price element
  let priceEl;
  if (price) {
    priceEl = document.createElement("p");
    priceEl.textContent = "$ " + price;
    priceEl.classList.add("text-white", "font-medium");
  }
  price && textContainer.appendChild(priceEl);

  wrapper.appendChild(textContainer);
  wrapper.appendChild(ListingActionButton(listing));
  cardContent.appendChild(wrapper);

  return card;
}
