export default function UserPageSkeleton() {
  const container = document.createElement("div");

  // User Badge placeholder
  const userBadgePlaceholder = document.createElement("div");
  userBadgePlaceholder.classList.add(
    "w-full",
    "sm:w-1/3",
    "h-24",
    "bg-lavender-light",
    "rounded",
    "animate-pulse",
    "mb-6",
  );
  container.appendChild(userBadgePlaceholder);

  return container;
}
