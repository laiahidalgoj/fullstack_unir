// ternary operator

// if a variable takes different dependent value of conditional structure with escape sequence.

let price = 240.5;
let initialPrice = 100;
let finalPrice = 400;
let message = '';

if(price >= initialPrice && price <= finalPrice){
  message = 'I found the objet that I want'
}else{
  message = 'I haven\'t bougth anything';
}
console.log(message);

// ternary operator
let otherMessage = (price >= initialPrice && price <= finalPrice) ? 'I found the objet that I want' : 'I haven\'t bougth anything';

console.log(otherMessage);