#Encapsulate in function calculate the average the arythmetic of 4 numbers received by parameters
# Solve the function separate in 3 functions.

numbers = 0
def num(numbers):
  number = int(input('Tell me a number: '))
  for number in numbers:
    numbers += number
print(numbers)
  
    
    
def sum(n1, n2, n3, n4):
  result_sum = n1 + n2 + n3 + n4
  return result_sum

def average(n1, n2, n3, n4):
  result_average = sum(n1, n2, n3, n4) / 4
  return result_average

print(average(4,3,4,5))
