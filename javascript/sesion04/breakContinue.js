// break and continue

// break; stop loop and end it

//I want count from a initial number to final number, but if a one moment pass through for 10 or 20 i want to stop.

let initialNumber = 9;
let finalNumber = 50;

for(let i = initialNumber; i <= finalNumber; i++){
  if(i === 10 || i === 20 || i === 30){
    break;
  }
  console.log(i);
}

console.log('-----------');

//continue skips the step, not stops the loop, but goes out and back in the loop without counting the iteration

let initialNum = 9;
let finalNum = 50;

for(let i = initialNum; i <= finalNum; i++){
  if(i === 10 || i === 20 || i === 30){
    continue;
  }
  console.log(i);
}

console.log('-----------');

let i = initialNum;
while(i <= finalNum){
  if(i === 10 || i === 20 || i === 20){
    i++;
    continue;
  }
  console.log(i);
  i++;
}