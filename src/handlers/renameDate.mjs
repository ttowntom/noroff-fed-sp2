export default function renameDate(date) {
  const today = new Date();
  const inputDate = window.dateFns.parseISO(date); // Using parseISO from date-fns
  const differenceInDays = (today - inputDate) / (1000 * 3600 * 24);

  if (
    differenceInDays < 1 &&
    today.toDateString() === inputDate.toDateString()
  ) {
    return "Today";
  } else if (differenceInDays < 2) {
    return "Yesterday";
  } else if (differenceInDays < 7) {
    return `${Math.floor(differenceInDays)} days ago`;
  } else if (differenceInDays < 14) {
    return "Last week";
  } else if (differenceInDays < 21) {
    return "Two weeks ago";
  } else if (differenceInDays < 28) {
    return "Three weeks ago";
  } else if (differenceInDays < 45) {
    return "Last month";
  } else {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  }
}
