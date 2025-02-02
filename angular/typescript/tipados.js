// typescript tiene tipado estático - fuerte
var nombre = 'Laia Hidalgo';
var edad = 33;
var estado = true;
console.log(typeof nombre);
// ### TIPAR ARRAY ###
// opción 1.
var nombres = ['Juan', 'Pepe', 'Laia', 'Maria'];
// opción 2.
var numeros = [1, 2, 3, 4, 5];
// ## TIPAR FUNCIONES ##
// tipar parámetros de entrada y salida
function sumar(n1, n2) {
    return n1 + n2;
}
console.log(sumar(4, 6));
var restar = function (n1, n2) {
    var resultado = n1 - n2;
    return "el resultado de restar ".concat(n1, " y ").concat(n2, " ser\u00EDa ").concat(resultado);
};
console.log(restar(4, 2));
