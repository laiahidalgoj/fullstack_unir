// map() transform an array without modify the original array. Numeral or string transform.

const numbers = [1,2,3,4,5,6,7];
const doubles = numbers.map(number => number * 2);

console.log(numbers);
console.log(doubles);

//extract the array of students and his students give an other array

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

const names = students.map(student => student.name)
console.log(names);

//imagine that you have a films list by genre

const films = [
    {
        title: 'Pulp Finction',
        director: 'Quentin Tarantino',
        genre: 'Crime',
    },
    {
        title: 'The Lord of Rings',
        director: 'Peter Jackson',
        genre: 'Fantasy',
    },
    {
        title: 'Titanic',
        director: 'James Cameron',
        genre: 'Drama',
    },
    {
        title: 'The Coverfield',
        director: 'Julius Onah',
        genre: 'Horror',
    }, 
];

const directors = films.map(films => films.director);
console.log(directors);