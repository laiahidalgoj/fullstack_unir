// typescript tiene tipado estático - fuerte

let nombre: string = 'Laia Hidalgo'
let edad: number = 33
let estado: boolean = true

console.log(typeof nombre)

// ### TIPAR ARRAY ###

// opción 1.
const nombres: string[] = ['Juan', 'Pepe', 'Laia', 'Maria']

// opción 2.
const numeros: Array<number> = [1, 2, 3, 4, 5]

// ## TIPAR FUNCIONES ##
// tipar parámetros de entrada y salida

function sumar(n1: number, n2: number): number {
    return n1 + n2
}

console.log(sumar(4,6))

const restar = (n1: number, n2: number): string => {
    let resultado: number = n1 - n2;
    return `el resultado de restar ${n1} y ${n2} sería ${resultado}`
}

console.log(restar(4,2))
