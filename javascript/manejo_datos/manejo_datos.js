// Contenidos
// Clases 

// javascript.info
// eloquentjavascript
// you don't know js

// aprender a programar => algoritmia
// leetcode ->  
// hackerrank -> 
// edabit
// codewars


// Tema 4

const pokemons = ['Pikachu', 'Bulbasur', 'Charmander']

// for(let i=0; i<pokemons.length; i++){
//   console.log(pokemons[i])
// }

console.log('### FOREACH ###')
// recorre todo el array
 const sacadorporpantalla = (texto, i) => {
    console.log(texto)
    console.log(i)
 }

pokemons.forEach(sacadorporpantalla)

pokemons.forEach((texto) => {
   texto = 'hola'
 })

 console.log(pokemons)

 pokemons.forEach(console.log)


// sacadorporpantalla('Pikachu')
// sacadorporpantalla('Bulbasur')
// sacadorporpantalla('Charmander')


console.log('### MAP ###');
// ### MAP ###
// cuando utilizar un map, cuando el array tiene que ser de la misma longitud que la de origen
// función transformadora 
// copia a otro array
// convertir datos en otros datos

const arr4 = [1,2,3,4,5]
// const pordos = x => x * 2
// const otroarray = arr.map(pordos)
// console.log(otroarray)

const otroarray = arr4.map(x => x*2)
console.log(otroarray)



console.log('### FILTER ###');
// ### FILTER ####
// tiene que devolver lo mismo o menos valores -- filtra con un boolean
const arr = [1,2,3,4,5]
let result = arr.filter(x => x % 2 === 1)

console.log(result);

console.log('### FIND ###');
// ### FIND ###
// dado un array encuentra un elemento y lo devuelve. cuando lo encuentra, deja de recorrer el array

const esLobo = (texto) => texto === 'lobo';

const rebano = ['oveja', 'oveja', 'oveja', 'lobo'];
let res = rebano.find(esLobo);

console.log(res);

console.log('### REDUCE ###');
// reduce 
// transforma el array en un dato
// recibe 2 parámetros, el acumulador y los números del array
const suma = [1,2,3,4,6,7]
const sumador = (acc, num) => {
    return acc + num;
}
let res2 = suma.reduce(sumador, 0);

console.log(res2);

// for vs forEach vs reduce
console.log('### for vs forEach vs reduce ###')
const nums = [1,2,3,4,5,6,7,8]

let acc = 0;
for(let i = 0; i <arr.length;i++){
    acc = acc + arr[i]
}

let acc2 = 0
nums.forEach((num) =>{
    acc2 = acc2 + num;
}) 
console.log(acc2)

let result3 = nums.reduce((acc, num) => {
    return acc + num;
},0)

console.log(result3)

console.log('### MÉTODOS ARRAY ###')
console.log('### SORT ###');
const abc = ['a', 'e', 'j', 's', 'i', 'b']
console.log(abc.sort());

const numbers = [5,67,3,1,6,78,45]
console.log(numbers.sort((a,b) => {
    return a - b
}))

const listaUsuarios = [
    {
        nombre: 'Laia',
        edad: 32,
        signoZodiaco: 'Piscis'
    },
    {
        nombre: 'Ernesto',
        edad: 40,
        signoZodiaco: 'Acuario'
    },
    {
        nombre: 'Maria',
        edad: 22,
        signoZodiaco: 'Tauro'
    },
    {
        nombre: 'Mia',
        edad: 87,
        signoZodiaco: 'Cáncer'
    },
];
// a - b -- lo ordena de manera creciente 1.2.3.4
// b - a -- lo ordena de manera decreciente 4.3.2.1
let result4 = listaUsuarios.sort((a, b) => {
    return b.edad - a.edad
})

console.log(result4);

// pregunta entrevista técnica
// .map .filter .find (devuelven una copia3)
// .sort modifica el array inicial
// .toSorted() hace copia del array

console.log(numbers.toSorted((a, b) => {
    return a - b
}));

console.log('### PUSH, UNSHIFT, POP, SHIFT  ### ')
// añade un valor al final
const n = [2,7,4,67,4,67];
console.log(n);
console.log(n.push(8));

// unshift()
console.log(n.unshift(0));
// pop()
console.log(n.pop());
// shift
console.log(n.shift());