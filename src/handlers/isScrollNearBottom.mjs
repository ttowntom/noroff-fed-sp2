export default function isScrollNearBottom(pixelsFromBottom = 200) {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  return scrollTop + clientHeight > scrollHeight - pixelsFromBottom;
}
