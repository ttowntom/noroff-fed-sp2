/**
 * Creates a button with an icon and text
 * @param {string[]} iconClasses - Array of classes for the icon element
 * @param {string} text - Text to display on the button
 * @param {function} onClick - Click event listener
 * @param {boolean} hideOnMobile - Hide on mobile
 * @returns {HTMLElement} - Button element
 */
export default function MenuButton(iconClasses, text, onClick, hideOnMobile) {
  const button = document.createElement("button");
  button.id = `btn-${text.toLowerCase().replace(" ", "-")}`;
  button.classList.add(
    "sm:flex",
    "gap-2",
    "items-center",
    "hover:text-opacity-90",
    "group",

    hideOnMobile ? "hidden" : "flex"
  );

  const icon = document.createElement("i");
  icon.classList.add(
    "fa-solid",
    ...iconClasses,
    "text-4xl",
    "sm:text-3xl",
    "text-lavender",
    "group-hover:text-opacity-90"
  );
  button.appendChild(icon);

  const buttonText = document.createElement("p");
  buttonText.classList.add(
    "hidden",
    "sm:flex",
    "font-semibold",
    "text-sm",
    "text-lavender-dark",
    "group-hover:text-opacity-90"
  );
  buttonText.textContent = text;
  button.appendChild(buttonText);

  if (onClick) {
    button.addEventListener("click", onClick);
  }

  return button;
}
