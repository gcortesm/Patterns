var repoUse=function () {

    var save = function (user) {
        console.log('Save user '+user.name);
    }

    return{
       save : save 
    }
}
module.exports= repoUse();