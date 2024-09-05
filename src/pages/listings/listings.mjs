import infiniteScroll from "../../handlers/infiniteScroll.mjs";
import isScrollNearBottom from "../../handlers/isScrollNearBottom.mjs";
import SearchBar from "../../components/SearchBar.mjs";
import search from "../../handlers/search.mjs";

export default async function loadListingsPage() {
  const main = document.querySelector("main");

  // Add search bar
  const searchBar = SearchBar();
  searchBar.addEventListener("submit", async (e) => {
    const listings = await search(e);
    console.log(listings);

    const section = document.getElementById("user-listings");
    if (section) {
      section.remove();
    }
  });
  main.appendChild(searchBar);

  window.addEventListener("scroll", async () => {
    if (isScrollNearBottom()) {
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
  });

  // Initial load
  main.appendChild(await infiniteScroll());
}
