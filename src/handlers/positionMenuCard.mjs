function calcPosition() {
  const headerContents = document.getElementById("header-contents");
  const containerRect = headerContents.getBoundingClientRect();
  const distanceToRightEdge = window.innerWidth - containerRect.right;

  return distanceToRightEdge.toFixed(0) - 2;
}

export default function positionMenuCard() {
  const menuCard = document.getElementById("menu-card");
  const mediaQuery = window.matchMedia("(min-width: 640px)");

  if (!menuCard) return;

  if (mediaQuery.matches) {
    menuCard.style.right = `${calcPosition()}px`;
  }

  window.addEventListener("resize", () => {
    if (mediaQuery.matches) {
      menuCard.style.right = `${calcPosition()}px`;
      menuCard.classList.add("sm:-mr-4");
    } else {
      menuCard.style.right = "0px";
    }
  });
}
