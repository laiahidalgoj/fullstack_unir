// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

let num = 20;

function numbers(num){
    let newArray = [];
    while(num !== 0){
        newArray.push(num);
        num--;
    } 
    return newArray;
}

console.log(numbers(num));