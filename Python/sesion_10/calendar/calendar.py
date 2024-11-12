
from Contact import Contact

contacts = []

#SOLID PRINCIPLES
# S - single Responsability
# 0 - 

def addContact(name, phone, list):
   newContact = Contact(name, phone)
   list.append(newContact)
   print('Student registered correctly')

def show_all_contacts(list):
    for contact in list:
        contact.show_contact()

def find_contact(name, list):
    for contact in list:
        contact.show_phone(name)


def main():
    print('Menu: Schedule phone')
    print('-'*30)
    print(''' 
          [1]. Insert contact
          [2]. Show contacts
          [3]. Show contact phone
          [X]. Exit
          ''')
    
    option = input('Choose an option: ')
    if option == '1':
        #insert contact
        contact_name = input('Tell me a name: ')
        contact_phone = input('Tell me a phone: ')
        addContact(contact_name, contact_phone, contacts)
        main()
    elif option == '2':
      #Show all contacts
        show_all_contacts(contacts)
        main()
    elif option == '3':
        #show phone contact
        name = input('Tell me a contact that you want: ')
        find_contact(name, contacts)
        main()
    elif option == 'x':
        print('See you soon')
    else:
        print('Invalid option')
        main()
  
main()