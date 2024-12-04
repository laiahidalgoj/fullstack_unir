# i have a price of product and i want have the diferent value of tax about this product
# in spain there are 3 types of tax 4%, 10% and 21%

price = 200

taxes = [4, 10, 21]

for i in taxes:
  print(f'The price for tax {i} is: {(price * i) /100}')