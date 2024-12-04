#Escribe un programa que pida al usuario un número y luego imprima la tabla de multiplicar de ese número (por ejemplo, si ingresa 5, debería imprimir 5 x 1 = 5 hasta 5 x 10 = 50)

def ejercicio05():

  number = int(input('Write a number from 1 to 10: '))

  for i in range(0, 11):
    print(f'{number} * {i} = {number*i}')