export default function Button(icon, type, label) {
  const button = document.createElement("button");
  const iconElement = document.createElement("i");
  const labelElement = document.createElement("span");

  button.id = `btn-${label.toLowerCase().replace(/\s/g, "-")}`;
  button.type = type;
  button.classList.add(
    "px-4",
    "py-2",
    "mt-4",
    "text-white",
    "bg-lavender",
    "rounded-md",
    "hover:bg-lavender-dark",
    "shadow-md",
  );

  iconElement.classList.add(`fas`, `fa-${icon}`);
  labelElement.textContent = label;

  button.appendChild(iconElement);
  button.appendChild(labelElement);

  return button;
}
