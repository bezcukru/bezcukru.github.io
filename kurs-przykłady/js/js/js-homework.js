// 1

// Napisz funkcję, która pobiera jako parametr stringa (czyli napis) i zwraca ten sam napis tylko napisany wspak.

//Następnie wywołaj tą funkcję i odwróć wspak stringa "Akademia108", a wynik działania funkcji wyświetl w konsoli.

function reverseName (text) {
    let newName='';
    for (let i = text.length - 1; i>=0; i--) {
      newName = newName + text[i];
    }
    return newName;
  }
  
  console.log(reverseName('Akademia108'));
  
// 2

//Napisz funkcję, która pobiera jako parametr stringa (czyli napis) i zwraca ten napis z posortowanymi literami.

// Następnie wywołaj funkcję i posortuj stringa "Akademia108", a wynik działania funkcji wyświetl w konsoli.

function sortName (text) {
    return text.split('').sort().join('');
  }
  
  sortName('Akademia108');

//3 

// Napisz funkcję ze zmiennymi lokalnymi, która policzy sumę i iloczyn elementów tablicy [1, 2, 3, 4, 5, 6]. Funkcja przyjmuje jeden parametr - ww. tablicę z liczbami. Funkcja nie zwraca nic. Funkcja wyświetla wyniki w konsoli.

const myArray = [1, 2, 3, 4, 5, 6];

function addAndMultiply (arr) {
arr = myArray;
let sum = 0;
let product = 1;
for(let i = 0; i < arr.length; i++){
  sum += arr[i];
  product *= arr[i];
}
console.log('Suma to ' + sum + ', a iloczyn ' + product);
}

addAndMultiply();

//4

// Napisz funkcję ze zmiennymi lokalnymi, która liczy sumę kwadratów elementów tablicy [0,1,2,3,4,5]. Funkcja przyjmuje jeden parametr - w/w tablicę z liczbami. Funkcja zwraca sumę kwadratow. Wyświetl wynik działania funkcji w konsoli.

const myArray = [1, 2, 3, 4, 5];

function addSquares (arr) {
  arr = myArray;
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
  sum += Math.pow(arr[i], 2);
  
}
console.log('Suma kwadratów to ' + sum);
}

addSquares();

//5 

// Napisz funkcję, która zwraca wartość n-tego elementu ciągu fibbonaciego. Wynik działań i funkcji wyświetl w konsoli. Jako parametr funkcja przyjmuje n - czyli n-ty element ciągu fibbonaciego.

function returnNthElement (n) {
    let arr = [0, 1];
    if (n <= 2) return 1;
  
    for (let i = 2; i <= n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
   
    console.log('Wartość elementu numer '+ n + ' to ' + arr[n]);
  }
  
  returnNthElement(9);

//6

// Pobierz do zmiennej jsonPracownicy poniższy obiekt:

// {
//     "pracownicy":[
//         {"firstName": "Krystian", "lastName": "Dziopa"}, 
//         {"firstName": "Anna", "lastName": "Szapiel"},
//         {"firstName": "Piotr", "lastName": "Żmuda"}
//     ]
// }
// Wyświetl go w konsoli, a następnie za pomocą pętli forEach przeiteruj po każdym pracowniku, oraz wyświetl w konsoli index elementu tablicy oraz imie i nazwisko pracownika.

// https://repl.it/repls/CoarseGlitteringFrontpage

//7 

// Napisz klasę "Ksiazka", która ma właściwości "tytul", "autor", "przeczytana" (przeczytana jest typu Boolean) oraz jedną metodę "opiszKsiazke", która zwraca stringa opisującego tą książkę wg. wzoru "Książka ma tytuł Wiedźmin, autorem jest Andrzej Sapkowski i została przeczytana.".

// Stwórz 3 instancje obiektu tej klasy z czego jedna z książek ma być już przeczytana, a następnie stwórz nową tablicę globalną i dodaj do niej te 3 książki.

// Następnie napisz funkcję "iloscPrzeczytanych", która jako parametr przyjmuje tablicę obiektów (naszych książek, ktore stworzyliśmy), a zwraca nam ilość książek, ktore zostały przeczytane. Podczas iteracji po tablicy (wewnątrz tej funkcji) i sprawdzania, czy książka jest przeczytana, wywołuj także na obiekcie metodę opiszKsiazke(), a wynik jej działania wyświetlaj w konsoli.

// Na samym końcu wyświetl w konsoli ilość przeczytanych książek

class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;

    }
    opiszKsiazke() {
        if (this.przeczytana === true) {
        console.log(`Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i została przeczytana.`)
        } else {
            console.log(`Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i nie została przeczytana.`)
        }
    }
};

let first = new Ksiazka('Metro 2033', 'Dmitry Glukhovsky', true);
let second = new Ksiazka('Lód', 'Jacek Dukaj', false);
let third = new Ksiazka('Ciemny Las', 'Cixin Liu', false);

// stworz globalna tablice

let bookArray = [];

bookArray.push(first, second, third);

// stworz funkcje

const iloscPrzeczytanych = arr => {
  let sum = 0;
  arr.forEach(function(element) {
  element.opiszKsiazke();
  if  (element.przeczytana === true) {
      sum += 1;
      return sum;
    } else {
      sum += 0;
    }
})
console.log('Liczba przeczytanych ksiażek to ' + sum);
}

iloscPrzeczytanych(bookArray);

// sortowanie bąbelkowe

const numbers = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

function bubbleSort (arr) {
  for (let i = 0; i < arr.length; i++){
   for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr [j + 1])  {
        let tempPosition = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tempPosition;
      }
  } 
}
  return arr;
};

console.log(bubbleSort(numbers));