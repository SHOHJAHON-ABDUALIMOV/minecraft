const sliderItems = document.querySelectorAll(".slider-item");
let currentSlide = 0;

document.querySelector(".next").addEventListener("click", () => {
  sliderItems[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % sliderItems.length;
  sliderItems[currentSlide].classList.add("active");
});

document.querySelector(".prev").addEventListener("click", () => {
  sliderItems[currentSlide].classList.remove("active");
  currentSlide = (currentSlide - 1 + sliderItems.length) % sliderItems.length;
  sliderItems[currentSlide].classList.add("active");
});

