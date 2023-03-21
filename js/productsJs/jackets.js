import jackets from "./products.js";

const productList = document.querySelector(".product-list");

jackets.forEach((jacket) => {
  productList.innerHTML += `<div>
                              <a href="red-women-jacket.html">
                                 <img src=${jacket.imgSrc}
                              alt="red women jacket" class="main-img"/>
                              <h3>${jacket.name}</h3>
                              <h4>Nok ${jacket.price}</h4></a>
                            </div>`;
});
