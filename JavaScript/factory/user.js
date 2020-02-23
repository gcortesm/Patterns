var repoUser =require('./repoUser');

class user{
    constructor(name){
        this.name = name;
        this.id = new Date().getMilliseconds();
    }
    save (){
        repoUser.save(this);
    }
}

module.exports=user;