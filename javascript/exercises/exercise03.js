sales = [
    {"product": "laptop", "price": 1200, "amount": 3},
    {"product": "mouse", "price": 25, "amount": 10},
    {"product": "teclado", "price": 45, "amount": 5},
    {"product": "monitor", "price": 300, "amount": 2},
    {"product": "laptop", "price": 1200, "amount": 1},
]

const prices = sales.map(sale => sale.price)
console.log(prices);
const amounts = sales.map(sale => sale.amount)
console.log(amounts);

for(let i = 0; i <= prices.length;i++){
    console.log(prices * amounts);
}

