products = [
    {"name": "laptop", "price": 1200, "amount": 3},
    {"name": "mousse", "price": 25, "amount": 10},
    {"name": "keyboard", "price": 45, "amount": 5},
    {"name": "monitor", "price": 300, "amount": 2},
    {"name": "laptop2", "price": 1800, "amount": 1},
]

function getProduct(list, name){
    for(let product of list){
        if(product.name === name){
            let result = product.price * product.amount;
            return `The total price of ${product.name} is: ${result}€`;
        }
    }
}

console.log(getProduct(products, 'laptop'));
console.log(getProduct(products, 'keyboard'));
console.log(getProduct(products, 'mousse'));
console.log(getProduct(products, 'monitor'));
console.log(getProduct(products, 'laptop2'));

function getIva(list, price){
   
}