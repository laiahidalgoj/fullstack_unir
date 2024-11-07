#imprimir el factorial de un número
# el factorial de 5 , se ha de multiplicar 5 * 4 * 3 * 2 * 1 = 120

number = 5
counter = 1

for i in range(1, number+1):
  counter*=i
print(counter)
