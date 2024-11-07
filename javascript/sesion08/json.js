// json o array asociativo
const product = {
    name: 'cookies',
    price: 2.35,
    amount: 5,
    stock: true
};

console.log(product['price']);
console.log(product.name);


let key = 'amount';
console.log(product[key]); // with varible only works with product[key]

product.color = 'brown';
product['category'] = 'cookies';
product.discount = product.price * 0.10 - product.price;

console.log(product);

console.log('-------')

for(let key in product){
    console.log(key, product[key]); 
}
