const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("productId");

async function fetchProductDetails(productId) {
    const loader = document.querySelector("#loader");
    const productDetail = document.querySelector("#product-detail");

    loader.style.display = "flex";
    productDetail.style.opacity = 0;

    try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const product = await response.json();

        loader.style.display = "none";
        displayProductDetails(product);
        productDetail.style.opacity = 1;
    } catch (err) {
        console.log("Error fetching product details: ", err);
        loader.style.display = "none";
    }
}

function displayProductDetails(product) {
    const productDetailContainer = document.querySelector("#product-detail");

    productDetailContainer.innerHTML = `
        <div class="product-detail-card">
            <img class="product-detail-image" src="${product.image}" alt="${product.title}">
            <h2 class="product-detail-title">${product.title}</h2>
            <p class="product-detail-price">$${product.price}</p>
            <p class="product-detail-description">${product.description}</p>
        </div>
    `;
}

if (productId) {
    fetchProductDetails(productId);
}

document.getElementById("back-button").addEventListener("click", () => {
    window.location.href = "./index.html";
});
