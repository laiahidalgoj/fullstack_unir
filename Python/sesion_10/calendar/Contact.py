class Contact:
    name = '',
    phone = ''

    def __init__(self, name, phone):
        self.name = name
        self.phone = phone

    def show_contact(self):
        print(f'{self.name}: {self.phone}')

    def show_phone(self, name):
        if self.name.lower() == name.lower():
            self.show_contact()
        else:
            print('Invalid contact')