const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");

const introNextBtn = document.getElementById("introNextBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const slides = [slide1, slide2];

let activeSlide = Number(localStorage.getItem("vietnam-active-slide"));

if (Number.isNaN(activeSlide) || activeSlide < 0 || activeSlide > 1) {
  activeSlide = 0;
}

function showSlide(index) {
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === index);
  });

  activeSlide = index;
  localStorage.setItem("vietnam-active-slide", String(index));
  window.scrollTo(0, 0);
}

introNextBtn.addEventListener("click", () => {
  showSlide(1);
});

prevBtn.addEventListener("click", () => {
  showSlide(0);
});

nextBtn.addEventListener("click", () => {
  showSlide(0);
});

const checkboxes = document.querySelectorAll('input[type="checkbox"][data-id]');

checkboxes.forEach((checkbox) => {
  const storageKey = `vietnam-check-${checkbox.dataset.id}`;
  const savedValue = localStorage.getItem(storageKey);

  if (savedValue === "true") {
    checkbox.checked = true;
  }

  checkbox.addEventListener("change", () => {
    localStorage.setItem(storageKey, checkbox.checked);
  });
});

showSlide(activeSlide);
