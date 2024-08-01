// document.addEventListener('DOMContentLoaded', () => {
//     fetchProducts();
// });

// async function fetchProducts() {
//     try {
//         const response = await fetch('https://dummyjson.com/products');
//         const data = await response.json();
//         const products = data.products;
//         console.log(products);
//         displayProducts(products);
//     } catch (error) {
//         console.error(error);
//     }
// }

// function displayProducts(products) {
//     const trendContainer = document.getElementById('trend-container');
//     trendContainer.innerHTML = '';

//     products.forEach(product => {
//         const productElement = document.createElement('div');
//         productElement.classList.add('crd');
//         productElement.innerHTML = `
//             <img src="${product.thumbnail}" class="product-image">
//             <div class="crdText">
//                 <h2 class="product-title">${product.title}</h2>
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star"></i>
//                 <i class="fa-solid fa-star-half-stroke"></i> <br>
//                 <p class="crdPrice"> $${product.price}</p>
//                 <p class="crdDes">${product.description}</p>

//                 <button class="add-to-cart" data-title="${product.title}" data-image="${product.thumbnail}">Add to Cart</button>
//             </div>
//         `;
//         trendContainer.appendChild(productElement);
//     });

//     const addToCartButtons = document.querySelectorAll('.add-to-cart');
//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', function() {
//             const item = {
//                 image: this.getAttribute('data-image'),
//                 title: this.getAttribute('data-title')
//             };
//             let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//             cartItems.push(item);
//             localStorage.setItem('cartItems', JSON.stringify(cartItems));
//             window.location.href = 'cart.html';
//         });
//     });
// }



////////////////////////////////////////////////////////////////////////////////////////////////



document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
});

async function fetchProducts() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        const products = data.products;
        console.log(products);
        displayProducts(products);
    } catch (error) {
        console.error(error);
    }
}

function displayProducts(products) {
    const trendContainer = document.getElementById('trend-container');
    trendContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('crd');
        productElement.innerHTML = `
            <img src="${product.thumbnail}" class="product-image">
            <div class="crdText">
                <h2 class="product-title">${product.title}</h2>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i> <br>
                <p class="crdPrice"> $${product.price}</p>
                <p class="crdDes">${product.description}</p>

                <button class="add-to-cart" data-title="${product.title}" data-image="${product.thumbnail}" data-price="${product.price}">Add to Cart</button>
            </div>
        `;
        trendContainer.appendChild(productElement);
    });

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = {
                image: this.getAttribute('data-image'),
                title: this.getAttribute('data-title'),
                price: parseFloat(this.getAttribute('data-price'))
            };

            let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
            cartItems.push(item);
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            window.location.href = 'cart.html';
        });
    });
}
