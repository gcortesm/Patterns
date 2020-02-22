var repo = require('./simulateDB');

class Task{
    constructor(name){
        this.name=name;
    }
    save () {
        console.log('Sav.....!!!!!')
        repo.save(this);
    };

    update(){
        console.log('Update....!!!!');
        repo.update(this);
    };
}

module.exports=Task;