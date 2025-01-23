import { Cart } from './cart.js';
import { posts } from './posts.js';

document.addEventListener('DOMContentLoaded', () => {

    const products = []
    const product = new Cart();

    product.addProduct('AFKDALAFDN', 'funda de piel', 22.32)
    product.addProduct('FAFGMW4MAF', 'cargador', 10.32);
    product.addProduct('0GKSN4WNGLS', 'iFhone 13', 1043.62);

    products.push(product);

    console.log(product.getProducts());
    console.log(product.calculateTotal());

    product.updateProduct('FAFGMW4MAF', 'cargador rápido', 20);
    product.updateProduct('AFKDALAFDN', 'funda de silicona', 17);

    console.log(product.getProducts());

    product.addProduct('KFAFVNASLF', 'air pods Pro', 24.45);
    console.log(product.getProducts());
    product.addProduct('EFALFGALNM', 'air pods', 24.45);
    product.addProduct('EFALFGALNM', 'air pods', 25);
    console.log(product.getProducts());

    product.deleteProduct('FAFGMW4MAF');
    console.log(product.getProducts());

    console.log(product.getUnits('air pods Pro'));
    console.log(product.getUnits('air pods'));

    console.log(product.calculateTotalProduct(914, 2))

// DOM
    const addUnit = document.querySelector('.increment-button');
    const deleteUnit = document.querySelector('.decrement-button');
    const totalPriceUnit = document.querySelector('.total-product');
    const sku = document.querySelector('.ref');
    const unit = document.querySelector('.units');
    const prices = document.querySelector('.price-unit');
    const titleProduct = document.querySelector('.title-product');
    const totalProducts = document.querySelector('.total-products');
    const priceProduct = document.querySelector('.total-price-box');
    const totalPrice = document.querySelector('.total-price');
    const totalTitle = document.querySelector('.total-title');
    const titleBox = document.querySelector('.title-box');
    const infoProd = document.querySelector('.product-info');
    const titleTotalBox = document.querySelector('.title-total-box');
    const infoProduct = document.querySelector('.products-box');
    const controlsProduct = document.querySelector('.quantity-controls');
    const allProducts = document.querySelector('.header-info-product');
    const prodList = document.querySelector('.product-list');

    posts.forEach(post => {

    let un = 0;
    let price = 914;
    let title = post.title;

// INCREMENT AND ADD UNITS AND PRICE

    addUnit.addEventListener("click", () => {
        if (parseInt(unit.innerHTML) >= 0) {
            un++;
            unit.innerHTML = un;
        }

            const total = product.calculateTotalProduct(price, un);
            totalPriceUnit.textContent = `${total}€`;
            priceProduct.innerHTML = `${total}€`;

            // ADD TOTAL PRODUCT
            title.textContent = 'TOTAL';
            totalPrice.textContent = `${total}€`;

        // ADD TITLE -- NO FUNCIONA
        const tit = document.createElement('p');
        if(titleTotalBox){
            titleTotalBox.appendChild(title);
        }else{
            console.log('Not exist');
        }
    })


// DECREMENT AND DELETE UNITS AND PRICE
    deleteUnit.addEventListener("click", () => {
        if (parseInt(unit.innerHTML) > 0) {
            un--;
            unit.innerHTML = un;
        }

        const total = product.calculateTotalProduct(price, un);
        totalPriceUnit.textContent = `${total}€`;
        priceProduct.innerHTML = `${total}€`;

        const totalProd = product.calculateTotalProduct(price, un);
        totalTitle.textContent = 'TOTAL';
        totalPrice.textContent = `${totalProd}€`;
    })
    })

    // // ADD PRODUCTS IN LIST
    // posts.forEach((post) => {
    //
    //     const infoProduct = document.createElement('div');
    //     infoProduct.classList.add('product-list');
    //
    //     const newTitle = document.createElement('h3');
    //     newTitle.textContent =  `${post.title}`;
    //     infoProduct.appendChild(newTitle);
    //
    //     const ref = document.createElement('p');
    //     ref.textContent =  `Ref: ${post.SKU}`;
    //     infoProduct.appendChild(ref);
    //
    //
    //     const controls = document.createElement('div');
    //     controls.classList.add('quantity-controls');
    //
    //     // Decrement
    //     const decrementButton = document.createElement('button');
    //     decrementButton.textContent = '-';
    //     controls.classList.add('decrement-button');
    //
    //     // Increment
    //     const incrementButton = document.createElement('button');
    //     incrementButton.textContent = '+';
    //     controls.classList.add('increment-button');
    //
    //     const units = document.createElement('span');
    //     units.textContent = '0';
    //     units.classList.add('units');
    //
    //
    //     titleProduct.appendChild(infoProduct);
    //     controlsProduct.appendChild(decrementButton);
    //     controlsProduct.appendChild(incrementButton);
    //     controlsProduct.appendChild(units);
    //
    //     infoProd.appendChild(infoProduct);
    //     titleProduct.appendChild(infoProduct);
    //
    //     newTitle.addEventListener('click', () => {
    //         addDetailInfo(post);
    //     })
    //
    //     ref.addEventListener('click', (e) => {
    //         addDetailInfo(post);
    //     })
    // })
})


