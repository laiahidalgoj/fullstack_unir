// normal sintaxis function

function sum(numA, numB){
  return numA + numB;
};

//anonymous sintaxis function

const subtract = function(numA, numB){
  return numA - numB;
};

const resultSubtract = subtract(8,5);
console.log(resultSubtract);

// Arrow function
// Not need to put 'function', 'return' and '{}'
const multiply = (numA, numB) => numA * numB;

const resultMultiply = multiply(4,3);
console.log(resultMultiply);

// (name) is parameter. if its with one parameter you must put without ()
const greet = name => `This is a greet for: ${name}`;

const message = greet('Laia');
console.log(message);

// without parameters you must put ()
const displayMessage = () => 'This is the message';


