import InputField from "./InputField.mjs";
import BidButton from "./BidButton.mjs";
import bidOnListing from "../api/listings/bid.mjs";
import { load, save } from "../storage/index.mjs";
import { getProfile } from "../api/profile/profileRead.mjs";

// Function to close the modal
function closeModal() {
  const modalOverlay = document.getElementById("modal-overlay");
  if (modalOverlay) {
    modalOverlay.remove();
  }
}

export default async function BidModal(listing) {
  const user = load("profile").name;
  const profile = await getProfile(user);
  const balance = profile.data.credits;
  save("credits", balance);

  // Create modal overlay
  const modalOverlay = document.createElement("div");
  modalOverlay.id = "modal-overlay";
  // Show modal
  modalOverlay.classList.remove("hidden");
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

  // Event listener to close modal on clicking outside
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

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
    "pt-2",
    "rounded-md",
  );

  // Create close button
  const closeButton = document.createElement("button");
  closeButton.id = "modal-close";
  closeButton.innerHTML = "✖";
  closeButton.classList.add(
    "p-1",
    "h-10",
    "w-10",
    "self-end",
    "-mr-4",
    "bg-lavender-dark",
    "text-white",
    "text-xl",
    "cursor-pointer",
    "rounded-full",
    "border",
    "border-lavender-light",
  );

  // Event listener to close modal on clicking the close button
  closeButton.addEventListener("click", () => {
    closeModal();
  });
  modalContent.appendChild(closeButton);

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
  noticeText.textContent = balance;
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

  // Create bid button
  const button = BidButton(listing, false);
  button.type = "submit";
  button.classList.add("w-full");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const form = e.target.closest("form");
    const formData = new FormData(form);
    const bidAmount = Number(formData.get("bid"));

    bidOnListing(listing.id, bidAmount);
  });
  form.appendChild(button);

  // Append form to modal content
  modalContent.appendChild(form);

  // Append modal content to overlay
  modalOverlay.appendChild(modalContent);

  return modalOverlay;
}
