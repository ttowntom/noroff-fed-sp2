import infiniteScroll from "../../handlers/infiniteScroll.mjs";
import isScrollNearBottom from "../../handlers/isScrollNearBottom.mjs";
// import SearchBar from "../../components/SearchBar.mjs";

const main = document.querySelector("main");

export default async function loadListingsPage() {
  window.addEventListener("scroll", async () => {
    if (isScrollNearBottom()) {
      const section = document.getElementById("user-listings");
      try {
        const content = await infiniteScroll();
        if (content) {
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
