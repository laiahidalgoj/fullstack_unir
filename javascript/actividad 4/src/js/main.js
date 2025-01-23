import { Cart } from './cart.js';
import { posts } from './posts.js';

document.addEventListener('DOMContentLoaded', () => {
    const productList = document.querySelector('.product-list');
    const titleTotalBox = document.querySelector('.title-total-box');
    const totalPrice = document.querySelector('.total-price');

    const cart = new Cart();

    posts.forEach(post => {
        const productBox = document.createElement('div');
        productBox.classList.add('products-box');

        const headerInfoProduct = document.createElement('div');
        headerInfoProduct.classList.add('header-info-product');

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const title = document.createElement('p');
        title.textContent = post.title;

        const ref = document.createElement('p');
        ref.textContent = `Ref: ${post.SKU}`;

        productInfo.appendChild(title);
        productInfo.appendChild(ref);

        const quantityControls = document.createElement('div');
        quantityControls.classList.add('quantity-controls');

        const decrementButton = document.createElement('button');
        decrementButton.classList.add('decrement-button');
        decrementButton.textContent = '-';

        const units = document.createElement('span');
        units.classList.add('units');
        units.textContent = '0';

        const incrementButton = document.createElement('button');
        incrementButton.classList.add('increment-button');
        incrementButton.textContent = '+';

        quantityControls.appendChild(decrementButton);
        quantityControls.appendChild(units);
        quantityControls.appendChild(incrementButton);

        const unit = document.createElement('div');
        unit.classList.add('unit');

        const priceUnit = document.createElement('p');
        priceUnit.classList.add('price-unit');
        priceUnit.textContent = `${post.price}€`;

        unit.appendChild(priceUnit);

        const totalProduct = document.createElement('div');
        totalProduct.classList.add('total-product');

        const priceTotalUnit = document.createElement('p');
        priceTotalUnit.classList.add('price-total-unit');
        priceTotalUnit.textContent = '';

        totalProduct.appendChild(priceTotalUnit);

        headerInfoProduct.appendChild(productInfo);
        headerInfoProduct.appendChild(quantityControls);
        headerInfoProduct.appendChild(unit);
        headerInfoProduct.appendChild(totalProduct);

        productBox.appendChild(headerInfoProduct);

        const lineProduct = document.createElement('div');
        lineProduct.classList.add('line-product');

        productList.appendChild(productBox);
        productList.appendChild(lineProduct);

        let unitCount = 0;

        incrementButton.addEventListener('click', () => {
            unitCount++;
            units.textContent = unitCount;
            const totalPrice = (unitCount * parseFloat(post.price)).toFixed(2);
            priceTotalUnit.textContent = `${totalPrice}€`;

            cart.addProduct(post.SKU, post.title, post.price, unitCount, 1);

            updateGlobalTotal();
        });

        decrementButton.addEventListener('click', () => {
            if (unitCount > 0) {
                unitCount--;
                units.textContent = unitCount;
                const totalPrice = (unitCount * parseFloat(post.price)).toFixed(2);
                priceTotalUnit.textContent = `${totalPrice}€`;

                cart.updateUnits(post.SKU, -1);

                updateGlobalTotal();
            }
        });
    });

    const updateGlobalTotal = () => {
        titleTotalBox.innerHTML = '';
        let totalGlobalPrice = 0;
        let totalUnits = 0;


        cart.getProducts().forEach(product => {
            totalGlobalPrice += product.price * product.units;
            totalUnits += product.units;

            const productInfo = document.createElement('div');
            productInfo.classList.add('selected-product');

            const productDetails = document.createElement('p');
            productDetails.classList.add('title-selected');
            productDetails.textContent = `${product.title}`


            const productPrice = document.createElement('p');
            productPrice.classList.add('price-selected');
            productPrice.textContent = `${product.price * product.units.toFixed(2)}€`;

            productInfo.appendChild(productDetails);
            titleTotalBox.appendChild(productInfo);
            productInfo.appendChild(productPrice);
        });

        // UPDATE PRODUCTS
        //totalPriceBox.textContent = `Unidades: ${totalUnits}`;
        totalPrice.textContent = `${totalGlobalPrice.toFixed(2)}€`;
    };
});
