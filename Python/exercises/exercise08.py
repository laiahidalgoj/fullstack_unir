#Adivina el Número
#Define un número secreto y pide al usuario que intente adivinarlo. Usa un bucle while para continuar hasta que el usuario acierte, y da pistas si el número es mayor o menor.

def ejercicio08():

  secret_num = 456
  num = ''

  try:
    while num != secret_num:
      num = int(input('Enter a number to guess the secret number: '))
      if num < secret_num:
        print('The number is higher.')
      elif num > secret_num:
        print('the number lower ')
      else:
        print('This is the secret number!')
  except ValueError:
    print('This is not a number')
    