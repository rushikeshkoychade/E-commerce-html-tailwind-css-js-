const categories = [
  "mens shirt",
  "mens t-shirt",
  "mens trousers&jeans",
  "woman top",
  "woman jeans&leggings",
  "woman accessories",
  "smart-watch",
  "collage-watch",
  "casual-watch",
];
const products = [
  {
    ID: 1,
    Name: "shirt",
    Description: "Men Typography V Neck Cotton Blend Multicolor T-ShirtS",
    Price: 500,
    Category: "mens shirt",
    Rating: 4.5,
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/g/r/p/m-tblwtrnful-gangster-tripr-original-imah47suekydmrqk.jpeg?q=70",
  },
  {
    ID: 2,
    Name: "shirt",
    Description: "Men Typography V Neck Cotton Blend Multicolor T-ShirtS",
    Price: 599,
    Category: "mens shirt",
    Rating: 3.5,
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/r/c/4/s-jawan-one-nb-nicky-boy-original-imahfyq24y3hamvg.jpeg?q=70",
  },
  {
    ID: 3,
    Name: "shirt",
    Price: 679,
    Category: "mens shirt",
    Rating: 4.7,
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/t/v/b/xl-c511-cvc-original-imah52bh2pnqcnhu.jpeg?q=70",
  },
  {
    ID: 4,
    Name: "shirt",
    Price: 700,
    Category: "mens t-shirt",
    Rating: 3.5,
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/g/r/p/m-tblwtrnful-gangster-tripr-original-imah47suekydmrqk.jpeg?q=70",
  },
  {
    ID: 5,
    Name: "shirt",
    Description: "Men Typography V Neck Cotton Blend Multicolor T-ShirtS",
    Price: 677,
    Category: "mens t-shirt",
    Rating: 4.5,
    Image: "",
  },
  {
    ID: 6,
    Name: "shirt",
    Price: 699,
    Category: "mens t-shirt",
    Rating: 3.7,
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/z/7/j/m-r-black-stoneberg-original-imah4rquenyzfujy.jpeg?q=70",
  },
  {
    ID: 7,
    Name: "shirt",
    Price: 499,
    Category: "mens trousers&jeans",
    Rating: 4.8,
    Image:
      "https://rukminim2.flixcart.com/image/612/612/k70spzk0/shirt/4/n/k/m-hlsh009637-highlander-original-imafpchsegvzgfwk.jpeg?q=70",
  },
  {
    ID: 8,
    Name: "shirt",
    Price: 888,
    Category: "mens trousers&jeans",
    Rating: 4.5,
    Image:
      "https://rukminim2.flixcart.com/image/612/612/k70spzk0/shirt/4/n/k/m-hlsh009637-highlander-original-imafpchsegvzgfwk.jpeg?q=70",
  },
  {
    ID: 9,
    Name: "shirt",
    Price: 999,
    Category: "mens top",
    Rating: 4.5,
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/l/f/s/xxl-tbh-brit-gy-the-bear-house-original-imagr827haefzmhp.jpeg?q=70",
  },
  {
    ID: 10,
    Name: "shirt",
    Price: null,
    Category: "woman top",
    Rating: 4.5,
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/p/5/h/m-0121-sh69-05-the-indian-garage-co-original-imagmhj2epajxfqa.jpeg?q=70",
  },
  {
    ID: 11,
    Name: "shirt",
    Price: 500,
    Category: "woman top",
    Rating: 3.3,
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-shirt/j/9/r/m-vd-79-m-vdlooks-original-imah226f8etw6qyx.jpeg?q=70",
  },
  {
    ID: 12,
    Name: "shirt",
    Price: 500,
    Category: "woman jeans&legins",
    Rating: 4.5,
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/7/a/z/3xl-mfs-14299-r-mufti-original-imagtdzthdg6qdv9.jpeg?q=70",
  },
  {
    ID: 13,
    Name: "shirt",
    Price: 899,
    Category: "woman jeans&legins",
    Rating: 3.6,
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/t/n/0/m-chgrey8-men-planet-original-imah46seqyhqg2rw.jpeg?q=70",
  },
  {
    ID: 14,
    Name: "shirt",
    Price: 600,
    Category: "woman jeans&legins",
    Rating: 2.7,
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/7/2/c/xxl-551-combraided-original-imagzk67cy5byhxs.jpeg?q=70",
  },
  {
    ID: 15,
    Name: "pant",
    Price: 799,
    Category: "woman jeans&legins",
    Rating: 4.5,
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/g/r/p/m-tblwtrnful-gangster-tripr-original-imah47suekydmrqk.jpeg?q=70",
  },
  {
    ID: 16,
    Name: "t-shirt",
    Price: 500,
    Category: "woman top",
    Rating: 4.6,
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/n/r/d/xl-togrblhn-dp3-d145-tripr-original-imah3vgfkfhtuc3h.jpeg?q=70",
  },
  {
    ID: 17,
    Name: "pant",
    Price: 400,
    Category: "womans top",
    Rating: 4.7,
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/g/r/p/m-tblwtrnful-gangster-tripr-original-imah47suekydmrqk.jpeg?q=70",
  },
  {
    ID: 18,
    Name: "jeans",
    Price: 599,
    Category: "womans accessories",
    Rating: 3.5,
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/g/i/d/-original-imagtabgwgtbpybc.jpeg?q=70",
  },
  {
    ID: 19,
    Name: "jeans",
    Price: 899,
    Category: "womans accessories",
    Rating: 4.5,
    Image:
      "https://rukminim2.flixcart.com/image/612/612/jw0zr0w0/t-shirt/g/u/q/l-daredevil-party-wear-wrath-original-imafgsggeucqhhgh.jpeg?q=70",
  },
  {
    ID: 20,
    Name: "jeans",
    Price: 399,
    Category: "smart-watch",
    Rating: 4.4,
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/l/l/n/l-ts9-vebnor-original-imah4jwfxhed5f4y.jpeg?q=70",
  },
  {
    ID: 21,
    Name: "jeans",
    Price: 567,
    Category: "collage-watch",
    Rating: 4.1,
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/m/b/z/xxl-gt-4-dyrectdeals-original-imagmg9wdxayznqx.jpeg?q=70",
  },
  {
    ID: 22,
    Name: "t-shirt",
    Price: 789,
    Category: "collage-watch",
    Rating: 4.2,
    Image:
      "https://rukminim2.flixcart.com/image/612/612/ksoz53k0/t-shirt/d/l/h/m-jawan-one-wild-bull-original-imag67nnhc9fwhxt.jpeg?q=70",
  },
  {
    ID: 23,
    Name: "t-shirt",
    Price: 678,
    Category: "casual-watch",
    Rating: 3.9,
    Image:
      "https://rukminim2.flixcart.com/image/612/612/jvmpci80/t-shirt/g/i/d/xl-togrblhn-dp3-d145-tripr-original-imaf3xydyrhgp88e.jpeg?q=70",
  },
  {
    ID: 24,
    Name: "t-shirt",
    Price: 500,
    Category: "casual-watch",
    Rating: 4.5,
    Image:
      "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/g/r/p/m-tblwtrnful-gangster-tripr-original-imah47suekydmrqk.jpeg?q=70",
  },
];

const categorySelect = document.getElementById("category-select");
categories.forEach((category) => {
  const option = document.createElement("option");
  option.value = category;
  option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
  categorySelect.appendChild(option);
});

// Function to filter products by category and price
function filterProductsByCategoryAndPrice(
  selectedCategory,
  selectedPriceRange
) {
  const productGrid = document.getElementById("product-grid");
  productGrid.innerHTML = ""; // Clear previous products

  const filteredProducts = products.filter((product) => {
    // Check if the product category matches the selected category
    const matchesCategory =
      selectedCategory === "Select your category" ||
      product.Category.toLowerCase() === selectedCategory.toLowerCase();

    // Check if the product price matches the selected price range
    const matchesPrice = filterByPrice(product.Price, selectedPriceRange);

    return matchesCategory && matchesPrice;
  });

  if (filteredProducts.length === 0) {
    productGrid.innerHTML =
      "<p>No products found. Please adjust your filters.</p>";
    return;
  }

  // Display filtered products
  filteredProducts.forEach((product) => {
    const productCard = `
              <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div class="transition-all duration-300 hover:scale-110">
                      <img src="${product.Image}" alt="${
      product.Name
    }" class="w-full h-64 object-cover">
                      <div class="p-6 text-center">
                          <h3 class="text-xl font-medium text-gray-800 mb-2 line-clamp-1 uppercase">${
                            product.Name
                          }</h3>
                          <p class="text-gray-700 text-base line-clamp-4">${
                            product.Description || "No description available"
                          }</p>
                          <div class="text-gray-600 font-semibold text-lg capitalize">Category: ${
                            product.Category
                          }</div>
                          <div class="font-bold text-lg text-gray-900 mt-4">Rating: ${
                            product.Rating
                          }/5</div>
                          <div class="font-bold text-lg text-gray-900 mt-4">${
                            product.Price
                          } <i class="fa fa-rupee" style="font-size:18px"></i></div>
                          <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none my-2" 
                          onclick="window.location.href='productDetail.html?id=${product.ID}'">
                          See details</button>
                      </div>
                  </div>
              </div>
          `;
    productGrid.innerHTML += productCard;
  });
}

// Function to filter by price
function filterByPrice(price, range) {
  if (range === "all") return true;
  if (!price) return false;

  const [min, max] = range.split("-").map(Number);
  if (range === "1500") return price >= 1500;
  return price >= min && price <= (max || Infinity);
}

// Event listeners for filters
categorySelect.addEventListener("change", updateFilters);
document.querySelectorAll('input[name="price"]').forEach((radio) => {
  radio.addEventListener("change", updateFilters);
});

// Function to update filters and display products
function updateFilters() {
  const selectedCategory = categorySelect.value;
  const selectedPriceRange = document.querySelector(
    'input[name="price"]:checked'
  ).value;
  filterProductsByCategoryAndPrice(selectedCategory, selectedPriceRange);
}

// Initial display of all products
updateFilters();
