# i want know how much odd numbers are up to number
counter = 0
number = 100
for i in range(0, 101):
  if i % 2 != 0:
    continue
  counter+=1

print(counter)