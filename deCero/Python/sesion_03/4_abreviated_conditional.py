#Abreviated condicional or ternary operator

price = 200
brand = 'apple'

if price >= 150 and brand == 'xiaomi':
  print('This is that I looking for')
else:
  print('This isn\'t that I looking for')

print('Is that I want') if price >= 150 and brand == 'apple' else print('Ough.. it\'s not that you needed')

# more short
message = ''
message = 'Yes' if price >= 150 and brand == 'apple' else 'No'

print(message)