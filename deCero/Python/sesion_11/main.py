import functions.functions as fn


def main():
    print('''### Welcome to task manager ###
          
          [1]. Add task.
          [2]. Show tasks.
          [3]. Complete tasks.
          [x]. Exit
          ''')
    
    option = input('Tell me an option: ')
    
    if(option == '1'):
        # add task
        title = input('Add a task: ')
        fn.addTask(title, fn.tasks)
        main()
    elif(option == '2'):
        #show all tasks
        fn.showAllTasks(fn.tasks)
        main()
    elif(option == '3'):
        title = input('What tasks do you want? ')
        fn.completedTask(title, fn.tasks)
        main()
    elif(option == 'x'):
        print('See you soon')
    else:
        print('Invalid')
        main()



main()