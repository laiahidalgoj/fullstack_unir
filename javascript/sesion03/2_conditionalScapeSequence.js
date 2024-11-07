// simple conditional with escape sequence

let note = 7;
let message = '';

// bad use of a conditional with escape sequence
if(note >= 5 && note <= 10){
  message = 'you passed!';
}else{
  message = 'you are suspended'
}
console.log(message);

// correct use
let registered = true;
if(registered === true){
  console.log('Welcome!');
}else{
  console.log('You don\'t have permisson to login')
}