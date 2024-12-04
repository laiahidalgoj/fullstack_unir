const a = 32
const b = 'holaaaa'
const c = true
const d = undefined
const e = null

const array = ['Lucas', 'Jorge', 'Rodrigo']

const alumno = {
	firstName: 'Lucas',
    lastName: 'Vicente',
  	notas: [10,7,2]
}

// Tipado débil -- una variable puede pasar de número a cadena de texto, pero un lenguaje de tipado fuerte como Java, no se podría hacer.
// Tipado débil -- una variable puede pasar de número a cadena de texto, pero un lenguaje de tipado fuerte como Java, no se podría hacer.
let f = 3;
f = '44';

console.log(alumno.firstName)

// #### pregunta entrevista técnica nivel mid / senior ####
// los tipos primitivos como un número o cadena de texto, guarda los datos en "cajas"
// los tipos complejos como un objeto no guarda datos sino que guarda la localización de la memoria, la manera de llegar a el objeto (puntero)


const alumno1 = {
    firstName: 'Laia',
    lastName: 'Hidalgo'
}

const alumno2 = alumno1
alumno2.firstName = 'Pepe' //tanto el alumno1 como el alumno2 es 'Pepe'

console.log(alumno1.firstName)

// || , & , !

// IMC = peso / altura(m)^2
const peso = 100
const altura = 1.8
const imc = peso / (altura**2)
console.log(imc)

// caja registradora
//3 articulos
// 10% dto
// 21% IVA
const gastosenviogratis = 30
const articulo1 = 33
const articulo2 = 4
const articulo3 = 3
const iva = 0.21
const descuento = 0.1

const total = articulo1 + articulo2 + articulo3
const totaldescuento = total - (total * descuento)
const totalfinal = totaldescuento + (totaldescuento * iva)

console.log(totalfinal)
console.log('envío gratis:', totaldescuento > gastosenviogratis)

