#Sumar Números hasta Cero
#Crea un programa que pida al usuario números continuamente hasta que ingrese 0. El programa debe sumar todos los números ingresados (excluyendo el 0 final) y mostrar la suma al terminar.

def ejercicio07():

  num = ''
  counter = 0

  try:
    while num != 0:
      num = int(input('Add a number: '))
      counter+=num
  except ValueError:
    print('This not a number')
    

  print(f'The sum of numbers is: {counter}')
    