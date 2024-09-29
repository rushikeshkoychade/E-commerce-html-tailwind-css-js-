fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
        const productGrid = document.getElementById('product-grid');

        products.forEach(product => {
            const productCard = `
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="${product.image}" alt="${product.title}" class="w-full h-64 object-cover">
                    <div class="p-6 text-center">
                        <h3 class="text-xl font-medium text-gray-800 mb-2 line-clamp-1">${product.title}</h3>
                        <p class="text-gray-700 text-base line-clamp-4">${product.description}</p>
                        <div class="text-gray-600 font-semibold text-lg ">Category: ${product.category}</div>
                        <div class="font-bold text-lg text-gray-900 mt-4">$${product.price}</div>
                        <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none" onclick="window.location.href='productDetail.html?id=${product.id}'">See details</button>
                    </div>
                </div>
            `;
            productGrid.innerHTML += productCard;
        });
    })
    .catch(error => {
        console.error('Error fetching products:', error);
    });
