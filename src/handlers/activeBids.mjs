export default function activeBids(bidsArr) {
  // Group bids by bids.data.id
  const groupedBids = bidsArr.data.reduce((acc, bid) => {
    if (!acc[bid.listing.id]) {
      acc[bid.listing.id] = [];
    }
    acc[bid.listing.id].push(bid);
    return acc;
  }, {});

  // Render oly the highest bid for each listing
  const highestBids = Object.values(groupedBids).map((bids) => {
    return bids.reduce((acc, bid) => {
      if (bid.amount > acc.amount) {
        return bid;
      }
      return acc;
    });
  });

  // Remove bids on listings that have ended, based on the listing's end date
  const activeBids = highestBids.filter((bid) => {
    return new Date() < new Date(bid.listing.endsAt);
  });

  // Clean up the data for the renderListings function
  const activeBidsClean = [];
  activeBids.forEach((bid) => {
    const listing = bid.listing;
    listing.bids = [];
    listing.bids.push({
      id: bid.id,
      amount: bid.amount,
      created: bid.created,
      bidder: bid.bidder,
    });

    activeBidsClean.push(listing);
  });

  return activeBidsClean;
}
