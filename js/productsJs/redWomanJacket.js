const clickableElements = document.querySelectorAll(".clickable");
const clickableLetters = document.querySelectorAll(".clickable-letter");
const button = document.querySelector(".cta_add-to-cart");
const cartNumber = document.querySelector(".cart-icon-number");
const popup = document.querySelector(".popup");
const cartIcon = document.querySelector(".shopping_cart");
let subtotalPrice = parseFloat(
  document.querySelector(".subtotal-price").innerText
);

let number = localStorage.getItem("cartCount") || 0;

//clickable color and size rectangles
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

//shopping cart icon update
cartNumber.textContent = number.toString();

window.addEventListener("storage", function (event) {
  if (event.key === "cartCount") {
    number = parseInt(event.newValue);
    cartNumber.textContent = number.toString();
  }
});

button.addEventListener("click", () => {
  number++;
  popup.classList.add("show");
  popup.style.display = "block";

  setTimeout(() => {
    cartNumber.textContent = number.toString();
    localStorage.setItem("cartCount", number);

    popup.style.display = "none";
    popup.classList.remove("show");
  }, 4000);
});
