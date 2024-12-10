// switch

const diasemana = 'L'
switch(diasemana){
    case 'L': {
        console.log('Lunes')
        break   
    }
    case 'M': {
        console.log('Martes')
        break   
    }
    case 'X': {
        console.log('Miércoles')
        break   
    }
    case 'J': {
        console.log('Jueves')
        break   
    }
    case 'V': {
        console.log('Viernes')
        break   
    }
    default:  {
        console.log('Día no encontrado')
    }
}

//la mayoria de las veces el switch se puede substituir por un diccionario
const diccionario = {
    L: 'Lunes',
    M: 'Martes',
    X: 'Miércoles',
    J: 'Jueves',
    V: 'Viernes'
}

const seleccion = 'M'
if(typeof diccionario[seleccion] === 'undefined'){
    console.log('Día no encontrado')
}else{
    console.log(diccionario[seleccion])
}

const message = (typeof diccionario[seleccion] !== 'undefined') ? 'Día no encontrado' : diccionario[seleccion]
console.log(message)

// const dia = diccionario[seleccion] ?? 'Día no encontrado'
//console.log(dia)

//### lo veremos en el tema 7 ###
try {
    throw new 
    Error('Fallo')
} catch(err){
    console.log(err, 'Ha fallado')
}


//Sumar los números pares de entre dos números dados

const inicio = 2
const fin = 45

let acc = 0
for(let i = 2;  i <= fin; i++){
    if (i % 2 === 0){
        console.log(i)
        acc = acc + i
    }
}
console.log(acc)

console.log('########')

// otra manera
let iniciopar = (inicio % 2 === 1) ? inicio + 1  : inicio //se suma 1 porque 3 + 1 es 4 y es par


/* for(let i = 2;  i <= fin; i = i + 2){
    console.log(i)
    }
console.log(acc) */


// cnvierte un array, en otro array multiplicando cada elemento por 2
const arrinicio = [2, 6, 10, 22]
const arrfinal = [] // [4, 12, 20, 44]

for(let i = 0; i < arrinicio.length; i++){
    arrfinal[i] = arrfinal[i] * 2
}

// hacer un bucle que escriba del 1 al 15: 
// fizz si el número de un bucle si el número es múltiplo de 3
// buzz si el número es múltiplo de 5
// fizzbuzz si el número es múltiplo de 3 y 5
const fi = 15

for(let i = 1; i <= fi; i++){
    if((i % 3 === 0)&&(i % 5 === 0)){
        console.log(i, 'fizzbuzz')
    }  else if(i % 3 === 0){
        console.log('fizz')
    }else if(i % 5 === 0) {
        console.log('buzz')
    }else{
        console.log(i)
    }
}

// otra manera mejor
for(let i = 1; i <= fin; i++){
    let accum = ''
    if(i%3 === 0){
        accum = 'fizz'
    } 
    if(i%5 === 0){
        accum = accum + 'buzz'
    }
console.log(accum === '' ? i : accum)
}

// dar la vuelta a un array a mano
const arrayinicio = ['Álvaro', 'Laia', 'Maria']
const arrayfin = []

let j = 0
for(let i = arrayinicio.length -1; i >= 0; i-- ){
    arrayfin[j] = arrayinicio[i]
    j++
}
console.log(arrayfin)

// contar vocales
const vocales = ['a', 'b', 'c', 'd', 'e', 'f']
let accvoc = 0

for(let i = 0; i < vocales.length; i++){
    switch(vocales[i].toLowerCase()){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':{
            accvoc = accvoc + 1
        }
    }
}
console.log(accvoc)