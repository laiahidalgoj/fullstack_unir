// vamos a almacenar en una variable la edad de una persona
// vamos a hacer de porteros de discoteca, si somos mayores de edad, entramos y sino, no.

let age = 20;
let cutAge = 21;

if(typeof(age) != typeof(1)){
    console.log('Invalid input');
    return;
}

if(age >= cutAge){
  message = 'welcome';
}else if(age >= 0 && age < cutAge){
  message = 'You can\'t enter the disco';
}else{
  message = 'Invalid input';
}

console.log(message);