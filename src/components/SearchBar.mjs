import InputField from "./InputField.mjs";
import Button from "./Button.mjs";

export default function SearchBar() {
  const searchForm = document.createElement("form");
  searchForm.id = "search-form";
  searchForm.classList.add("relative", "mb-8");

  const searchInput = InputField(
    null,
    "search",
    "search",
    false,
    false,
    "Search listings..."
  );

  const searchButton = Button(
    "magnifying-glass",
    "submit",
    false,
    "lavender",
    false,
    null
  );
  searchButton.classList.remove("my-2");
  searchButton.classList.add(
    "absolute",
    "top-1",
    "right-0",
    "border",
    "border-lavender"
  );
  searchButton.ariaLabel = "Search";

  searchForm.append(searchInput, searchButton);

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = event.target.closest("form");
    const searchInput = form.querySelector("input[name='search");
    const searchQuery = searchInput.value;
    if (!searchQuery) {
      return;
    }

    window.location.href = `/listings/search/?q=${searchQuery}`;
  });

  return searchForm;
}
