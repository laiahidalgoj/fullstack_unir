
let price = 200;

let taxes = [4, 10, 21];

for(let i = 0; i < taxes.length; i++){
  let priceTax = (price * taxes[i]) / 100 + price;
  console.log('The price for tax ' + taxes[i] + ' is: ' + priceTax +'€');
}