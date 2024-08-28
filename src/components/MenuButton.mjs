export default function MenuButton(iconClasses, text, onClick) {
  const button = document.createElement("button");
  button.id = `btn-${text.toLowerCase().replace(" ", "-")}`;
  button.classList.add(
    "flex",
    "gap-2",
    "items-center",
    "hover:text-opacity-90",
    "group",
  );

  const icon = document.createElement("i");
  icon.classList.add(
    "fa-solid",
    ...iconClasses,
    "text-4xl",
    "sm:text-3xl",
    "text-lavender",
    "group-hover:text-opacity-90",
  );
  button.appendChild(icon);

  const buttonText = document.createElement("p");
  buttonText.classList.add(
    "hidden",
    "sm:flex",
    "font-semibold",
    "text-sm",
    "text-lavender-dark",
    "group-hover:text-opacity-90",
  );
  buttonText.textContent = text;
  button.appendChild(buttonText);

  if (onClick) {
    button.addEventListener("click", onClick);
  }

  return button;
}
