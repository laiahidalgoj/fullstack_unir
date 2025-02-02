// un decorador es una función que se aplica antes de una propiedad (variable), función o clase.
// el objetivo es decorar a lo que precede, poner bonito o añadir funcionalidad a algo que ya tiene.

function miDecorador(constructor: Function){
    console.log('el decorador se ha ejecutado');
}

@miDecorador
class miClase {
    nombre: string = '';

    constructor(name: string) {
        this.nombre = name;
        console.log('Bienvenida ' + this.nombre)
    }
}

const clase = new miClase('Laia Hidalgo');