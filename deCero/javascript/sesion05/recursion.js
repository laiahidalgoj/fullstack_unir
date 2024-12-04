let sum = 0;

function suma(sum){
  // random numbers between 0 to 10
  const randomNumber = Math.random()*2;
  if(randomNumber >= 0 && randomNumber <= 1.75){
    sum += randomNumber
    suma(sum);
  }else{
    console.log('Ha salido cero');
    console.log(sum);
  }
}

suma(sum)