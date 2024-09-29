// Get the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Fetch the product details from the API
fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res => res.json())
    .then(product => {
        // Inject product data into the HTML template
        document.querySelector('h1').textContent = product.title;
        document.querySelector('p').textContent = product.description;
        document.querySelector('.flex.mt-8').innerHTML = `Category: ${product.category}`;
        document.querySelector('img').src = product.image;
    })
    .catch(error => {
        console.error('Error fetching product details:', error);
    });

// Quantity Control
let quantity = 1;
const quantityDisplay = document.getElementById('quantity');
const increaseQuantityBtn = document.getElementById('increaseQuantity');
const decreaseQuantityBtn = document.getElementById('decreaseQuantity');

increaseQuantityBtn.addEventListener('click', () => {
    quantity++;
    quantityDisplay.textContent = quantity;
});

decreaseQuantityBtn.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
    }
});
// Placeholder cart array to hold products added to the cart
let cart = [];

// Function to handle 'Add to Cart'
function addToCart() {
    const quantity = document.getElementById("quantity").innerText;
    const size = document.querySelector('input[name="size"]:checked').value;

    // You can collect more product data here like name, price, etc.
    const product = {
        name: "Sample Product", // Use the actual product name
        size: size,
        quantity: parseInt(quantity),
    };

    // Add the product to the cart array
    cart.push(product);
    console.log("Product added to cart:", product);
    alert("Product added to cart!");
}

// Function to handle 'Buy Now'
function buyNow() {
    const quantity = document.getElementById("quantity").innerText;
    const size = document.querySelector('input[name="size"]:checked').value;

    // Navigate to the buy product page with product details in the query string
    const productDetails = `?quantity=${quantity}&size=${size}`;
    window.location.href = `buyProduct.html${productDetails}`;
}

