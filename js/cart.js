const productContainer = document.querySelector(".main-left-jacket-block");
const removebutton = document.querySelector(".remove");
let subtotalNok = document.querySelector(".subtotal-nok");
let totalNok = document.querySelector(".total-nok");
let cartIconNumber = document.querySelector(".cart-items-number");
const total = document.querySelector(".total");

removebutton.addEventListener("click", () => {
  productContainer.style.display = "none";
  subtotalNok.innerHTML = `<p class="subtotal-nok">nok 0</p>`;
  totalNok.innerHTML = `<p class="total-nok">nok 0</p>`;
  cartIconNumber.innerHTML = `<span class="cart-items-number">0</span>`;
  total.style.marginTop = "29px";
});
