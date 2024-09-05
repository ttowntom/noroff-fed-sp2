import infiniteScroll from "../../handlers/infiniteScroll.mjs";
import isScrollNearBottom from "../../handlers/isScrollNearBottom.mjs";
import SearchBar from "../../components/SearchBar.mjs";

// Get params
const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get("q");

export default async function loadSearchListingsPage() {
  const main = document.querySelector("main");

  // Add search bar
  main.appendChild(SearchBar());

  window.addEventListener("scroll", async () => {
    if (isScrollNearBottom()) {
      const section = document.getElementById("user-listings");
      try {
        const content = await infiniteScroll(searchQuery);
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
  main.appendChild(await infiniteScroll(searchQuery));
}
