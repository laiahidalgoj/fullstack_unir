let texto = 'abcedario';

let patron = /abc/ /* esto es una expresión regular */ 

console.log(patron.test(texto));

// expresión regular para validar email

let expEmail = /\S+\@\S+\.\S+/
let email = 'laia@unir.es'

console.log(expEmail.test(email));

// /^\w +\@\[a - zA - Z_] +?\.[a - zA - Z]{ 2, 3 } $ /

/*

## / - Indica inicio de expresión string
## \S - Indica que se espera un caracter diferente a un espacio en blanco
## \s - Indica un espacio en blanco
## + - Indica que ese caracter debe existir una o más veces
## \@ - Indica el caracter en sí a buscar: una arroba
## \. - Indica un caracter: un punto
## / - Indica el final de la expresión regular

*/

let telefono = '093-844-32-32'
let expTelefono = /^\d{2,3}-\d{3}-\d{2}-\d{2}/

console.log(expTelefono.test(telefono));

/*

/ - Indica inicio de expresión string
^ - Indica que la expresión regular se aplica a la totalidad del string
\d - Indica que se espera un caracter de dígito
{10} - Indica que de ese caracter debe haber un patrón de repetición: diez caracteres
[A - Z][0 - 9] - Indica que se espera un rango de caracteres en mayúsculas, entre la A y la Z o indica que espera cualquier número del 0 al 9
{1,2} - Indica que de ese caracter debe haber un patrón de repetición: entre 1 y 2 caracteres
[gmail, hotmail]- Indica que ese conjunto de caracteres tiene dos posibilidades y se escribe tal cual
/ - Indica el cierre de la expresión regular


PÁGINAS RECOMENDADAS EXPRESIONES REGULARES 

 * https://cheatography.com/davechild/cheat-sheets/regular-expressions/
 * https://www.linkedin.com/pulse/vitamina-tus-scripts-con-expresiones-regulares-mario-gir%C3%B3n-mart%C3%ADn/?trk=articles_directory&originalSubdomain=es
 * regexlib.com
 * https://ihateregex.io  
 * https://regex101.com/library
*/