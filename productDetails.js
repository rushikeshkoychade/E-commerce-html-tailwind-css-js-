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
      Category: "mens top",
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
      Name: "t-shirt",
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
      Name: "t-shirt",
      Price: 400,
      Category: "womans top",
      Rating: 4.7,
      Image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/g/r/p/m-tblwtrnful-gangster-tripr-original-imah47suekydmrqk.jpeg?q=70",
    },
    {
      ID: 18,
      Name: "t-shirt",
      Price: 599,
      Category: "womans accessories",
      Rating: 3.5,
      Image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/g/i/d/-original-imagtabgwgtbpybc.jpeg?q=70",
    },
    {
      ID: 19,
      Name: "t-shirt",
      Price: 899,
      Category: "womans accessories",
      Rating: 4.5,
      Image:
        "https://rukminim2.flixcart.com/image/612/612/jw0zr0w0/t-shirt/g/u/q/l-daredevil-party-wear-wrath-original-imafgsggeucqhhgh.jpeg?q=70",
    },
    {
      ID: 20,
      Name: "t-shirt",
      Price: 399,
      Category: "smart-watch",
      Rating: 4.4,
      Image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/l/l/n/l-ts9-vebnor-original-imah4jwfxhed5f4y.jpeg?q=70",
    },
    {
      ID: 21,
      Name: "t-shirt",
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
  
  
// Function to get the query parameters from the URL
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        id: parseInt(params.get('id'), 10),  // Parse ID as an integer
    };
}

// Function to display product details on the page
function displayProductDetails() {
    const { id } = getQueryParams();
    const product = products.find(p => p.ID === id);

    // Check if the product data is found
    if (!product) {
        console.error("Product not found!");
        return;
    }

    // Populate product details
    document.getElementById('product-name').innerText = product.Name || "No Name Available";
    document.getElementById('product-description').innerText = product.Description || "No Description Available";
    document.getElementById('product-category').innerText = `Category: ${product.Category || "Unknown"}`;
    document.getElementById('product-rating').innerText = `Rating: ${product.Rating ? product.Rating + "/5" : "No Rating"}`;
    document.getElementById('product-price').innerText = `${product.Price !== null ? product.Price + " ₹" : "Price not available"}`;

    // Set the product image
    const productImage = document.getElementById('product-image');
    productImage.innerHTML = product.Image ? `<img src="${product.Image}" alt="${product.Name}" class="h-[80%] object-fill">` : "Image not available";
}

// Call the function to display product details when the page loads
window.onload = displayProductDetails;

