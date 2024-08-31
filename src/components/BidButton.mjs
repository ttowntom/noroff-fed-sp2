export default function BidButton() {
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

  return bidButton;
}
