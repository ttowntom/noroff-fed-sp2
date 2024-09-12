import { createListing } from "../api/listings/create.mjs";
import { editListing } from "../api/listings/edit.mjs";

import createObjFromForm from "./createObjFromForm.mjs";

export function setListingFormListener(id = false) {
  const trueId = id.length === 36 ? id : false;
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

      !trueId && createListing(listing, action, method);
      trueId && editListing(listing, action, "put", trueId);
    });
  }
}
