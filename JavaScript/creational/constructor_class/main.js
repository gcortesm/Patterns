var Task = require('./task');
var TaskClass =require('./taskIsClass')

var myTask = new Task('Evaluation mode','This task eval de new mode');
console.log(myTask.getStatus());

myTask.statusProgress();
console.log(myTask.getStatus());
myTask.statusFinish();
console.log(myTask.getStatus());

console.log('using class');


var taskClass = new TaskClass('Evaluation class','try to evaluate class');
taskClass.inProgress();

console.log(taskClass.getStatus());