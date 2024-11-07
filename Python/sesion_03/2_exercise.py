age = 25

if type(age) is not type(1): 
    print('Invalid type')

print('You can enter') if age >= 18 else print('You can\'t enter')

edad = 21
edadCorte = 18

if 0 <= edad < edadCorte:
    print('Un vasito de leche y a la cama')
elif edadCorte <= edad:
    print('Bienvenido')
else:
    print('número no válido')
    