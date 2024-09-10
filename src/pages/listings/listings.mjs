import infiniteScroll from "../../handlers/infiniteScroll.mjs";
import isScrollNearBottom from "../../handlers/isScrollNearBottom.mjs";
import SearchBar from "../../components/SearchBar.mjs";

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
  const title = document.createElement("h1");
  title.classList.add("sr-only");
  title.textContent = "Home";
  main.appendChild(title);

  // Add search bar
  main.appendChild(SearchBar());

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
