// los interfaces son un contrato, estoy definiendo los elementos de objeto. objetos literales - JSON - objetos propios Class
// cuando usamos 'any' significa que no sabemos qué tipo de dato se utilizará
var nombre = '';
// un tipo de dato u otro
var nombre2;
var usuario = [
    { id: 1, nombre: 'Laia', edad: 33 },
    { id: 2, nombre: 'Ernesto', edad: 41 },
    { id: 3, nombre: 'Fran', edad: 32 },
    { id: 4, nombre: 'Maria', edad: 24 }
];
// ## CLASES ##
var Tarea = /** @class */ (function () {
    function Tarea(title, priority) {
        // sin let es una propiedad
        this.title = '';
        this.priority = 0;
        this.title = title;
        this.priority = priority;
    }
    Tarea.prototype.printTask = function () {
        return "".concat(this.title, " - ").concat(this.priority);
    };
    return Tarea;
}());
var tarea = new Tarea('Estudiar Angular', 1);
console.log(tarea.title);
