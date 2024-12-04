class Person:
    name = ''
    lastname = ''
    age = 0
    status = True

    #method __init()__ is not obligatory and his use is to give values at properties
    # this functions receives as a minimum a parameter _self (this in javascript)
    # All functions must be receives this parameter

    def __init__(self, name, lastname, age, status):
        self.name = name
        self.lastname = lastname
        self.age = age
        self.status = status

    def speak(self, text):
        print(f'{self.name} say: {text}')
    
    #setter it's a function created exclusive for modify a property of object
    def setAge(self, age):
        self.age = age

    #getters it's a function that allows extraer information of property
    def getAge(self):
        print(f'{self.name} has {self.age} years old')

# inicialization 
laia = Person('Laia', 'Hidalgo', 32, True)
ernesto = Person('Ernesto', 'Gámez', 40, True)

laia.speak('Hello by Python world')
laia.setAge(33)
laia.getAge()
