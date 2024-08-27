import createObjFromForm from "./createObjFromForm.mjs";
import { createListing } from "../api/listings/create.mjs";

export function setListingFormListener() {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const form = e.target;
      const listing = createObjFromForm;
      const action = form.action;
      const method = form.method;

      // Hide error message, if any
      const errContainer = document.querySelector(`#error-container`);
      errContainer.classList.add("hidden");

      createListing(listing, action, method);
    });
  }
}
