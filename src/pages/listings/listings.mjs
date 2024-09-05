import infiniteScroll from "../../handlers/infiniteScroll.mjs";
import isScrollNearBottom from "../../handlers/isScrollNearBottom.mjs";

const main = document.querySelector("main");

export default async function loadListingsPage() {
  window.addEventListener("scroll", async () => {
    if (isScrollNearBottom(200)) {
      try {
        const content = await infiniteScroll();
        if (content) {
          // Ensure content is not undefined or null
          const section = document.getElementById("user-listings");
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
