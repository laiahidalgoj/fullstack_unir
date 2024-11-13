class Task{

    constructor(title){
        this.title = title;
        this.complete = false;
    }

    viewTask(){
        let view = `${this.title}: ${
      this.complete ? "Tarea completada" : "Tarea incompleta"
    }`;
        console.log(view);
        console.log('________');
    }

    completeTask(){
        this.complete = true;
    }
}

module.exports = Task;