# the dictionaries equal to json in javascript, associative arrays. Remove the position factor for introduce the concept key:value

student = {
    'name': 'Laia Hidalgo',
    'age': 32,
    'email': 'laia@...',
    'status': True
}

print(student['name'])

#getters
print(student.get('age'))

# modify value
student['age'] = 20

print(student)

print('-' * 10)

#itinerate the elements of dictionary
#items() print keu and value of dictionary
for key, value in student.items():
    print(f'{key}: {value}')

print('-' * 10)

#extract keys
for key in student.keys():
    print(key)
    
#extract values
for values in student.keys():
    print(values)

student['direction'] = 'Street number'
print(student)

#remove elements by key
student.pop('direction')
print(student)

#empty dictionary
student.clear()
print(student)

#remove a dictionary
del student