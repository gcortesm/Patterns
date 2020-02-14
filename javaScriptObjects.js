console.log('Pluraligth');

let array =['Red','Yellow','Black'];

Object.defineProperty(Array.prototype, 'last',{
    get: function () {
        return this[this.length-1];
    }
});

console.log(array.last);


function Animal(){
}

Animal.prototype.speak=function(){
    console.log('Grrr');
}


let array2 = new Array('Black','Green','Red','With');
console.log(array2.last);

function Cat(name, color){
    this.name=name;
    this.color=color;
}
Cat.prototype=Object.create(Animal.prototype);



//Cat.prototype.age=5;

let gatito = new Cat('Ramonsito','Mezcla');

gatito.speak();

//console.log('Proto Object ',Cat.prototype);
//console.log('Aga gatito',gatito.age);
//console.log('Proto Gatito',gatito.__proto__);






