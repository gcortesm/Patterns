class TaskClass {
    constructor(title,description){
        this.title =title;
        this.description =description;
        this.status ='New';
    }
    inProgress(){
        this.status='In Progress';
    }
    finish(){
        this.status='The task is resolve';
    }
    getStatus(){
        return this.status;
    }
}

module.exports=TaskClass;