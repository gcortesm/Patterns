function Task (title, description) {
    this.title =title;
    this.description = description;
    this.progress ='New';
};
Task.prototype.statusProgress = function(){
    this.progress ='In Progress';
};
Task.prototype.statusFinish= function () {
    this.progress ='Finish';
};

Task.prototype.getStatus= function () {
    return this.progress;
};

module.exports=Task;