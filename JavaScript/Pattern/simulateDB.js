var Repo = function(){
    var save =function(task){
        console.log('Saving task' + task.name);
    };
    var update =function (task) {
        console.log('Update task' +task.name);
    };
    return{
        save:save,
        update:update
    };
}
module.exports=Repo();