// mostrar numros múltiplos entre 2 números dados

const inicio = 33
const fin = 56

for(let i = inicio; i <= fin; i++){
    if(i % 3 === 0){
        console.log(i)
    }
}


const arr = [12, 21, 399, 4, 63, 766]
let acc = 0
for (let i = 0; i < arr.length; i++){
    acc = acc + arr[i]
}

console.log('la suma es: ', acc)

// escribir tabla de multiplicar del 1
for (let i = 1; i <= 10; i++){
    for(let j = 1; j<=10;j++){
        console.log(j + 'x' + i)
    }
}

//encontrar el máximo de un array
const array = [999, 3, 43, 87, 291]
let max = 0
for (let i = 0; i <= array.length;i++){
    if(max < array[i]){
        max = array[i] 
    }
}
console.log(max)

//encontrar el mínimo de un array
const arr4 = [-999, -3, -43, -87, -291]
let maximum = Number.NEGATIVE_INFINITY
for (let i = 0; i <= arr4.length;i++){
    if(maximum < arr4[i]){
        maximum = arr4[i] 
    }
}
console.log(maximum)

// Buscar número de un array
const num = 33
const arr5 = [34, 55, 33, 4, 66]
let i = 0
let encontrado = false

while(i < arr5.length && !encontrado){
    if(arr5[i] === num){
        encontrado = true
    }
    i++
}
console.log(encontrado)