export default function deleteImageDiv(id) {
  const container = document.getElementById(`${id}`);

  if (container) {
    container.remove();
  }
}
