import unicodedata

sentence = 'El amor de mi vida está detrás mío.'
counter = 0
convert_sentence = unicodedata.normalize('NFD', sentence)
new_sentence = ''.join(c for c in sentence if unicodedata.category(c) != 'Mn')
print(new_sentence)
word = input('Write the character that you want to count: ')

for i in new_sentence:
  if i == word:
    counter+=1
print(f'La letra existe {counter} veces')