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
const loader = document.querySelector(".loading");
const productPage = document.querySelector(".product-page");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("post");

const url = "https://rainydaysss.icu/wp-json/wc/store/products/" + id;

async function fetchProduct() {
  loader.classList.add("loading");
  productPage.innerHTML = "";
  try {
    const response = await fetch(url);
    const product = await response.json();
    createHTML(product);
  } catch (error) {
    productPage.innerHTML = `<div class="error"><p>Ups! An error occurred!</p></div>`;
  } finally {
    loader.classList.remove("loading");
  }
}

fetchProduct();

function createHTML(product) {
  productPage.innerHTML = `<section class="product-page">
  <section class="jacket">
  <div>
  <ul class="breadcrumbs">
    <li><a href="../index.html">Home/ </a></li>
    <li><a href="../women.html">Women/ </a></li>
    <li><a href="jackets.html">Outlet/</a></li>
    <li><a href="specific-jacket.html">${product.name} </a></li>
  </ul>
</div>
<div>
  <img src=${product.images[0].src}
  alt="${product.name}" class="product_specific"/>
</div>
<div class="jacket-small-block">
<img src=${product.images[0].src}
  alt="${product.name}" class="jacket-small"/>
  <img src=${product.images[0].src}
  alt="${product.name}" class="jacket-small"/>
  <img src=${product.images[0].src}
  alt="${product.name}" class="jacket-small"/>
  <img src=${product.images[0].src}
  alt="${product.name}" class="jacket-small"/>
</div>
</section>
<section class="jacket-info">
<div class="info">
  <h1>${product.name}</h1>
  <h2>Nok ${product.prices.price}</h2>
</div>
<div class="description info">
  <p>${product.description}</p>
</div>
<div class="color_rectangles info">
<h5>Color</h5>
<div class="rectangles">
  <div class="red-rectangle clickable"></div>
  <div class="blue-rectangle clickable"></div>
  <div class="yellow-rectangle clickable"></div>
  <div class="light-blue-rectangle clickable"></div>
</div>
</div>
<div class="sizes info">
<h5 class="size">Size</h5>
<div class="sizes-letters">
  <div class="sizes-specific-letter clickable-letter">XS</div>
  <div class="sizes-specific-letter clickable-letter">S</div>
  <div class="sizes-specific-letter clickable-letter">M</div>
  <div class="sizes-specific-letter clickable-letter">L</div>
  <div class="sizes-specific-letter clickable-letter">XL</div>
</div>
</div>
<div class="add-to-cart info">
<button
  onclick="addToCart(item)"
  type="button"
  class="cta_add-to-cart"
>
  Add to cart
</button>
</div>
</section>
</section>`;
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
