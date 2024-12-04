// an array is a list of elements, always the same type

// create an array
const names = []; // functional form
const lastNames = new Array(); // POO form

console.log(lastNames);

console.log('-------')

const animals = ['Lion', 'Cat', 'Duck'];
const fruits = new Array('Apple', 'Pineapple');
const values = ['Laia', 32, true];

//An array in a list of elements. The amount of elements of the list it calls length

console.log(animals.length);

console.log('-------')

//an array is the position of elements, but an array begin always in 0 an end always for -1, n the length of the array.

for (let i = 0; i < animals.length; i++){
    console.log(animals[i]);
}

console.log('-------')

// special loop for lists
for(let fruit of fruits){
    console.log(fruit);
}