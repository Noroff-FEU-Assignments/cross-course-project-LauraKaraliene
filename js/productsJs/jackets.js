import jackets from "./products.js";

const productList = document.querySelector(".product-list");

jackets.forEach((jacket) => {
  productList.innerHTML += `<div>
                              <a href="red-women-jacket.html">
                              <img&{jacket.imgSrc}
                              alt="red women jacket"/></a>
                              <h3>&{jacket.name}</h3>
                              <h4>Nok &{jacket.price}</h4>
                            </div>`;
});
