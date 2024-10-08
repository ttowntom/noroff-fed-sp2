import InputField from "../../components/InputField.mjs";
import Button from "../../components/Button.mjs";
import addImage from "../../handlers/addImage.mjs";
import { setListingFormListener } from "../../handlers/createListing.mjs";
import { load } from "../../storage/index.mjs";

const user = load("profile")?.name || null;

export default function loadNewListingPage() {
  if (!user) {
    window.location.href = "/user/login/";
    return;
  }

  // Grab main
  const main = document.querySelector("main");
  const title = document.createElement("h1");
  title.classList.add(
    "flex",
    "justify-center",
    "text-2xl",
    "font-bold",
    "text-lavender-dark"
  );
  title.textContent = "Create a new listing";
  main.prepend(title);

  // Grab the form element
  const form = document.querySelector("form");
  const imgContainer = document.querySelector("#img-container");
  const buttonContainer = document.createElement("div");

  // Append the input fields and button to the form
  form.prepend(InputField("Description", "text", "description", false, true));
  form.prepend(InputField("Title", "text", "title", true));
  form.appendChild(
    InputField("Auction ends at", "datetime-local", "end-date", true)
  );

  // Append the image container to the form
  imgContainer.appendChild(
    Button("plus", "button", "Add Image", "lavender", false, addImage)
  );

  // Append the button container to the form
  buttonContainer.classList.add(
    "flex",
    "flex-row",
    "flex-wrap",
    "gap-2",
    "justify-between",
    "mt-2"
  );
  buttonContainer.appendChild(
    Button(
      "cloud",
      "submit",
      "Save listing",
      "golf",
      true,
      setListingFormListener
    )
  );
  buttonContainer.appendChild(
    Button(
      "ban",
      "button",
      "Cancel",
      "lavender",
      true,
      () => (location.href = `/user/?name=${user}`)
    )
  );
  form.appendChild(buttonContainer);
}
