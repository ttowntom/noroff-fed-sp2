import continuousInputValidation from "../handlers/continuousInputValildation.mjs";

export default function InputField(
  label,
  type,
  name,
  required = true,
  textArea = false,
  placeholder = "",
) {
  const container = document.createElement("div");
  const inputLabel = document.createElement("label");
  const input =
    textArea === true
      ? document.createElement("textarea")
      : document.createElement("input");
  const errorField = document.createElement("div");

  container.classList.add("flex", "flex-col");

  inputLabel.textContent = label;
  inputLabel.classList.add("block", "font-semibold", "text-gray-600");

  const uniqueId = Math.floor(Math.random() * 100);

  input.id = `input-${name}-${uniqueId}`;
  input.name = `${name}`;
  input.placeholder = placeholder;
  input.required = required;
  if (!textArea) {
    input.type = type;
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
  container.appendChild(errorField);

  // Add event listener for input validation
  continuousInputValidation(input);

  return container;
}
