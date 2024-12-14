// destructuración
console.log('### DESESTRUCTURACIÓN ###')

const alumno = {
    firstName: 'Laia',
    lastName: 'Hidalgo'
}

//destructuración en una función
const saludo = ({firstName, lastName}) => {
    console.log('Hola ' + firstName + ' ' + lastName)
}

saludo(alumno);

//const firstName = alumno.firstName
//const lastName = alumno.lastName

// la desestructuración hace lo mismo que lo de arriba 
const {firstName, lastName} = alumno

// ahorras tener que poner 'alumno.firstName'
console.log('Hola ' + firstName + ' ' + lastName)

const arr = ['Rodrigo', 'Sergio', 'Mario']
const [alumno1, alumno2, alumno3] = arr

console.log(alumno1)

console.log('### TEMPLATE STRING ###')
console.log(`Hola ${firstName} ${lastName}`)

console.log('### SPREAD OPERATOR ###')
const arr1 = [1,2,3,4,]
const arr2 = [6,7,8,9]
const arr3 = [...arr1, ...arr2]
console.log(arr3)

console.log('### REST OPERATOR ###')
const suma = (...operadores) => {
    let acc = 0
    for(let i = 0; i<operadores.length; i++){
        acc = acc + operadores[i]
    }
    return acc
}

const arr5 = [6,7,9,9]
console.log(`suma del rest operator: ${suma(...arr5)}`)                                                                                           
console.log('### HOISTING ###') 
// no se puede llamar a una variable antes de darle valor.                        
//console.log(d);
//let d = 3;