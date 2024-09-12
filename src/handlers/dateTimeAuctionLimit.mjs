export default function dateTimeAuctionLimit() {
  const now = new Date();

  // Get today's date in ISO format (YYYY-MM-DD)
  const minValue = now.toISOString().slice(0, 16);

  // Create a new date object two months from now
  const futureDate = new Date(now);
  futureDate.setMonth(now.getMonth() + 2);

  // Handle month overflow and adjust the year if necessary
  if (futureDate.getMonth() !== (now.getMonth() + 2) % 12) {
    futureDate.setDate(0); // Set to last day of the previous month
  }

  // Format the future date to ISO format (YYYY-MM-DD)
  const maxValue = futureDate.toISOString().slice(0, 16);

  return { minValue, maxValue };
}
