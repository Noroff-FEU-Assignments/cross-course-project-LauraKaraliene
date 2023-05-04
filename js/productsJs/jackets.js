const url = "https://rainydaysss.icu/wp-json/wc/store/products?&per_page=15";
const productList = document.querySelector(".product-list");
const loading = document.querySelector(".loading");

async function getProducts() {
  loading.classList.add("loading");
  productList.innerHTML = "";
  try {
    const response = await fetch(url);
    const getResults = await response.json();
    createHTML(getResults);
  } catch (error) {
    console.log(error);
    productList.innerHTML = `<div class="error"><p>Ups! An error occurred!</p></div>`;
  } finally {
    loading.classList.remove("loading");
  }
}

getProducts();

function createHTML(products) {
  products.forEach(function (product) {
    productList.innerHTML += `<div>
                              <a href="specific-jacket.html?post=${product.id}">
                                 <img src=${product.images[0].src}
                              alt="${product.name}" class="main-img"/>
                              <h3>${product.name}</h3>
                              <h4>Nok ${product.prices.price}</h4></a>
                            </div>`;
  });
}
