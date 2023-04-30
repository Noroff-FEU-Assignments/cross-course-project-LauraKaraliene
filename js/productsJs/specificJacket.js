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

const productPage = document.querySelector(".product-page");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "http://localhost:10014/wp-json/wc/store/products/";

async function fetchProduct() {
  try {
    const response = await fetch(url);
    const products = await response.json();
    createHTML(products);
  } catch (error) {
    // productPage.innerHTML = alertMessage(error, "An error occurred");
  }
}

fetchProduct();

function createHTML(products) {
  productPage.innerHTML = `<section class="product-page">
  <section class="jacket">
  <div>
  <ul class="breadcrumbs">
    <li><a href="../index.html">Home/ </a></li>
    <li><a href="../women.html">Women/ </a></li>
    <li><a href="jackets.html">Outlet/</a></li>
    <li><a href="red-women-jacket.html">Red Women Jacket </a></li>
  </ul>
</div>
<div>
  <img src=${products.images[0].src}
  alt="${products.name}" class="product_specific"/>
</div>
<div class="jacket-small-block">
<img src=${products.images[0].src}
  alt="${products.name}" class="jacket-small"/>
  <img src=${products.images[0].src}
  alt="${products.name}" class="jacket-small"/>
  <img src=${products.images[0].src}
  alt="${products.name}" class="jacket-small"/>
  <img src=${products.images[0].src}
  alt="${products.name}" class="jacket-small"/>
</div>
</section>
<section class="jacket-info">
<div class="info">
  <h1>${products.name}</h1>
  <h2>Nok ${products.prices.price}</h2>
</div>
<div class="description info">
  <p>${products.description}</p>
</div>`;
}

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
