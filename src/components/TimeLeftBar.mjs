let auctionEnded = false;

function formatTimeLeft(endsAt) {
  const now = new Date();
  const end = new Date(endsAt);
  const timeDifference = end - now;

  if (timeDifference <= 0) {
    auctionEnded = true;
    return "Auction ended";
  }

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days >= 2) {
    return `${days} days`;
  } else if (hours >= 1) {
    return `${hours} hours`;
  } else if (minutes >= 1) {
    return `${minutes} minutes`;
  } else {
    return `${seconds} seconds`;
  }
}

function calculateTimePercentage(createdAt, endsAt) {
  const created = new Date(createdAt).getTime();
  const ends = new Date(endsAt).getTime();
  const now = Date.now();

  const totalDuration = ends - created;
  const timeLeft = ends - now;

  // Calculate percentage of time left
  const percentageLeft = (timeLeft / totalDuration) * 100;

  // Ensure percentage is between 0 and 100
  return Math.max(0, Math.min(100, percentageLeft));
}

export default function TimeLeftBar(listing, showText = true) {
  const timeLeft = formatTimeLeft(listing.endsAt);
  const percentageLeft = calculateTimePercentage(
    listing.created,
    listing.endsAt,
  );

  // Create the container for the progress bar
  const container = document.createElement("div");
  container.classList.add(
    "relative",
    "w-full",
    "bg-gradient-to-r",
    "from-[#BAB0D4]",
    "to-[#4C1A57]",
    "overflow-hidden",
  );
  if (!showText) {
    container.classList.add("h-3");
  } else {
    container.classList.add("h-8");
  }

  // Create the green progress bar element
  const progressBar = document.createElement("div");
  progressBar.classList.add(
    "absolute",
    "h-full",
    "bg-gradient-to-r",
    "from-golf",
    "to-golf-light",
  );
  progressBar.style.width = `${percentageLeft}%`;

  // Create the label for time left
  const timeLabel = document.createElement("div");
  timeLabel.classList.add(
    "absolute",
    "right-2",
    "top-1/2",
    "transform",
    "-translate-y-1/2",
    "text-white",
    "font-semibold",
  );
  timeLabel.textContent = `${timeLeft} ${!auctionEnded ? "left" : ""}`;

  // Append the progress bar and label to the container
  container.appendChild(progressBar);
  showText && container.appendChild(timeLabel);

  return container;
}
