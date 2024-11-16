let nums = [-6655,4,6,2,1,9,63,-134,566,876];

function maxNumber(nums){
    let max = 0;
  for(let num of nums){
     if(num >= max){
        max = num;
    }  
  }
  return `The max number is: ${max}`;
}

function minNumber(nums){
    let min = 0;
  for(let num of nums){
     if(num <= min){
        min = num;
    }  
  }
    return `The min number is: ${min}\n`;
}

console.log(minNumber(nums), maxNumber(nums));