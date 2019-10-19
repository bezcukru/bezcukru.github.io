/* Definicja obiektu */

let person = {
    name: 'Adam', // klucz - wartość
    surname: 'Nowacki',
    age: 32,
    isMarried: true,
    hobbies: ['Football', 'Board Games'],
    children: [{name: 'Zuzanna', age: 5}, {name: 'Liliana', age: 3}],
    spouse: {name: 'Olga', age: 31},

    printSpouseName() {     // definiowanie funkcji/metody obiektu
        console.log(this.spouse.name);
    },
    printHobbies() {
        this.hobbies.forEach(function(elem){
            console.log(elem);
        });
                
        }
    };

console.log(person);
console.log(person.name);
console.log(person['surname']);

console.log(person.children[0].name);
console.log(person.spouse.age);

person.printSpouseName();  // wywołanie funkcji/metody obiektu
person.printHobbies();

person.city = "Kraków";
console.log(person);
