
const pi = Math.PI;
console.log(pi);


const e = Math.E;
console.log(e);


/*  Metody */

let power = Math.pow(256, 3);
console.log(power);

let randomNumber = Math.random();
console.log(randomNumber); // liczba pseudolosowa - zalezy od czasu procesora

/* Napisz funkcję kó®a policzy pole koła o zadanym promieniu i zwroci wyliczony wynik */

const circleArea2 = (r) => Math.PI * r * r;

function circleArea(r) {
    return Math.PI * r * r;
}

console.log(circleArea(1));
console.log(circleArea(2));
console.log(circleArea(3));
