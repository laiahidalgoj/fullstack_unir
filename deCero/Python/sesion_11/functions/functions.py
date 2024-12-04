from .task import Task

tasks = []

def addTask(title, list):
    newTask = Task(title)
    list.append(newTask)


def showAllTasks(list):
    for task in list:
        print('.........')
        task.showTask()


def completedTask(title, list):
    for task in list:
        if task.title == title:
            task.taskCompleted()