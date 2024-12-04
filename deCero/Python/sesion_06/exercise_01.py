#Encapsulate in function calculate the average the arythmetic of 4 numbers received by parameters
# Solve the function separate in 3 functions.
    
def sum(n1, n2, n3, n4):
  result_sum = n1 + n2 + n3 + n4
  return result_sum

def divide(dividend, divider):
  return dividend / divider

def average(n1, n2, n3, n4):
  result_sum = sum(n1, n2, n3, n4)
  result = divide(result_sum, 4)
  return result

print(average(9,9,5,48))
