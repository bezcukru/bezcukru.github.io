// Znajdowanie elementów po ID

const mainHeading = document.getElementById('main-header');

console.log(mainHeading);
console.dir(mainHeading); // zwraca tabelke z wlasciwosciami

mainHeading.style.color = 'red';

// Znajdowanie elementów po klasie

const listItems = document.getElementsByClassName('list-item');
console.log(listItems);

listItems[0].style.color = 'red'; // nie zadziala na kolekcję, mozna dodac [index] i pokoloruje jeden

for(let i = 0; i<listItems.length; i++ ) {
    listItems[i].style.color = 'green';
}

// Znajdowanie elementów po znaczniku

const paragraphs = document.getElementsByTagName('p');

console.log(paragraphs);  // nawet jak jeden elemnt to wyskoczy jako kolekcja 

paragraphs[0].style.color = 'orange';

// Znajdowanie elementów po selektorach

let listItem = document.querySelector('.list-item');  //zwraca jeden
console.log(listItem);

let listItem3 = document.querySelector('.list-item:nth-of-type(3)');  //zwraca jeden - trzeci (uzywac slektorow z cssa)
console.log(listItem3);

let listItemsNew = document.querySelectorAll('.list-item');         // zwraca wszystkie

console.log(listItemsNew);

