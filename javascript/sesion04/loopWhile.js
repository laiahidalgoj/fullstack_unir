// allows repeating a set of statements a given number of times. the difference with 'for' is that it is more indeterminate. the end and start point is no longer so defined. it is more versatile.

let counter = 1;

while(counter <= 10){
  console.log(counter);
  counter++;
}

console.log('------------');

// sum from a initial number to final number
let initialNumber = 20;
let finalNumber = 40;

let sum = 0;
while(initialNumber <= finalNumber){
  sum = sum + initialNumber;
  initialNumber++;
}

console.log(sum);

console.log('------------');

// sum from a initial number to final number nut not sum tens

let initialNum = 20;
let finalNum = 40;

let sum2 = 0;
while(initialNum < finalNum){
  if(initialNum !== 20 && initialNum !== 30){
    sum2 = sum2 + initialNum;
  }
   initialNum++;
}

console.log(sum2);