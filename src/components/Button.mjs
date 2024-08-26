export default function Button(
  icon,
  type,
  label,
  color = "lavender",
  flexGrow = false,
  onClick = null,
) {
  const button = document.createElement("button");
  const iconElement = document.createElement("i");
  const labelElement = document.createElement("span");

  button.id = `btn-${label.toLowerCase().replace(/\s/g, "-")}`;
  button.type = type;
  button.classList.add(
    "px-4",
    "py-2",
    "my-4",
    "text-white",
    "rounded-md",
    "hover:bg-opacity-90",
    "shadow-md",
    "self-start",
  );

  // Set background color based on color prop
  switch (color) {
    case "rust":
      button.classList.add("bg-rust");
      break;
    case "golf":
      button.classList.add("bg-golf");
      break;
    default:
      button.classList.add("bg-lavender");
      break;
  }

  // Set flex-grow based on flexGrow prop
  if (flexGrow) {
    button.classList.remove("self-start");
    button.classList.add("flex-grow");
  }

  // Set onClick event listener
  if (onClick) {
    button.addEventListener("click", onClick);
  }

  iconElement.classList.add(`fa-solid`, `fa-${icon}`, `mr-2`);
  labelElement.textContent = label;

  button.appendChild(iconElement);
  button.appendChild(labelElement);

  return button;
}
