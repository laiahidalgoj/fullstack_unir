// crea una función que cuente ovejas
const sheepCounter = (sheepnumber) => {
    for (let i = 1; i <= sheepnumber; i++){
        if (i === 1){
            console.log(i + ' oveja')
        }else{
            console.log(i + ' ovejas')
        }
    }
}

sheepCounter(3);

//optimización 
const sheepCounter2 = (sheepnumber) => {
    if(sheepnumber > 0){
        console.log('1 oveja')
    for (let i = 2; i <= sheepnumber; i++){
            console.log(i + ' ovejas')
        }
    }
}

sheepCounter2(0);

console.log('### OTRO EJERCICIO ###')

// la media de un array
const notas = [9, 6, 8, 9, 10]

const calculoMedia = (array) => {

    if(!Array.isArray(array) || array.length === 0){
        return 0
    }
    let suma = 0;
    for(let i = 0; i < array.length; i++){
        suma = suma + array[i]
    }
    return suma / array.length
}

console.log(calculoMedia(notas));

// dvolvr minutos a sgundos
const milisegundos = (h, m, s) => {
    let segundos = s;
    segundos = (m * 60) + segundos;
    segundos = (h * 3600) + segundos;

    return segundos * 1000;
}

console.log(milisegundos(8,2,4));

const milisegundos1 = (h, m, s) => {
    return ((h * 3600) + (m * 60) + s) * 1000
}


console.log(milisegundos1(2,22,43));

// Crear una función que calcule el IMC
// peso / altura^2

const calculoIMC = (peso, altura) => {
    const imc =  peso / (altura*altura)
    if(imc < 18.5){
        return 'Peso inferior al normal'
    }else if(imc <= 24.9){
        return 'Peso normal'
    }else if(imc <= 29.9){
        return 'Superi0r al normal'
    }else{
        return 'Obesidad'
    }
}

console.log(calculoIMC(52, 1.51));

// función calculadora
// recibe por parámetros los operadores y el signo de la operación
// devuelve el resultado

const calculadora = (operador1, operador2, signo) => {

    let resultado;


    switch(signo){
        case '+': {
            resultado = operador1 + operador2
            break;
        }
        case '-': {
            resultado = operador1 - operador2
            break;
        }
        case '*': {
            resultado = operador1 * operador2
            break;
        }
        case '/': {
            if(operador1 === 0 || operador2 === 0){
                resultado = 'no es posible calcularlo'
            }
        
            resultado = operador1 / operador2
            break;
        }
        default:  {
            resultado = 'Signo no válido'
        }
        
        return resultado;
    }
}

console.log(calculadora(2,4));

// función que dado un array de carácteres, capitalice de manera 1 si y uno no los carácteres

const array = ['p','a','l','a','b','r','a'];
const capitalizar = (arr) => {
    const resultado = []
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            resultado[i] = arr[i].toLowerCase()
        }else{
            resultado[i] = arr[i].toUpperCase()
        }

        // lo mismo en ternario
        //resultado[i] = (i % 2 === 0) ? arr[i].toLowerCase() : arr[i].toUpperCase()
    }
    return resultado
}

console.log(capitalizar(array));

// contar apariciones
// apariciones(['a', 'e', 'a', 'e', 33, true, 'e'], 33)

const apariciones = (arr, elementoabuscar) => {
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === elementoabuscar){
            total++;
        }
    }
    return total;
}

console.log(apariciones(['a', 'e', 'a', 'e', 33, true, 'e'], 'a'));

// cuentaletras
const arr = ['a','e','a','e', 'f', 'e', 'p', 'k', 'l']
const cuentaletras = (arr) => {
    const resultado = {}
    for(let i = 0; i < arr.length; i++){
        if(typeof resultado[arr[i]] === 'undefined'){
            resultado[arr[i]] = 1;
        }else{
            resultado[arr[i]] = resultado[arr[i]] + 1
        }
    }
    return resultado;
}

console.log(cuentaletras(arr));