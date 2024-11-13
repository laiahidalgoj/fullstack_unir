// import prompt-sync
const prompt = require("prompt-sync")();
const fn = require('./functions/functions')
       
// let number = prompt('tell me a number: ')
// console.log(number);
// console.log(typeof number);

// build an app that allow give tasks and manage them, add, show, complete, and remove 
// (CRUD) C- create R- Read U- Update D- Delete



function main() {
    let option = '';
    
    console.log(`Welcome to task manager
    Choose an option:
    [1]. Add task
    [2]. Show all tasks
    [3]. Complete task
    [4]. Remove task
    [x]. Exit
    `);

    option = prompt('Choose an option: ');
    
    if(option === '1'){
        //add task
        let title = prompt('Add a task: ');
        fn.addTask(title, fn.tasks);
    }else if(option === '2'){
        //show all
        fn.viewTasks(fn.tasks);
    }else if(option === '3'){
        //complete tasks
        let title = prompt('Tell me the title that you want complete: ');
        fn.completeTask(title, fn.tasks);
    }else if(option === '4'){
        //remove tasks
        let title = prompt('Tell me the title that you want remove: ')
        fn.removeTask(title, fn.tasks);
    }else if(option === 'x'){
        console.log('See you soon');
    }else{
        console.log('Invalid option')
    }

    if(option !== 'x'){
        // recursivity a function thats callback
        main()
    }
}

main();