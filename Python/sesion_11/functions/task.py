
class Task:
    title = ''
    isCompleted = False


    def __init__(self, title):
        self.title = title
        
    def showTask(self):
        print(f'{self.title}: {"Completed" if self.isCompleted == True else "Incompleted"}')


    def taskCompleted(self):
        self.isCompleted = True