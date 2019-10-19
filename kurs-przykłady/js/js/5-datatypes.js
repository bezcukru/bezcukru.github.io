/* Typy proste */

/* Typ liczbowy */

let number = 10;
console.log(number);

let realNumber = -3.45;
console.log(realNumber);

/* Typ łańcuchowy */

let name = 'Adam';
console.log(name);

let tel = '2323242';
console.log(tel);

let message = 'This is Adam\'s car'; //backslash pomaga z '' i ""
console.log(message);

/* Konkatenacja - łączenie stringów */

let surname = 'Nowak';
let connectString = 'Adam ' + surname;
console.log(connectString);

let newMessage = 'Uzytkownik ' + connectString + ' ' + 'jest zalogowany';
console.log(newMessage);

/* Interpolacja stringów */

let age = 32;   // backstick ``
let anotherMessage = `Uzytkownik ${connectString} ma ${age} lata.`;
console.log(anotherMessage);

/* Typ logiczny */
let isMature = false;
console.log(isMature);
if (isMature) {
    console.log('Jest pełnoletni');
} else {
    console.log('Jest niepełnoletni');
}

/* Typy specjalne */

console.log(null);
console.log(undefined);

/* Sprawdzanie typu */

console.log(typeof name);
console.log(typeof isMature);

/* Czemu JS jest dziwny */

console.log('2' + 2);
console.log('2' - 2);

console.log(2 - undefined); // returns NaN
console.log(typeof NaN); // returns number

console.log(2/0); // returns infinity
console.log(typeof Infinity); // returns number

/*  */