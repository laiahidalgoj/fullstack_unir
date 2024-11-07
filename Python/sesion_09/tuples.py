# tuple in python is a list of immutable data, you can't add and remove. 

tuple = ('Juan', 42, True, 0, 'Laia', 32, 65)
config = ('Juanito', 'awaqgsgksngkf', 'admin')

print(config[0]) #Juanito
print(config[-1]) #admin, in js is array.at(-1)

# get amount of elements
print(len(tuple))

other_tuple = tuple[1:3] #42, True
print(other_tuple)

print(tuple[0:5:2]) #0 trunx, 5 until doesn't count, 2 every twice
