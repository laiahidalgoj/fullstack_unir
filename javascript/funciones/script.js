// FUNCIONES

// función clásica
function puertaDiscoteca(edad){
    const dejoPasar = edad >= 18
    return dejoPasar
}
console.log(puertaDiscoteca(6));

console.log('### FUNCIÓN ANÓNIMA ###')
const puertaDiscoteca2 = function(edad){
    return edad >= 18;
}

console.log(puertaDiscoteca2(99));

console.log('### ARROW FUNCTION ###')
// función nueva 
// cuando solo hay 1 parámetro te puedes ahorrar los ()
// si solo hay una linea de rturn puedes obviar el return
const puertaDiscoteca3 = (edad) => {
    return edad >= 18;
}

console.log(puertaDiscoteca3(54))

// función con mínimo, solo 1 parámetro y 1 return
const puertaDiscoteca4 = edad => edad >= 18;

console.log('### FOR ###')

const fila = [20, 16, 35, 46]
for(let i = 0; i < fila.length; i++){
    console.log(puertaDiscoteca(fila[i]))
}

console.log('### FOREACH ###')

fila.forEach(function(fil){console.log(fil)})

console.log('### PARÁMETROS ###')
// los parámetros van en orden
const multiplicando = (num1, num2) => {
    return num1 * num2;
}

console.log(multiplicando(2, 5))

