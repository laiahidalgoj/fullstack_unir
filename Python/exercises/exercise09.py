#Imprimir una Pirámide
#Escribe un programa que use bucles para imprimir una pirámide de asteriscos con la altura que el usuario indique. Por ejemplo, si el usuario ingresa 5, debería ver:

def ejercicio09():

  height = int(input('Indicates the height of the pyramid: '))
  
  for i in range(height):
    spaces = ' ' * (height - i - 1)
    asterisk = '*' * (2 * i + 1)

    print(spaces + asterisk)
  
