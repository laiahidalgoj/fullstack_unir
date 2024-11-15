
//import Task.js
const Task = require('./Task')
const tasks = [];

//add tasks
function addTask(title, list){
    newTask = new Task(title);
    list.push(newTask);
    console.log(list);
    console.log('------');
}

//show all tasks
function viewTasks(list){
    for (let task of list){
        task.viewTask();
    }
}

//complete task
function completeTask(title, list){
    for(let task of list){
        if(task.title.toLowerCase() === title.toLowerCase()){
            task.completeTask()
            console.log('The task has been completed.')
        }
    }
}

//remove task 'splice()'
function removeTask(title, list){
    let position = -1;
    for(let i = 0; i < list.length; i++){
        if(list[i].title === title){
            position = i;
            break;
        }
    }

    if(position !== -1){
        addTask(title, fn.tasks);
        console.log('Task has been removed.');
    }else{
        console.log('Tasks not found.')
    } 
}

//modify task
function modifyTask(title, newTitle, list){
    let position = -1;
    for(let i = 0; i < list.length; i++){
        if(list[i].title === title){
            position = i;
            break;
        }
    }

    if(position !== -1){
        list[position].title = newTitle;
        console.log('Task has been modified', list[position]);
    }else{
        console.log('Tasks not found.')
    } 
 
}

module.exports = {addTask, viewTasks, completeTask, removeTask, tasks, modifyTask};