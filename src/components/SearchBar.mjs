import InputField from "./InputField.mjs";
import Button from "./Button.mjs";

export default function SearchBar() {
  const searchForm = document.createElement("form");
  searchForm.id = "search-form";
  searchForm.classList.add("relative");

  const searchInput = InputField(
    null,
    "search",
    "search",
    false,
    false,
    "Search listings...",
  );

  const searchButton = Button(
    "magnifying-glass",
    "submit",
    false,
    "lavender",
    false,
    null,
  );
  searchButton.classList.add(
    "my-0",
    "absolute",
    "top-1",
    "right-0",
    "border",
    "border-lavender",
  );

  searchForm.append(searchInput, searchButton);

  return searchForm;
}
