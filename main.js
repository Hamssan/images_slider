const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

// Next Function
function nextSlide() {
  // Get current class
  const current = document.querySelector(".current");

  // Remove current class
  current.classList.remove("current");

  // Check for the next slide
  if (current.nextElementSibling) {
    // Add current class to next sibling
    current.nextElementSibling.classList.add("current");
  } else {
    // Add current class to start
    slides[0].classList.add("current");
  }

  //   current.classList.remove("current");
}

function prevSlide() {
  // Get current class
  const current = document.querySelector(".current");

  // Remove current class
  current.classList.remove("current");

  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
  //   current.classList.remove("current");
}

// Event buttons

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
