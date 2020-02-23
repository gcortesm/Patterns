var factory= require('./factory');
var task = require('./task');
var User = require('./user');

var user = new User('User1');

var task1 = new task('Task1',user.id,'Awesome Task');
task1.save();
