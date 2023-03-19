// const clickableElements = document.querySelectorAll(".clickable");

// clickableElements.forEach((element) => {
//   element.addEventListener("click", () => {
//     clickableElements.forEach((element) => {
//       element.classList.remove("clicked");
//     });

//     element.classList.add("clicked");
//   });
// });

const clickableElements = document.querySelectorAll(".clickable");

// clickableElements.forEach((element) => {
//   element.addEventListener("click", () => {
//     clickableElements.forEach((otherElement) => {
//       if (otherElement !== element) {
//         otherElement.classList.remove("border");
//       }
//     });
//     element.classList.add("border");
//   });
// });

clickableElements.forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelector(".border")?.classList.remove("border");
    element.classList.add("border");
  });
});
