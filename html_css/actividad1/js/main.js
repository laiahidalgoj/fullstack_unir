import { Cart } from './cart.js';

const products = []

const product = new Cart();

product.addProduct('AFKDALAFDN', 'funda de piel', 24.32, 1)
product.addProduct('FAFGMW4MAF', 'cargador', 12.32, 2);
product.addProduct('FJARFA32NA', 'iFhone 13', 1043.62, 3);

products.push(product);

console.log(product.getProducts());

