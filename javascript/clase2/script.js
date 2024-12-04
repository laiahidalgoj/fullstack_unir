console.log('hola mundo desde script.js')

const mayorEdad = 18
const edad =  16
const zapatillas = false
if (!zapatillas && edad >= mayorEdad) {
	console.log('dejo pasar')
}else{
	console.log('no puedes pasar')
}

// ternario
const mensaje = (!zapatillas  && edad >= mayorEdad) ? 'dejo pasar' : 'no puedes pasar'
console.log(mensaje)

const nota1 = 7
const nota2 = 8
const nota3 = 10
const faltaasistencia = false

const aprobado = nota1 >= 5 && nota2 >= 5 && nota3 >= 7 && !faltaasistencia
console.log(aprobado)

// ### bucles ###
//for
for(let i = 1; i <= 10; i++){
    console.log('no volveré a hablar en clase.')
}

//while
let i = 1
while(i <= 10){
    console.log('no volveré a hablar')
    i++
}

//pregunta técnica. diferencia entre for y while
// con for sabes los bucles que hay 
// while no sabes los bucles que hay