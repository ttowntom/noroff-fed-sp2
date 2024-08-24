export default function InputField(label, type, name, required = true) {
  const container = document.createElement("div");
  const inputLabel = document.createElement("label");
  const input = document.createElement("input");

  container.classList.add("flex", "flex-col");

  inputLabel.textContent = label;
  inputLabel.classList.add("block", "font-semibold", "text-gray-600");

  input.required = required;
  input.type = type;
  input.name = name;
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

  return container;
}
