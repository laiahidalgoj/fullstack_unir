# lambda functions
# if a function has a more than one action can't be lambda

def get_name_complete(name, lastname):
  return f'{name} {lastname}'

name = get_name_complete('Laia', 'Hidalgo')
print(name)

#lambda function to eliminate the identation for execute the function in a only line avoiding scope

# name y surname (are the parameters)
lambda_name = lambda name, surname: f'{name} {surname}'
my_name = lambda_name('Laia', 'Hidalgo')
print(my_name)

subtract = lambda n1, n2, n3: print(n1 - n2 - n3)
subtract(12, 5, 3)

#convert subtract function in lambda
def sub(n1, n2):
  return n1 - n2 if n1 >= n2 else n2 - n1

subt = lambda n1, n2: print(n1 - n2) if n1 >= n2 else print(n2 - n1)

subt(2, 15)