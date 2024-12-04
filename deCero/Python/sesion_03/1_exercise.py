# Comprobar que un número que me piden por pantalla es divisible por 3 y es un número

number = float(input('Tell me a number: '))

message = ''

'''if number % 3 == 0:
  message = 'This number is divisible for 3'
elif number % 2 == 0:
  message = 'This number isn\'t divisible for 3'
else:
  message = 'This is not divisible between 3 and 2'

print(message)'''

try:
    
    if type(number) == float and number % 3 == 0:
        print(f'The {number} is divisible by 3 and it\'s a number')
    else:
        print(f'The {number} isn\'t divisible')
except ValueError:
    print('Invalid input')