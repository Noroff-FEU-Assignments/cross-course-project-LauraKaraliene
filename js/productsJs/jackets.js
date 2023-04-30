const url = "http://localhost:10014/wp-json/wc/store/products?&per_page=15";
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
    // productList.innerHTML = alertMessage(error, "An error occurred");
  } finally {
    loading.classList.remove("loading");
  }
}

getProducts();

function createHTML(products) {
  products.forEach(function (product) {
    productList.innerHTML += `<div>
                              <a href="specific-jacket.html?post=${product.post}">
                                 <img src=${product.images[0].src}
                              alt="${product.name}" class="main-img"/>
                              <h3>${product.name}</h3>
                              <h4>Nok ${product.prices.price}</h4></a>
                            </div>`;
  });
}
