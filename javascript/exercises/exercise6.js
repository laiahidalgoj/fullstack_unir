//Given a non-empty array of integers, return the result of multiplying the values together in order. 

let x = [10,20,9,41,11,54];

function sortNums(x){
    let sortNums = x.sort((a, b) => a - b);
    return sortNums;
}

function grow(x){
    let newNums = sortNums(x);
    let result = newNums[0];
    for(let i = 1; i < newNums.length; i++){
        result *= newNums[i];
    }
    return result;
}

console.log(grow(x));
console.log(sortNums(x));