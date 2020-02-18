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

//Tenemos entonces tres formas de construir un objeto
/**
 * var ob={}
 * var ob2=Object.create(Animal.prototype)
 * var ob3 = new Animal();
 */

 // ahora de que forma podemos agregar valores a un objeto 
 
 var obj = {};
 obj.param ='Test Valor';
 console.log(obj.param);

 var obj2 = {};
 obj2['value']='Test Valor';
 console.log(obj2['value']);//Ventaja podemos usar variables

 var test2='Valor 1';
 obj2[test2]='Valor acd';
 console.log(obj2[test2]);






