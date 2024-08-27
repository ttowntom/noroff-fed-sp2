import InputField from "../../components/InputField.mjs";
import Button from "../../components/Button.mjs";
import addImage from "../../handlers/addImage.mjs";
import { setListingFormListener } from "../../handlers/createListing.mjs";
// import { setRegistrationFormListener } from "../../handlers/registration.mjs";

export default function loadNewListingPage() {
  // Grab the form element
  const form = document.querySelector("form");
  const imgContainer = document.querySelector("#img-container");
  const buttonContainer = document.createElement("div");

  // Append the input fields and button to the form
  form.prepend(InputField("Description", "text", "description", false, true));
  form.prepend(InputField("Title", "text", "title", true));
  form.appendChild(
    InputField("Auction ends at", "datetime-local", "end-date", true),
  );

  // Append the image container to the form
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
    Button(
      "plus",
      "submit",
      "Save listing",
      "golf",
      true,
      setListingFormListener,
    ),
  );
  form.appendChild(buttonContainer);

  // Add "create listing" event listener to the form
  // setRegistrationFormListener();
}
