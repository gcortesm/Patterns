
var repoTask =require('./repoTask');

class task {
    constructor(name,idUser,descrip){
        this.name=name;
        this.idUser=idUser;
        this.descrip=descrip;
    }

    toAssing(id){
        this.idUser=id;
    }

    save(){
        repoTask.save(this);
    }

    //Other methods, ignore


}

module.exports=task;