class Car { // nazwa klasy z wielkiej litery 
    constructor(name, year) { // predefiniowana metoda dla tworzenia klasy
        this.name = name;
        this.year = year;

    }
    printCarInfo() {
        console.log(`Samochód ${this.name} wyprodukowany w ${this.year}.`);
    }
}

let bugatti = new Car('bugatti veyron', 2012);  // new jest predefiniowane - instancja klasy
let audi = new Car('audi a4', 2016);

console.log(bugatti);
console.log(bugatti.name);

console.log(audi);
console.log(audi.name);

bugatti.printCarInfo(); // wywolywanie funkcji obiektu - najpierw nazwa potem funkcja!
audi.printCarInfo();

class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;

    }
    opiszKsiazke() {
        if (przeczytana === true) {
        console.log(`Książka ma tytuł ${tytul}, autorem jest ${autor} i została przeczytana.`)
        } else {
            console.log(`Książka ma tytuł ${tytul}, autorem jest ${autor} i nie została przeczytana.`)
        }
    }
};

let first = new Ksiazka('Metro 2033', 'Dmitry Glukhovsky', true);
let second = new Ksiazka('Lód', 'Jacek Dukaj', false);
let first = new Ksiazka('Ciemny Las', 'Cixin Liu', false);