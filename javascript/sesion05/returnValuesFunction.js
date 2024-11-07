function sum(numA, numB){
  let total = numA + numB;
  return total;
}

let totalSum = sum(5,7);
let totalSum2 = sum(6,4);

let total = sum(totalSum, totalSum2);

console.log(total);

// AVERAGE GRADE

function calculateAverageGrade(grade1, grade2){
  let sum = grade1 + grade2;
  let average = sum / 2;
  return average;
}

console.log(calculateAverageGrade(8,9));