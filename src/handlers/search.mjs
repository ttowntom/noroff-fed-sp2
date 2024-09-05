import { searchListings } from "../api/listings/read.mjs";

export default async function search(event) {
  event.preventDefault();
  const form = event.target.closest("form");
  const searchInput = form.querySelector("input[name='search");
  const searchQuery = searchInput.value;
  if (!searchQuery) {
    return;
  }

  try {
    return await searchListings(9, 1, searchQuery);
  } catch (error) {
    console.error("Error searching listings:", error);
  }
}
