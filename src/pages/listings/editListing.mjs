import InputField from "../../components/InputField.mjs";
import Button from "../../components/Button.mjs";
import addImage from "../../handlers/addImage.mjs";
import renderImageFields from "../../handlers/renderImageFields.mjs";
import { setListingFormListener } from "../../handlers/createListing.mjs";
import { getListing } from "../../api/listings/read.mjs";

// Get the listing ID from the URL
const listingId = new URLSearchParams(location.search).get("listing");

export default async function loadEditListingPage() {
  const res = await getListing(listingId);
  const listing = res.data;
  const endsAtDate = new Date(listing.endsAt);
  const formattedEndsAt = endsAtDate.toISOString().slice(0, 16);

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
  console.log(listing);
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
    Button("minus", "button", "Delete listing", "rust", true),
  );
  buttonContainer.appendChild(
    Button("plus", "submit", "Save listing", "golf", true, () =>
      setListingFormListener(listingId),
    ),
  );
  form.appendChild(buttonContainer);
}
