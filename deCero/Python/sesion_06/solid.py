#SOLID a function must be have a unic responsability

def sum(n1, n2):
  return n1 + n2

def sub(n1, n2):
    return n1 - n2 if n1 >= n2 else n2 - n1

def mult(n1, n2):
  return n1 + n2

def div(n1, n2):
  return n1 + n2

def calculate(n1, n2, type):
  result = 0
  if (type == 1):
    result = sum(n1, n2)
  elif(type == 2):
    result = sub(n1, n2)
  elif(type == 3):
    result = mult(n1, n2)
  elif(type == 4):
    result = div(n1, n2)
  else:
    result = 'Not allowed calculate'
  print(f'Result is {result}')

calculate(30, 5, 2)