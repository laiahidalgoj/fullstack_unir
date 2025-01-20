// el navegador solicita un https://.... una web y devuelve un documento html
// DOM es la representación en memoria de un documento html
// el código que se ve en el navegador es el DOM y nos permite manipularlo en directo
// DOMContentLoaded es un evento que se dispara cuando el documento html ha sido cargado completamente

console.log('Hola mundo');

// todo document tiene que ir dentro de un DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {

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

// ## EVENTOS
const saludobtn = document.querySelector('.saludobtn');
const titulo2 = document.querySelector('.segundo_titulo');
let acc = 0;
saludobtn.addEventListener('click', (event) => {
    console.log(event); // muestra el evento
    acc = acc + 1;
    titulo2.textContent = 'Hola desde botón h2' + ' ' + acc;
    })

//Accordion
const accordion = document.querySelector('.accordion');
const accordionBtn = document.querySelector('.accordion__button');
accordionBtn.addEventListener('click', () => {
    accordion.classList.toggle('accordion--open')
})


// Saludar nombre
const saludarBtn = document.querySelector('.saludar-boton');
const saludarNombre = document.querySelector('.saludar-nombre');
const saludarResultado = document.querySelector('.saludar-resultado');

saludarBtn.addEventListener('click', () => {
    const nombre = saludarNombre.value
    saludarResultado.innerHTML = `Hola ${nombre}`
    //innerHTML solo poner cuando estes completamente seguros de qué contenido vamos a escribir porque es susceptible de ataques de seguridad

})

// toDo list
const todoTarea = document.querySelector('.todo-tarea');
const todoBoton = document.querySelector('.todo-boton');
const todoLista = document.querySelector('.todo-lista');

todoBoton.addEventListener('click', () => {
    const nuevaTarea = todoTarea.value
    if(nuevaTarea !== ''){
    const nuevoLi = document.createElement('li')
    nuevoLi.textContent = todoTarea.value
    todoLista.appendChild(nuevoLi)  
    todoTarea.value = ''
}
})



// ## Document ready
// ## Manipulación del DOM 
// ## Manipulación de elementos
// ## Intervalos y timeout

const saludar = () => {
    console.log('ey');
}

console.log('antes del timeout');
setTimeout(saludar, '2000'); 
console.log('después del timeout');

// setInterval(saludar, '2000'); // se ejecuta cada 2 segundo de forma indefinida - 'podria utilizarse para un servidor'


// ## Formularios
const enlaceGoogle = document.querySelector('.enlace-google')
    enlaceGoogle.addEventListener('click', (event) => {
        event.preventDefault(); // para por defecto el comportamiento
        console.log('Ve a google');
    })

    const unFormulario = document.querySelector('.un-formulario')
    unFormulario.addEventListener('submit', (event) => {

       if (unFormulario.querySelector('#name').value === '') {
           event.preventDefault(); // permite parar el evento por defecto
       }

    })


//## Trabajo con los objetos propios document, window, history, location, localStorage, cookies



}); // fin del DOMContentLoaded




