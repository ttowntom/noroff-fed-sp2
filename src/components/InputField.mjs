import continuousInputValidation from "../handlers/continuousInputValildation.mjs";
import dateTimeAuctionLimit from "../handlers/dateTimeAuctionLimit.mjs";

export default function InputField(
  label,
  type,
  name,
  required = true,
  textArea = false,
  placeholder = "",
  value = "",
) {
  const container = document.createElement("div");
  const inputLabel = document.createElement("label");
  const input =
    textArea === true
      ? document.createElement("textarea")
      : document.createElement("input");
  const errorField = document.createElement("div");

  container.classList.add("flex", "flex-col");

  const uniqueId = Math.floor(Math.random() * 100);
  const id = `input-${name}-${uniqueId}`;

  inputLabel.htmlFor = id;
  if (label) {
    inputLabel.classList.add("block", "font-semibold", "text-gray-600");
    inputLabel.textContent = label;
  } else {
    inputLabel.classList.add("sr-only");
    inputLabel.textContent = name;
  }

  input.id = id;
  input.name = `${name}`;
  input.placeholder = placeholder;
  input.value = value;
  input.required = required;
  if (!textArea) {
    input.type = type;
  }
  if (type === "datetime-local") {
    const { minValue, maxValue } = dateTimeAuctionLimit();
    input.min = minValue;
    input.max = maxValue;
  }
  input.classList.add(
    "w-full",
    "px-4",
    "py-2",
    "mt-1",
    "border",
    "border-battleship",
    "rounded-md",
    "focus:outline-none",
    "focus:ring",
    "focus:ring-lavender",
  );

  container.appendChild(inputLabel);
  container.appendChild(input);

  // Error field
  errorField.id = `error-${name}`;
  errorField.classList.add("text-red-500", "text-sm", "mt-1");
  errorField.ariaLive = "polite";
  container.appendChild(errorField);

  // Add event listener for input validation
  continuousInputValidation(input);

  return container;
}
