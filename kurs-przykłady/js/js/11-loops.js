/* Pętla for */

for(let i =0; i<=50; i++) { //i - iterator - start liczenia; kiedy stop; post inkrementacja
    console.log(i);
}  

/* wypisać parzyste od 0 do 50 */

for(let i =0; i<=50; i++) { 
    if(i%2 === 0) {
    console.log(i);
}
} 

/* Metoda forEach - dla tablic */

let names = ['Adam', 'Stefan', 'Ola'];

names.forEach(function(element, index){     // wyłącznie dla tablic
    console.log(`${index + 1}. ${element}`);
});

/* Pętla for in - dla obiektów */

let person = {
    id: 1,
    name: 'Adam',
    surname: 'Nowacki'
}

for(let key in person) { // dla kazdego klucza
    console.log(person[key]); 
}

/* Pętla while */

let randomNumber = parseInt(Math.random() * 10);

console.log(randomNumber);

while(randomNumber<5) {             // wykona sie 0x lub wiecej
    console.log(randomNumber);
    randomNumber = parseInt(Math.random() * 10);
}

do {
    console.log(randomNumber);      // wykona sie co najmniej raz
    randomNumber = parseInt(Math.random() * 10);
} while(randomNumber<5); 

/* Instrukcja break */

for(let i = 0; i<10000; i++) {  // od zera do 9999, dodaj jeden po kazdej liczbie
    console.log(i);
    if(i>100) break; // wyswietli do 101  
}

/* Instrukcja continue */

for(let i = 0; i<100; i++) {
    if(i%4 !== 0)   {
        continue;
    }
    console.log(i);
}