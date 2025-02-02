console.log('soy el hijo padre');

const promise = new Promise((resolve, reject) => {
    console.log('soy el hijo hijo');
    setTimeout(() => {
        console.log('soy el hijo hijo que sigue haciendo cosas');
        resolve() }, 3000)
    });


promise
.then((res)=>{
    console.log('enciendo el airfryer', res)
})
.catch(err=>{
    console.log('guardar el ipad bajo llave', err)
})


// JSON -- convertir texto a objeto - JSON.parse
const text = ['a', 'b', 'c'];
const arr = JSON.parse(text);
console.log(arr);


// OBJETO --> convertir objeto a texto - JSON.stringfy
const alumno = {
    firstName: 'Laia',
    lastName: 'Hidalgo',
}

const json = JSON.stringify(alumno);


//  FETCH
// const pintarPosts = (posts) => {}
//
// fetch('https://jsonblob.com/1332430443403993088')
//     .then(res => res.json())
//     .then(posts => {
//         pintarPosts(posts);
//     })
//
// console.log('finalizado')


// ### ASYNC
console.log('soy hilo principal');

const puertaDiscoteca = async (edad) => {
    return edad >= 18
}

puertaDiscoteca(20)
console.log('soy hilo principal')

// AWAIT ###
const traerDatos = async () => {
    console.log('antes del fetch')
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const photos = await res.json()
    console.log('tras el fetch', photos)
}

traerDatos();