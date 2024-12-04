
def sum(*numbers):
  #numbers equals a tuple (1,2,3,4,5,6)
  sum = 0

  #for i in range(0, len(numbers)):
    #sum = sum + numbers[i]
  #print(sum)

  #best option
  for number in numbers:
    sum = sum + number
  print(sum)

sum(1,2,3,4,5,6)