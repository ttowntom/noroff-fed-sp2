export default function updateTitle(listing = false, user = false) {
  if (listing) {
    document.title = `${listing.title} | QuickBid`;
  } else if (user) {
    document.title = `${user} | QuickBid`;
  }
}
