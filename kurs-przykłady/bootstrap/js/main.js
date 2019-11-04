'use strict'; // zeby przypadkowo nie stworzyc zmiennej globalnej

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubleList = list.map((el, i) => {    // zastępuje pętle, iteruje przez tablice
    return el * 2;
});

console.log(doubleList);

const names = ['Tom', 'Ann', 'Mark', 'Kate'];
const surnames = ['Smith', 'Rodriguez', 'Ross', 'Nowak'];

const fullNames = names.map((el, i) => {   
   // debugger             //zatrzymuje w danym momencie
    return `${el} ${surnames[i]}`;
});

console.log(fullNames);

//metoda map zwroci tablice o tej samej dlugosci a filter moze tylko część

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  

const moreThanFive = numbers.filter((el, i) => {
    return el > 5;
});

console.log(moreThanFive);

const color =['red', 'blue', 'green', 'yellow', 'white', 'black', 'orange'];

const withR = color.filter((el, i) => {
    debugger
    return el.includes('r');
});

//const withR = color.filter(el =>  el.includes('r')); w jednej linii

console.log(withR);