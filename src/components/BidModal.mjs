import InputField from "./InputField.mjs";
import BidButton from "./BidButton.mjs";

export default function BidModal(listing) {
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
    "shadow-lg",
  );

  // Create modal content
  const modalContent = document.createElement("div");
  modalContent.id = "modal-content";
  modalContent.classList.add(
    "w-5/6",
    "sm:max-w-sm",
    "flex",
    "flex-col",
    "items-center",
    "bg-lavender-dark",
    "p-6",
    "rounded-md",
  );

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

  // Create title
  const title = document.createElement("h2");
  title.textContent = "Place your bid";
  title.classList.add(
    "text-white",
    "text-2xl",
    "font-bold",
    "mb-6",
    "text-rowdies",
  );
  modalContent.appendChild(title);

  // Create credits notice
  const notice = document.createElement("div");
  notice.classList.add(
    "w-full",
    "flex",
    "gap-2",
    "items-center",
    "justify-center",
    "text-lavender-dark",
    "mb-4",
    "bg-white",
    "p-1",
    "rounded-md",
  );

  const noticeIcon = document.createElement("i");
  noticeIcon.classList.add("fa-solid", "fa-dollar-sign", "text-lg");
  notice.appendChild(noticeIcon);

  const noticeText = document.createElement("p");
  noticeText.textContent = "1 000";
  noticeText.classList.add("font-semibold", "text-center");
  const textSpan = document.createElement("span");
  textSpan.textContent = "credits available";
  textSpan.classList.add("block", "-mt-2", "font-thin");
  noticeText.appendChild(textSpan);
  notice.appendChild(noticeText);

  modalContent.appendChild(notice);

  // Create form
  const form = document.createElement("form");
  form.id = "bid-form";
  form.classList.add("w-full", "flex", "flex-col", "space-y-4");

  // Create input fields
  const bidField = InputField(null, "number", "bid", true, false, "Bid amount");
  bidField.id = "bid-amount";
  bidField.classList.add("flex-grow");
  form.appendChild(bidField);

  // Append elements to modal content
  modalContent.appendChild(closeButton);
  modalContent.appendChild(form);
  modalContent.appendChild(BidButton(listing));

  // Append modal content to overlay
  modalOverlay.appendChild(modalContent);

  return modalOverlay;
}
