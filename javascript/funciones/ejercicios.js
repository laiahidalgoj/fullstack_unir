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