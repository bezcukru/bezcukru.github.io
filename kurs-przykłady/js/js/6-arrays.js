/* Definiowanie tablic */

let names = ['Adam', 'Stefan', 'Ola'];

let firstElement = names[0]; // indeksuje od zera

console.log(names); // log, pop etc to metody tablicowe
console.log(firstElement);

names [3] = 'Tadeusz'; // dodawanie elementu - ale moze prowadzic do błędów
console.log(names);

names.push('Kasia'); // dodaje element jako ostatni
console.log(names);

names.pop(); //zdejmuje ostatnia rzecz
console.log(names);

console.log(names.length); // zwraca dł tablicy

for(let i = 0; i<names.length; i++) { // do dlugości tablicy
    console.log(names[i]);
}

console.log(names.join(' ')) // wyloguje wszystko jak ciąg, w nawias mozna dodac ządany separator, domyslnie , bez spacji

console.log(names.reverse()); // odwraca kolejność

console.log(names.sort());

/* Dane w tablicy */

let newArray = [1, 'Adam', false, null, ['Kasia', 'Stefańska'], {name: 'Cassie', surname: 'Cage'}];


console.log(newArray);
console.log(newArray[4][1]); // wyciąganie danych z tablicy w tablicy

