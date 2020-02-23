var repoTask=function(){
    //Si tenemos una 
    var db={};

    var save=function (task) {
        console.log('Saving one Task'+task.name);
    }

    var update=function (oldTask) {
        console.log('Update one Task' + oldTask.name);
    }
    return{
        save:save,
        update:update
    }
};

module.exports=repoTask();