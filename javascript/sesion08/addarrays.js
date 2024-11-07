// insert elements inside of array by end
const animals = ['Lion', 'Cat', 'Dog', 'Bird'];
let animal = 'Corb';

animals.push(animal, 'Pig');

console.log(animals);

//insert an elements by begin of array - unshift()
animals.unshift('Salamandra');
console.log(animals);

//Eliminate an element by end - pop()
animals.pop();
animals.pop();
console.log(animals);

//Eliminate an elemeny by begin - shift()
animals.shift();
console.log(animals);

//Eliminate any position - splice()
animals.splice(2, 1); //2 (position) 1 (cuantos quiero eliminar)
console.log(animals);

// Replace cat ==> Dog
animals.splice(1,1, 'Dog')
console.log(animals);

//Filter return an array of elements that fullfil a determinate condition. Filter return the data that I looking for. 

const students = [
    {
        name: 'Laia',
        lastname: 'Hidalgo',
        age: 32,
        studies: 'Teacher',
    },
    {
        name: 'Cris',
        lastname: 'Mart',
        age: 18,
        studies: 'Fullstack',
    },
    {
        name: 'Maria',
        lastname: 'Rodríguez',
        age: 40,
        studies: 'Doctor',
    },

];

//const listFiltered = students.filter(searchStudies); //callback

const listFiltered = students.filter(student => student.studies === 'Fullstack'); 

console.log(listFiltered);

// sort() order an array
const names = ['Laia', 'Andrea', 'Carla', 'Mario', 'Francisco'];
const ordered = names.sort();
console.log(names);

// reverse() order at reverse
const reverseNames = names.reverse();
console.log(reverseNames);

// order from highest to lowest
const lenCharacters = names.sort((a,b) => a.lenght - b.lenght)
console.log(lenCharacters);

// order from lowest to highets
const lenChar = names.sort((c,d) => d.lenght - c.lenght)
console.log(lenCharacters);