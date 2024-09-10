export default function Slider(imgArr) {
  const slider = document.createElement("div");
  slider.classList.add("slider", "relative", "overflow-hidden");

  const slidesContainer = document.createElement("div");
  slidesContainer.classList.add(
    "slides",
    "flex",
    "transition-transform",
    "duration-500",
  );

  imgArr.forEach((img) => {
    const slide = document.createElement("div");
    slide.classList.add(
      "slide",
      "relative",
      "h-96",
      "min-w-full",
      "transition-transform",
      "duration-500",
      "rounded-lg",
      "overflow-hidden",
    );

    const imgEl = document.createElement("img");
    imgEl.src = img.url;
    imgEl.alt = img.alt;
    imgEl.classList.add("object-cover", "w-full", "h-full");

    const imgCaption = document.createElement("p");
    imgCaption.textContent = img.alt;
    imgCaption.classList.add(
      "absolute",
      "bottom-2",
      "left-2",
      "text-white",
      "bg-black",
      "bg-opacity-50",
      "p-2",
      "rounded",
    );
    if (img.alt.length > 2) {
      slide.appendChild(imgCaption);
    }

    slide.appendChild(imgEl);
    slidesContainer.appendChild(slide);
  });

  slider.appendChild(slidesContainer);

  // Navigation buttons
  const btnLeft = document.createElement("button");
  btnLeft.classList.add(
    "slider__btn",
    "slider__btn--left",
    "absolute",
    "top-1/2",
    "left-2",
    "transform",
    "-translate-y-1/2",
  );

  const leftIcon = document.createElement("i");
  leftIcon.classList.add(
    "fa-solid",
    "fa-circle-chevron-left",
    "text-white",
    "text-3xl",
  );
  btnLeft.appendChild(leftIcon);

  const btnRight = document.createElement("button");
  btnRight.classList.add(
    "slider__btn",
    "slider__btn--right",
    "absolute",
    "top-1/2",
    "right-2",
    "transform",
    "-translate-y-1/2",
  );

  const rightIcon = document.createElement("i");
  rightIcon.classList.add(
    "fa-solid",
    "fa-circle-chevron-right",
    "text-white",
    "text-3xl",
  );
  btnRight.appendChild(rightIcon);

  if (imgArr.length > 1) {
    slider.appendChild(btnLeft);
    slider.appendChild(btnRight);
  }

  // Dots
  const dotsContainer = document.createElement("div");
  dotsContainer.classList.add(
    "dots",
    "flex",
    "gap-4",
    "justify-center",
    "mt-2",
  );

  imgArr.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.classList.add("dots__dot", "w-2", "h-2", "bg-lavender", "rounded-full");
    dot.dataset.slide = index;
    dotsContainer.appendChild(dot);
  });

  if (imgArr.length > 1) {
    slider.appendChild(dotsContainer);
  }

  // Slider logic
  let curSlide = 0;
  const maxSlide = imgArr.length;

  function activateDot(slide) {
    dotsContainer
      .querySelectorAll(".dots__dot")
      .forEach((dot) =>
        dot.classList.remove("bg-lavender-dark", "dot--active"),
      );
    dotsContainer
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("bg-lavender-dark", "dot--active");
  }

  function goToSlide(slide) {
    slidesContainer.style.transform = `translateX(-${100 * slide}%)`;
  }

  function nextSlide() {
    curSlide = curSlide === maxSlide - 1 ? 0 : curSlide + 1;
    goToSlide(curSlide);
    activateDot(curSlide);
  }

  function prevSlide() {
    curSlide = curSlide === 0 ? maxSlide - 1 : curSlide - 1;
    goToSlide(curSlide);
    activateDot(curSlide);
  }

  function init() {
    goToSlide(0);
    activateDot(0);

    btnRight.addEventListener("click", nextSlide);
    btnLeft.addEventListener("click", prevSlide);

    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    });

    dotsContainer.addEventListener("click", function (e) {
      if (e.target.classList.contains("dots__dot")) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  }

  init();

  return slider;
}
