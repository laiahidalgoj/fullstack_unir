import { Cart } from './cart.js';

const products = []

const product = new Cart();

product.addProduct('AFKDALAFDN', 'funda de piel', 22.32)
product.addProduct('DAFGFARSSD', 'funda de piel', 22.32)
product.addProduct('FAFGMW4MAF', 'cargador', 10.32);
product.addProduct('FJARFA32NA', 'iFhone 13', 1043.62);

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