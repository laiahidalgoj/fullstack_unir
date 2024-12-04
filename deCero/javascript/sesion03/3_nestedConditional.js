// Nested conditional

let note = -2.6;
let message = '';

if(note >= 0 && note <= 5){
  message = 'You failed..';
}else if(note >= 5 && note <= 10){
  message = 'You passed!';
}else{
  message = 'Invalid note';
}

console.log(message);