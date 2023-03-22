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
  // subtotalPrice += 2300;

  // document.querySelector(".subtotal-price").innerText =
  //   subtotalPrice.toFixed(2);
});

// button.onclick = addToCart;

// function addToCart() {
//   number++;
//   localStorage.setItem("cartItems", number);
//   for(var i=0, i < number, i++) {

//   }
// };

// if(localStorage.getItem("cartItems")) {
//   number = localStorage.getItem("cartItems");
//   for(let i = 0, i < number, i++){
// cartContent.innerHTML += `  <section class="main-content">
// <div class="main-left-middle-block">

//   <div class="main-left-jacket-block">
//     <div>
//       <a href="../products/red-women-jacket.html"
//         ><img
//           src="../images/red_women_jacket.png"
//           alt="red women jacket"
//           class="main-left-jacket"
//       /></a>
//     </div>
//     <div>
//       <h4>Red Women Jacket</h4>
//       <p>Size: M</p>
//       <p>Colour: Red</p>
//     </div>
//     <div class="main-middle-block">
//       <div class="plus-minus">
//         <button class="button-minus">-</button>
//         <p>1</p>
//         <button class="button-plus">+</button>
//       </div>
//       <p class="main-middle-price">nok 2300</p>
//       <p class="remove">Remove</p>
//     </div>
//   </div>`;
// }
// }

// function addToCart() {
//   button.onclick = addToCart(item);
// }
