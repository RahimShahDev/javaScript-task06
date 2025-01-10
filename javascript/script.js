async function getProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        const productsContainer = document.querySelector("#products");

        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            const productImage = document.createElement("img");
            productImage.classList.add("product-image");
            productImage.src = product.image;
            productImage.alt = product.title;

            const productTitle = document.createElement("div");
            productTitle.classList.add("product-title");
            productTitle.innerText = product.title.length > 20 ? `${product.title.substring(0, 20)}...` : product.title;

            const productPrice = document.createElement("div");
            productPrice.classList.add("product-price");
            productPrice.innerText = `$${product.price}`;

            const productDescription = document.createElement("div");
            productDescription.classList.add("product-description");
            productDescription.innerText = product.description.length > 50 ? `${product.description.substring(0, 50)}...` : product.description;

            productCard.append(productImage, productTitle, productDescription, productPrice);
            productCard.addEventListener("click", () => {
                window.location.href = `details.html?productId=${product.id}`;
            });

            productsContainer.appendChild(productCard);
        });
    } catch (err) {
        console.log("Error fetching products: ", err);
    }
}

getProducts();
