import InputField from "../components/InputField.mjs";
import deleteImageDiv from "./deleteImageDiv.mjs";

export default function addImage() {
  const imgsContainer = document.querySelector("#img-container");
  const imgContainer = document.createElement("div");
  const id = `img-${Math.random().toString(36)}`;

  imgContainer.id = id;
  imgContainer.classList.add(
    "flex",
    "flex-col",
    "xsm:flex-row",
    "flex-wrap",
    "items-center",
    "p-2",
    "mt-2",
    "border",
    "border-gray-200",
    "rounded-md",
  );

  // Create the icon
  const iconContainer = document.createElement("div");
  iconContainer.classList.add(
    "flex",
    "items-center",
    "justify-center",
    "mx-auto",
    "xsm:mx-0",
    "xsm:ml-4",
    "bg-rust",
    "rounded-full",
    "w-12",
    "h-12",
    "cursor-pointer",
    "hover:bg-opacity-90",
  );

  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-trash-xmark", "text-xl", "text-white");
  iconContainer.addEventListener("click", () => deleteImageDiv(id));
  iconContainer.appendChild(icon);

  // Create the input fields
  const inputContainer = document.createElement("div");
  inputContainer.classList.add("flex", "flex-col", "flex-grow");

  inputContainer.appendChild(InputField("Image URL", "url", "image-url", true));
  inputContainer.appendChild(
    InputField("Image description", "text", "image-description", true),
  );

  // Append the input fields and button to the form
  imgContainer.appendChild(inputContainer);
  imgContainer.appendChild(iconContainer);
  imgsContainer.insertBefore(imgContainer, imgsContainer.lastChild);
}
