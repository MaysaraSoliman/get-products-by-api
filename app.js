const productWrapper = document.querySelector("#products .container .products-wrapper");

let getProductsFromApi = async () => {
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json()
    console.log(data)
    displayProducts(data.products)
}
getProductsFromApi()

let displayProducts = (data) => {
    productWrapper.innerHTML = "";
    data.forEach((product) => {
        productWrapper.innerHTML += ` <div class="product-card">
        <div class="product-image-box">
          <img
            class="product-img"
            src="${product.thumbnail
            }"
            alt=""
          />
        </div>
        <div class="product-title">${product.title}</div>
        <div class="product-description">
          ${product.description}
        </div>
        <div class="product-price-box">
          <span class="product-current-price">
          ${(product.price - ((product.price * product.discountPercentage) / 100).toFixed())} $
          </span>
          <span class="product-old-price"><del>${product.price} $</del></span>
        </div>
        <div class="products-buttons">
          <div class="add-to-cart" data-id = "${product.id}">
            <img src="./images/Bag_alt.png" alt="" class="cart-icon" />
            <span>Add to cart</span>
          </div>
          <div class="favorite" data-id="${product.id}">
            <img
              src="./images/Favorite.png"
              alt=""
              class="favorite-icon"
            />
          </div>
        </div>
      </div>`
    })
}