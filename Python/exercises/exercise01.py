# Vamos a hacer varios ejercicios en los que necesitemos usar loops "bucles"

# Dada una cadena, encontrar la letra que se pase por input, si existe decir que existe y dejar de iterar. Si no existe devolver un "No existe". Ejemplo:

# cadena = "el amor de mi vida esta detrás mio"
# input = r
# resultado: La letra existe.

def ejercicio01(): 
    sentence = 'El amor de mi vida esta detras mio.'
    counter = 0
    
    word = input('Write the character that you want to count: ')
    
    for i in sentence:
        if i == word:
          counter+=1
    print(f'The character exists {counter} times')