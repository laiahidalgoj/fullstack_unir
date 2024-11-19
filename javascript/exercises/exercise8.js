//Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

let s = '*';
let n = 3;

function repeatStr(n,s){
    let result = s.repeat(n);
    return result;
}

console.log(repeatStr(n,s));