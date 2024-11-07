// scar por pantalla el factorial de un número
//el factorial de 5 , se ha de multiplicar 5 * 4 * 3 * 2 * 1 = 120

let number = 5;
let counter = 1;

for(let i = 1; i <= number; i++){
  counter*=i;
}
console.log(counter);