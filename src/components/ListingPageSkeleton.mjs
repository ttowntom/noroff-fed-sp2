export default function ListingPageSkeleton() {
  const container = document.createElement("div");

  // Top section placeholder (Slider and Bidding)
  const topSection = document.createElement("section");
  topSection.classList.add("flex", "gap-4", "flex-wrap", "md:flex-nowrap");

  const sliderPlaceholder = document.createElement("div");
  sliderPlaceholder.classList.add(
    "w-full",
    "md:w-2/3",
    "h-96",
    "bg-gray-300",
    "rounded-lg",
    "animate-pulse"
  );
  topSection.appendChild(sliderPlaceholder);

  const biddingPlaceholder = document.createElement("aside");
  biddingPlaceholder.classList.add(
    "w-full",
    "md:w-1/3",
    "h-48",
    "bg-lavender-light",
    "rounded",
    "animate-pulse"
  );
  topSection.appendChild(biddingPlaceholder);

  container.appendChild(topSection);

  const bottomSection = document.createElement("section");
  bottomSection.classList.add("flex", "gap-4", "flex-wrap", "md:flex-nowrap");

  // Description placeholder
  const descriptionPlaceholder = document.createElement("div");
  descriptionPlaceholder.classList.add(
    "w-full",
    "md:w-2/3",
    "h-48",
    "bg-gray-100",
    "rounded",
    "mt-4",
    "animate-pulse"
  );
  bottomSection.appendChild(descriptionPlaceholder);

  // Bidding timeline placeholder
  const timelinePlaceholder = document.createElement("div");
  timelinePlaceholder.classList.add(
    "w-full",
    "md:w-1/3",
    "h-48",
    "bg-gray-300",
    "rounded",
    "mt-4",
    "animate-pulse"
  );
  bottomSection.appendChild(timelinePlaceholder);

  container.appendChild(bottomSection);

  return container;
}
