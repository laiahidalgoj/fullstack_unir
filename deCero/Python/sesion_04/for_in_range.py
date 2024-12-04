#for range count from initial value to final value without add final value.

# I want count from 1 to 10

for i in range(10):
  print(i)

print('-------')
# I want count from 10 to 30

for i in range(10, 31):
  print(i)

print('-------')
# I want count from 10 to 500 by 5

for i in range(10, 501, 5):
  print(i)

print('-------')
# I want count from 1 to 1000 only odd

for i in range(1, 1001):
  if i % 2 == 0:
    print(i)
    