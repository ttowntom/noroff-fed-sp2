import infiniteScroll from "../../handlers/infiniteScroll.mjs";
import isScrollNearBottom from "../../handlers/isScrollNearBottom.mjs";
import SearchBar from "../../components/SearchBar.mjs";
import { renderListingsSkeleton } from "../../handlers/renderListings.mjs";

async function triggerInfiniteScroll() {
  const section = document.getElementById("user-listings");
  try {
    const content = await infiniteScroll();
    if (section && content) {
      // Ensure content is not undefined or null
      section.append(content);
    }
  } catch (error) {
    console.error("Error fetching infinite scroll content:", error);
  }
}

export default async function loadListingsPage() {
  // Grab main
  const main = document.querySelector("main");
  main.ariaLive = "polite";
  const title = document.createElement("h1");
  title.classList.add("sr-only");
  title.textContent = "Home";
  main.appendChild(title);

  // Add search bar
  const searchTitle = document.createElement("h2");
  searchTitle.classList.add("sr-only");
  searchTitle.textContent = "Search listings";
  main.appendChild(searchTitle);
  main.appendChild(SearchBar());

  // Add infinite scroll event listener
  window.addEventListener("scroll", async () => {
    if (isScrollNearBottom()) {
      triggerInfiniteScroll();
    }
  });

  // Initial load
  main.appendChild(await infiniteScroll());

  // Check if content height is less than viewport height
  if (
    document.documentElement.scrollHeight <=
    document.documentElement.clientHeight
  ) {
    // Trigger infinite scroll if content height is less than viewport height
    triggerInfiniteScroll();
  }
}
