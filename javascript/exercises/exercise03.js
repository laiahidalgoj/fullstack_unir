
products = [
    {"name": "laptop", "price": 1200, "amount": 3},
    {"name": "mousse", "price": 25, "amount": 10},
    {"name": "keyboard", "price": 45, "amount": 5},
    {"name": "monitor", "price": 300, "amount": 20},
    {"name": "hardDrive", "price": 50, "amount": 1},
]

function getProduct(list, name){
      for(let product of list){
        if(product.name === name){
            return `${product.name}: ${product.price * product.amount}€`;
        }
    }
}

// reduce nos permite iterar sobre la lista y conservar el objeto product con la mayor cantidad (amount).
function moreSold(list){
    return list.reduce((maxProduct, product) => {
        return product.amount > maxProduct.amount ? product : maxProduct;
    });
}



console.log(getProduct(products, 'laptop'));
console.log(getProduct(products, 'keyboard'));
console.log(getProduct(products, 'mousse'));
console.log(getProduct(products, 'monitor'));
console.log(getProduct(products, 'hardDrive'));
console.log(moreSold(products));

