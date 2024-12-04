# Nested conditional

note = 4

message = ''

if note >= 0 and note < 5:
  message = 'You\'re suspended'
elif note >= 5 and note < 6:
  message = 'Enough'
elif note >= 6 and note < 7:
  message = 'Good'
elif note >= 7 and note < 9:
  message = 'Notable!'
elif note >= 9 and note <= 10:
  message = 'Excelent!'
else:
  message = 'Invalid note'

print(message)