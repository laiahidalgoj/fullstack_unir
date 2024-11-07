## Siguiente ejercicio:
## Dada la misma cadena anterior. conviertela a una sin acentos usando un loop
def Ejercicio02():
  sentence1 = 'El amor de mi vida está detrás mío.'
  
  nueva_sentence = ''
  
  for i in sentence1:
    if i == 'á':
      nueva_sentence += 'a'
    elif i == 'é':
      nueva_sentence += 'e'
    elif i == 'í':
      nueva_sentence += 'i'
    elif i == 'ó':
      nueva_sentence += 'o'
    elif i == 'ú':
      nueva_sentence += 'u'
    else:
      nueva_sentence += i
  
  print(nueva_sentence)