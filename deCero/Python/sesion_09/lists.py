# the list are data set almost always the same type.
# a list is mutable

names = ['Carlos', 'Maria', 'Javier', 'Ernesto', 'Joaquín']

print(len(names))
print(names[2])

# go the lists
for name in names:
    print(name)
else:
    print('I\'m finished my loop')

names[1] = 'Laia'
print(names)

# to add an elements, only one
names.append('Leticia')
print(names)

# add an element in any position relocating the others elements
names.insert(2, 'Marta')
print(names)

# add several elements
names.extend(['Juan', 'Juanan', 'Rodrigo'])
print(names)

# remove an element by content
names.remove('Marta')
print(names)

# remove the end element and also remove by position
names.pop() #Rodrigo
names.pop(2) #Javier
print(names)

print(names[1:5]) #Laia, Ernesto, Joaquín, Leticia

## empty the lists
names.clear()
print(names)

##remove the list
del names