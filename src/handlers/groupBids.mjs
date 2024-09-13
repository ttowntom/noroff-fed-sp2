/**
 * Groups bids by date
 * @param {Array} bids - Array of bids
 * @returns {Object} - Object with bids grouped by date
 */
export default function groupBidsByDate(bids) {
  const sortedBids = bids
    .slice()
    .sort((a, b) => new Date(b.created) - new Date(a.created));

  const groupedBids = sortedBids.reduce((acc, bid) => {
    const date = new Date(bid.created).toISOString().split("T")[0];

    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date].push(bid);

    return acc;
  }, {});

  return groupedBids;
}
