// el navegador solicita un https://.... una web y devuelve un documento html
// DOM es la representación en memoria de un documento html
// el código que se ve en el navegador es el DOM y nos permite manipularlo en directo
// DOMContentLoaded es un evento que se dispara cuando el documento html ha sido cargado completamente

console.log('Hola mundo');



// todo document tiene que ir dentro de un DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    // debugger;
document.querySelector('h1').textContent = 'Hola mundo desde el DOM';

// ## 1 SELECTORES Y MÉTODOS DE SELECCIÓN
const alumnos = document.querySelectorAll('li');
console.log(alumnos);
// en este caso sobreescribimos el contenido de los alumnos del html
alumnos.forEach(alumno => {
    alumno.textContent = 'Alumno sobreescrito desde JS'
});

// 1.1 selector de un elemento con clase alumno1
const alumno1 = document.querySelector('li.alumno1');
console.log(alumno1.textContent = 'Alumno 1');

// 1.2 selector por un id
document.getElementById('cabecera');
document.querySelector('#cabecera'); // es lo mismo


// 1.3 selector por clase
document.getElementsByClassName('fruta'); // devuelve un array
const fruta = document.getElementsByClassName('fruta')[0]; // devuelve el primer elemento
console.log(fruta.textContent = 'Fruta sobreescrita desde JS');

// ## EVENTOS1
const saludobtn = document.querySelector('.saludobtn');
let acc = 0;
saludobtn.addEventListener('click', () => {
    acc = acc + 1;
    console.log('Hola desde el botón' + ' ' + acc);
    });

});

// ## Document ready
// ## Manipulación del DOM
// ## Manipulación de elementos
// ## Intervalos y timeout

//## Trabajo con los objetos propios document, window, history, location, localStorage, cookies

