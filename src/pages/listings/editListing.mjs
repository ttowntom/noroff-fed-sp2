import InputField from "../../components/InputField.mjs";
import Button from "../../components/Button.mjs";
import addImage from "../../handlers/addImage.mjs";
import renderImageFields from "../../handlers/renderImageFields.mjs";
import { setListingFormListener } from "../../handlers/createListing.mjs";
import { getListing } from "../../api/listings/read.mjs";
import deleteListing from "../../api/listings/delete.mjs";

// Get the listing ID from the URL
const listingId = new URLSearchParams(location.search).get("listing");
const main = document.querySelector("main");

export default async function loadEditListingPage() {
  const res = await getListing(listingId);
  const listing = res.data;
  const endsAtDate = new Date(listing.endsAt);
  const formattedEndsAt = endsAtDate.toISOString().slice(0, 16);

  const title = document.createElement("h1");
  title.classList.add(
    "flex",
    "justify-center",
    "text-2xl",
    "font-bold",
    "text-lavender-dark",
  );
  title.textContent = `Edit "${listing.title}" listing`;
  main.prepend(title);

  // Grab the form element
  const form = document.querySelector("form");
  const imgContainer = document.querySelector("#img-container");
  const buttonContainer = document.createElement("div");

  // Append the input fields and button to the form
  form.prepend(
    InputField(
      "Description",
      "text",
      "description",
      false,
      true,
      "",
      listing.description,
    ),
  );
  form.prepend(
    InputField("Title", "text", "title", true, false, "", listing.title),
  );
  form.appendChild(
    InputField(
      "Auction ends at",
      "datetime-local",
      "end-date",
      true,
      false,
      "",
      formattedEndsAt,
    ),
  );

  // Append the image container to the form
  if (listing.media.length > 0) {
    listing.media.forEach((img) => {
      renderImageFields(img);
    });
  }
  imgContainer.appendChild(
    Button("plus", "button", "Add Image", "lavender", false, addImage),
  );

  // Append the button container to the form
  buttonContainer.classList.add(
    "flex",
    "flex-row",
    "gap-2",
    "justify-between",
    "mt-2",
  );
  buttonContainer.appendChild(
    Button("minus", "button", "Delete listing", "rust", true, () =>
      deleteListing(listingId),
    ),
  );
  buttonContainer.appendChild(
    Button("plus", "submit", "Save listing", "golf", true, () =>
      setListingFormListener(listingId),
    ),
  );
  buttonContainer.appendChild(
    Button(
      "ban",
      "button",
      "Cancel",
      "lavender",
      true,
      () => (location.href = `/listings/?listing=${listingId}`),
    ),
  );
  form.appendChild(buttonContainer);
}
