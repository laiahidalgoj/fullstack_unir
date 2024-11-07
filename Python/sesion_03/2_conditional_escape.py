# conditional escape sequence

#control de producto, dime si tienes un producto que valga 100 o menos y sea la marca xiaomi

price = 150
brand = 'xiaomi'

if price <= 100 and brand == 'xiaomi':
  print('We found what you’re looking for')
else:
  print('Don\'t have what you\'re looking for')
