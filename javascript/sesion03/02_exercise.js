// NaN es una funcuón que si el número que le paso no es un número devuelve true cuando intento convertir una cadena de txto en número, me dice qe es un NaN (Not a Number)

let number = 12

if( isNaN(number)){
  console.log('No es un número')
}else if(typeof number === 'number' && number % 3 === 0){
  console.log('this number is divisible by 3 and it\'s a number')  
  }else if (numero % 3 !== 0){
  console.log('no')
  }
