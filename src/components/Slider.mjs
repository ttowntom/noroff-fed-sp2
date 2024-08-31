export default function Slider(imgArr) {
  console.log(imgArr);

  const container = document.createElement("div");
  container.classList.add("flex", "flex-col", "flex-grow", "gap-4");

  const imgEl = document.createElement("img");
  imgEl.src = imgArr[0].url;
  // imgEl.classList.add();

  container.appendChild(imgEl);

  return container;
}
