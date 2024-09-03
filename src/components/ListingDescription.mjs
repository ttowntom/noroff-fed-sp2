// Configure marked to use GFM and breaks

export default function ListingDescription(listing) {
  const container = document.createElement("div");
  container.classList.add(
    "w-full",
    "md:w-1/3",
    "flex",
    "flex-col",
    "flex-grow",
    "gap-4",
  );

  const titleEl = document.createElement("h2");
  titleEl.textContent = listing.data.title;
  titleEl.classList.add(
    "text-2xl",
    "font-semibold",
    "text-lavender-dark",
    "font-rowdies",
  );

  const descriptionText = listing.data.description
    ? listing.data.description
    : "No description available";
  const descriptionEl = document.createElement("div");
  descriptionEl.innerText = descriptionText;

  container.appendChild(titleEl);
  container.appendChild(descriptionEl);

  return container;
}
