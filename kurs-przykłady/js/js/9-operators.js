/* Operatory matematyczne */

console.log(10/5);

console.log(10%3); // reszta z dzielenia (modulo), mozna spr parzyste albo wbrac co trzecia liczbe

let number = 5;

console.log(++number); // number = number + 1

console.log(number++);
console.log(number);

/* Operatory przypisania */

let newNumber = 15;

newNumber += 5; // returns 20

console.log(newNumber);

newNumber *= 5;

console.log(newNumber); // returns 100

/* Operatory porównania */

console.log(2==2); // true
console.log(2==3); //false
console.log(2!=3); // returns true - not equal
console.log('2'==2); //returns true
console.log(1===true); // returns false
console.log(1!==true); // returns true

console.log(2<3);
console.log(2<2);
console.log(2<=2);

/* Operatory logiczne */

console.log(2==2 && 2!=3); // && - and - returns true

console.log(4<2 || 2!=3); // || - or - returns true
console.log(4<2 || 2==3); // returns false

console.log(!(2===2)); // ! - NOT - returns false

/* Operator warunkowy - ternary */

let age = 32;

let matureInfo = (age>=18) ? 'jest pełnoletni' : 'niepełnoletni'; // ? jesli prawda to : jesli falsz to

console.log(matureInfo);