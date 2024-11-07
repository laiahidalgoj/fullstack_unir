#Usa un bucle while que le pida al usuario una contraseña hasta que la escriba correctamente. Puedes definir la contraseña como "secreto".

def ejercicio06():
  
  password = 'secret'
  
  user_pass = ''
  
  while(password != user_pass):
    user_pass = input('Enter the password: ')
  
  print('Correct password')
    

