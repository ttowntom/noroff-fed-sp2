export default function ListingDescription(listing) {
  const container = document.createElement("div");
  container.classList.add("flex", "flex-col", "flex-grow", "gap-4");

  const titleEl = document.createElement("h2");
  titleEl.textContent = listing.data.title;
  titleEl.classList.add(
    "text-2xl",
    "font-semibold",
    "text-lavender-dark",
    "font-rowdies",
  );

  const descriptionHTML = marked.parse(listing.data.description);
  const descriptionEl = document.createElement("div");
  descriptionEl.innerHTML = descriptionHTML;

  container.appendChild(titleEl);
  container.appendChild(descriptionEl);

  return container;
}
