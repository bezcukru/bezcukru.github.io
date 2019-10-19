const mainHeading = document.getElementById('main-header');

// Zawartość znacznika

mainHeading.innerText = 'Nowy tekst nagłówka';

mainHeading.innerHTML = 'Nowy tekst <span>nagłówka</span> ze spanem';

// mainHeading.outerHTML = '<h3> nowe ha trzy </h3>'; // zmienia razem ze znacznikami

// Atrybuty

mainHeading.id = 'new-id';

mainHeading.className = 'main heading'; // na nowo zawartosc class

mainHeading.classList.add('new-class'); // dodaje jedna klase np
mainHeading.classList.remove('main'); // odejmuje

mainHeading.classList.toggle('new-class'); // jak jest klasa to odejmuje, jak nie ma to dodaje

// Właściwość style

mainHeading.style.backgroundColor = 'darkorange';

const listItems = document.getElementsByClassName('list-item');

for( let i = 0; i<listItems.length; i++) {
    listItems[i].style.marginLeft = 10*i + 'px'; // ustawia li w schodki
}