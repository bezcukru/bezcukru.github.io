/* warunek if */

let age = 16;

if(age>=18) {
    console.log('Warunek spełniony');
} 

/* If else */

if(age>=18) {
    console.log('Warunek spełniony');
} else {
    console.log('Warunek niespełniony');
}

/* Warunek else if */

let bmi = 19;

if(bmi<20) {
    console.log('Niedowaga');
} else if(bmi<25) {
    console.log('W normie');
} else {
    console.log('Nadwaga');
}

// IF jest do przedziałów a SWITCH do konkretnych wartości !!

/* Switch */

let lightColor = 'black';

switch(lightColor) {
    case 'green':
    console.log('Jedź');
    break;
    case 'yellow':
    console.log('Czekaj');
    break;
    case 'red':
    console.log('Stój');
    break;
    default: 
    console.log('problem z sygnalizacją');
}