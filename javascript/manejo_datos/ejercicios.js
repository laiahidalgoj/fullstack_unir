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
]

console.log('suma todos los números del array');
// suma todos los números del array
let result = listaUsuarios.reduce((acc, {edad}) => {
    return acc + edad
},0)

console.log(result)

console.log('devuelve todos los nombres del array');
// devuelve todos los nombres del array
let nombres = listaUsuarios.map(usuario => {
    return usuario.nombre
})

console.log(nombres);


console.log('busca los usuarios que sean piscis');
// busca los usuarios que sean piscis
let zodiac = listaUsuarios.filter(usuario => {
    return usuario.signoZodiaco === 'Piscis'
})

console.log(zodiac);

console.log('buscar si ha venido tal persona');
// buscar si ha venido tal persona
let asistencia = listaUsuarios.find(usuario => {
    return usuario.nombre === 'Ernesto'
})

console.log(asistencia);

const csv = 'Laia; Hidalgo Jiménez; 32';
const [nombre, apllidos, edad] = csv.split(';')
console.log(nombre);

//const frase = 'podríamos hacer algun ejemplo de contar veces'
// crea una función que encuentre la cadena de texto más larga

// const palabramaslarga = (texto) => {
//     const palabras = texto.split(' ')

    //let lamaslarga = ''
    //palabras.forEach(palabra => {
    //     if(lamaslarga.length < palabra.length){
    //         lamaslarga = palabra
    //     }
    //     console.log(palabra.length)
    // })
    // return lamaslarga

    // lo mismo con reduce
const frase = 'podríamos hacer algun ejemplo de contar veces'
const palabramaslarga = (texto) => {
    const palabras = texto.split(' ');

    palabras.reduce((acc, palabra) => {
        return acc.length < palabra.length ? palabra : acc
    })
}
console.log(palabramaslarga(frase));

// otro
const diccionario = {
    '039': 'Golden Telecom',
    '050': 'MTS'
}

const detectorOperador = (numerotelefono) => {
    const prefijo = numerotelefono.slice(0,3)
    if(typeof diccionario[prefijo] ===  'undefined'){
        return 'Operador no encontrado'
    }else{
        return diccionario[prefijo]
    }
}

console.log(detectorOperador('050 123 4 789'))


// operador opcional 

const alumno = {
    firstName: 'Félix',
    lastName: 'Blanco',
    address: {
      street: 'C/Ninguna',
      streetNumber: '1',
      postalCode: '28001',
    }
  }
  
  const alumno2 = {
    firstName: 'Félix',
    lastName: 'Blanco',
    address: {
      street: 'C/Ninguna',
      streetNumber: '1',
    }
  }
  
  const alumno3 = {
    firstName: 'Juan',
    lastName: 'Blanco',
  }
  
  console.log(alumno.address?.postalCode)

