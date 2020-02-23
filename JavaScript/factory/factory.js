var factory  = function () {
    var facto =this;
    var repoList = [{name :'repoTask',source:'./repoTask'},
                    {name :'repoUser',source:'./repoUser'}];

    repoList.forEach(element => {
        facto[element.name]=require (element.source);
    });
}
module.exports=new factory;