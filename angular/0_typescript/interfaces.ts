// los interfaces son un contrato, estoy definiendo los elementos de objeto. objetos literales - JSON - objetos propios Class

// cuando usamos 'any' significa que no sabemos qué tipo de dato se utilizará
let nombre: any = '';

// un tipo de dato u otro
let nombre2: string | number;

// ## INTERFACES ##
// lo que hace es obligar a la clase para tener una funcionalidad mínima
// los interfaces se crean con la I delante y siempre en singular porque representa un elemento y no un array
interface IUsuario {
    id?: number; //si pones interrogante quiere decir que no es obligatorio
    nombre: string;
    edad: number;
}

const usuario: IUsuario[] = [
    { id: 1, nombre: 'Laia', edad: 33 },
    { id: 2, nombre: 'Ernesto', edad: 41 },
    { id: 3, nombre: 'Fran', edad: 32 },
    { id: 4, nombre: 'Maria', edad: 24 }
]

// una propiedad privada no puede estar en la interfaz
interface ITarea {
    priority: number;
    printTask(): string;
}

// ## CLASES ##
class Tarea implements ITarea {
    // sin let es una propiedad
    private title: string = ''
    priority: number = 0;

    constructor(title: string, priority: number) {
        this.title = title;
        this.priority = priority;

    }

    printTask(): string {
        return `${this.title} - ${this.priority}`;
    }

    // getter - permite leer un elemento private
    getTitle(): string {
        return this.title;
    }

    // setter - permite modificar una propiedad private
    setTitle(newtitle: string): void {
        this.title = newtitle;
    }
}

let tarea = new Tarea('Estudiar Angular', 1);
console.log();