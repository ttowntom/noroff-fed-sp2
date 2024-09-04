export default function Slider(imgArr) {
  console.log(imgArr);

  const container = document.createElement("div");
  container.classList.add("w-full", "md:w-2/3");

  const imgEl = document.createElement("img");
  imgEl.src = imgArr[0]?.url;

  container.appendChild(imgEl);

  return container;
}
