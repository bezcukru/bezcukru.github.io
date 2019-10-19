/* Podstawowy sposób def funkcji */
function printInfo() {
    console.log('Funkcja się wykonała');
}

printInfo();
printInfo();
printInfo();

/* Wyrazenia funkcyjne */

const printNewInfo = function() {
    console.log('Wyrazenie funkcyjne sie wykonało'); 
}

printNewInfo();

/* Funkcja z parametrami */

function addNumbers(numberOne, numberTwo) {
    let result = numberOne + numberTwo;
    console.log(result);
}

addNumbers(5, 4);
addNumbers(100, 387);
addNumbers(4234, 1424);


function multiply(num1, num2, num3) {
    let result = num1 * num2 * num3;
    return result; // return przerywa działanie funkcji
}

/* function multiply(num1, num2, num3) {
    return num1 * num2 * num3; 
}
 */

let multiplyResult = multiply(2,3,2);

console.log(multiplyResult);

addNumbers(6, multiplyResult);

/* Funkcje strzałkowe */

const connectName = (fname, sname) => {
    let connectedNames = fname + ' ' + sname;
    console.log(connectedNames);
}

connectName('Cassie','Cage');

const square = a => a*a;

console.log(square(5));
console.log(square(25));

/* Domyślne wartości od ES6 */

const multiplyResult = (a, b, c) => a * b * c; // mozna dać c = 1 i wtedy bedzie i tak wyrzucac numer
                                                // dziala na obiektach, tablicach etc
let logResult = multiplyResult(1, 2, 3);

console.log(logResult);

function multiplyThree(a, b, c) {
  let result = a * b * c; 
  return result;
}

let logThree = multiplyThree(2, 3, 4);

console.log(logThree);