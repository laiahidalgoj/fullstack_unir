#dictionaries lists

products = [
    {
        'id': 1, 
        'title': 'Orange',
        'price': 1.85,
        'amount': 7
    },
    {
        'id': 2, 
        'title': 'Apple',
        'price': 2.85,
        'amount': 10
    },
    {
        'id': 3, 
        'title': 'Pineapple',
        'price': 3.95,
        'amount': 5
    },
    {
        'id': 4, 
        'title': 'Banana',
        'price': 2.53,
        'amount': 8
    },
    {
        'id': 5, 
        'title': 'Strawberry',
        'price': 4.60,
        'amount': 20
    },
]

# read a product
#print(products[1]['title'])

    
# print products
def printAllProducts(list):
    for product in list:
       print(
            f"""{product['id']} - {product['title']}: {round(product['price'] * product['amount'], 2)}"""
        )

# add products
def insertProduct(id, title, price, amount, list):
    newProduct = {
        'id': id,
        'title': title,
        'price': price,
        'amount': amount
    }
    list.append(newProduct)

insertProduct(6, 'Coca-cola', 5.99, 5, products)
printAllProducts(products)

def filterByPrice(priceMin, priceMax, list):
    filterList = []
    for product in list:
        if product['price'] >= priceMin and product['price'] <= priceMax:
            filterList.append(product)

filterByPrice(3, 10, products)