#the recursion is a function call also (asimisma) and avoiding loops

#i want calculate the sum of all numbers introduced by display that are different to 0.
# when introduce a 0 stops 

summation = 0
def sum(summation):
  number = float(input('Tell me a number: '))
  if(number != 0):
    summation+= number
    sum(summation)
  else:
    print('You put 0 an print the sum')
    print(summation)

sum(summation)
