const clickableElements = document.querySelectorAll(".clickable");
const clickableLetters = document.querySelectorAll(".clickable-letter");

clickableElements.forEach((element) => {
  element.addEventListener("click", () => {
    clickableElements.forEach((otherElement) => {
      if (otherElement !== element) {
        otherElement.classList.remove("clickable");
      }
    });
    element.classList.add("clickable");
  });
});

clickableLetters.forEach((element) => {
  element.addEventListener("click", () => {
    clickableLetters.forEach((otherElement) => {
      if (otherElement !== element) {
        otherElement.classList.remove("clickable-letter");
      }
    });
    element.classList.add("clickable-letter");
  });
});
