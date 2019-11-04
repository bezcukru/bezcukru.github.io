'use strict';

class Person {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    sayHi () {
       return `Hi, I'm ${this.name} and I'm ${this.age} years old`
    }
};

const Tom = new Person('Tom', 28);
const anna = new Person('Anna', 30);

console.log(anna.sayHi()); 

class Developer extends Person {    //dziedziczenie klasy do nowej klasy
    constructor(name, age, language) {
        super(name, age)  //parametry ktore bierzemy od dziedziczonej klasy są w super()
        this.language = language
    }
    sayWhoIAm () {
        return `Hi, I'm ${this.name} and I'm ${this.age} years old and I'm a ${this.language} programmer`
    }

}

const newDev = new Developer('Zosia', 13, 'Java Script');

console.log(newDev.sayWhoIAm());

