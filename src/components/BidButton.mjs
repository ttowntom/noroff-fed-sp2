import { load } from "../storage/index.mjs";
import BidModal from "./BidModal.mjs";

const user = load("profile")?.name || false;

const loginNotice = document.createElement("a");
loginNotice.href = "/user/login";
loginNotice.textContent = "Log in to bid";
loginNotice.classList.add("text-lavender-dark", "hover:underline");

export default function actionButton(listing, openModal = true) {
  const seller = listing.seller.name;
  const isSeller = user === seller;

  const actionButton = document.createElement("button");

  actionButton.classList.add(
    "w-4/5",
    "font-bold",
    "uppercase",
    "rounded-md",
    "py-2",
    "px-4",
    "my-4",
    "shadow-xl",
  );
  if (!isSeller) {
    actionButton.textContent = "Bid";
    actionButton.classList.add(
      "text-white",
      "bg-gradient-to-t",
      "from-golf",
      "to-[#00A8AA]",
      "hover:from-golf",
      "hover:to-golf",
    );
  }
  if (isSeller) {
    actionButton.textContent = "Edit";
    actionButton.classList.add(
      "text-white",
      "bg-lavender",
      "hover:bg-lavender-dark",
    );

    actionButton.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.href = `/listings/edit-listing/?listing=${listing.id}`;
    });
  }

  if (!isSeller && openModal) {
    actionButton.addEventListener("click", async () => {
      const modal = await BidModal(listing);
      document.body.appendChild(modal);
    });
  }

  if (user && !isSeller) {
    return actionButton;
  } else if (isSeller) {
    return actionButton;
  } else if (!user) {
    return loginNotice;
  }
}
