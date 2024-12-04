let age = 4;

if(typeof(age) != typeof(1)){
    console.log('Invalid input');
    return;
}

let message = (age >= 18 ? 'You can entry' : 'Don\'t pass');


/*if(age >= 18){
  message = 'You can enter the disco';
}else if(age < 18){
  message = 'You can\'t enter the disco';
}else{
  message = 'Invalid input';
}*/

console.log(message);