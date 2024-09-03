import createObjFromForm from "./createObjFromForm.mjs";
import { createListing } from "../api/listings/create.mjs";
import { editListing } from "../api/listings/edit.mjs";

export function setListingFormListener(id = null) {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const form = e.target;
      const listing = createObjFromForm();
      const action = form.action;
      const method = form.method;

      // Hide error message, if any
      const errContainer = document.querySelector(`#error-container`);
      errContainer.classList.add("hidden");

      !id && createListing(listing, action, method);
      id && editListing(listing, action, "put", id);
    });
  }
}
