
function sum(nums){
    let counter = 0;
    for(let i = 0; i < nums.length; i++){
        counter+=nums[i];
        
    }   
    return counter;    
}

function divide(dividend, divider){
    return dividend / divider;
}

function average(nums){
    result = divide(sum(nums), nums.length);
    return result;
}

let scoreA = [9,4,6,3,7,1,7,7,6,8,9,10,4];
let scoreB = [9,9,9,9,9,9,9,9,9,9,9,9,9];

function comparison(numsA, numsB){
    if(average(numsA) <= average(numsB)){
        return true;
    }else{
        return false;
    }
}

console.log(comparison(scoreA, scoreB));