import { load } from "../storage/index.mjs";
import BidModal from "./BidModal.mjs";

const user = load("profile")?.name || false;

const bidButton = document.createElement("button");
bidButton.textContent = "Bid";
bidButton.classList.add(
  "w-4/5",
  "text-white",
  "font-bold",
  "uppercase",
  "rounded-md",
  "py-2",
  "px-4",
  "my-4",
  "shadow-xl",
  "bg-gradient-to-t",
  "from-golf",
  "to-[#00A8AA]",
  "hover:from-golf",
  "hover:to-golf",
);

bidButton.addEventListener("click", () => {
  const modal = BidModal();
  document.body.appendChild(modal);
});

const ownerNotice = document.createElement("p");
ownerNotice.textContent = "You can't bid on your own item";

const loginNotice = document.createElement("a");
loginNotice.href = "/user/login";
loginNotice.textContent = "Log in to bid";
loginNotice.classList.add("text-lavender-dark", "hover:underline");

export default function BidButton(listing) {
  const seller = listing.seller.name;
  const isSeller = user === seller;

  if (user && !isSeller) {
    return bidButton;
  } else if (isSeller) {
    return ownerNotice;
  } else if (!user) {
    return loginNotice;
  }
}
