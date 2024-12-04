// Operators

let numberA = 12;
let numberB = 4;

//Maths
console.log('Sum', numberA + numberB);
console.log('Subtract', numberA - numberB);
console.log('Multiply', numberA - numberB);
console.log('Divide', numberA / numberB);
console.log('Pow', numberA ** numberB);
console.log('Module', numberA % numberB);

let result = (numberA + numberB) * numberA;
console.log(result);

// Assignment (=)

// Comparison
// > , < , >= , <=, ==, !=, ===, !==
// the comparison operators return a boolean

// i'm found a brand phone Samsung with price below 200
let brand = 'Samsung';
let price = 1000;
console.log(brand <= price);
console.log(brand === 'samsung');
console.log(brand.toLowerCase() === 'samsung')


// Logical operators -- && and, || or
let state = true;
console.log(!state);

//i want a apple phone AND below 700
let brandPhone = 'xiaomi';
let pricePhone = 600;

console.log(brandPhone === 'apple' && pricePhone <= 700);

//i want a apple phone OR below 700
console.log(brandPhone === 'apple' || pricePhone <= 700);