/**
 * Button component
 * @param {string} icon - Font Awesome icon name
 * @param {string} type - Button type
 * @param {string} label - Button label
 * @param {string} color - Button color
 * @param {boolean} flexGrow - Flex grow
 * @param {function} onClick - Click event listener
 * @returns {HTMLElement} - Button element
 */
export default function Button(
  icon,
  type,
  label,
  color = "lavender",
  flexGrow = false,
  onClick = null
) {
  const button = document.createElement("button");
  const iconElement = document.createElement("i");
  const labelElement = document.createElement("span");

  const useId = label ? label : icon;
  button.id = `btn-${useId.toLowerCase().replace(/\s/g, "-")}`;
  button.type = type;
  button.classList.add(
    "px-4",
    "py-2",
    "my-2",
    "text-white",
    "rounded-md",
    "hover:bg-opacity-90",
    "shadow-md",
    "self-center"
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

  if (icon) {
    iconElement.classList.add(
      `fa-solid`,
      `fa-${icon}`,
      `${label ? "mr-2" : "mr-0"}`
    );
    button.appendChild(iconElement);
  }

  if (label) {
    labelElement.textContent = label;
    button.appendChild(labelElement);
  }

  return button;
}
