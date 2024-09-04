export default function BidModal() {
  // Create modal overlay
  const modalOverlay = document.createElement("div");
  modalOverlay.id = "modal-overlay";
  modalOverlay.classList.add(
    "fixed",
    "top-0",
    "left-0",
    "w-full",
    "h-full",
    "flex",
    "items-center",
    "justify-center",
    "bg-black",
    "bg-opacity-50",
    "z-50",
  );

  // Create modal content
  const modalContent = document.createElement("div");
  modalContent.id = "modal-content";
  modalContent.classList.add("bg-lavender-dark", "p-6", "rounded-md");

  // Create close button
  const closeButton = document.createElement("button");
  closeButton.id = "modal-close";
  closeButton.innerHTML = "✖";
  closeButton.classList.add(
    "absolute",
    "top-2",
    "right-2",
    "text-white",
    "text-2xl",
    "cursor-pointer",
  );

  // Create form
  const form = document.createElement("form");
  form.id = "bid-form";
  form.classList.add("flex", "flex-col", "space-y-4");
  form.innerHTML = `
    <h3>Place Your Bid</h3>
    <label for="bid-amount">Bid Amount:</label>
    <input type="number" id="bid-amount" name="bidAmount" required>
    <button type="submit">Submit Bid</button>
  `;

  // Append elements to modal content
  modalContent.appendChild(closeButton);
  modalContent.appendChild(form);

  // Append modal content to overlay
  modalOverlay.appendChild(modalContent);

  return modalOverlay;
}
