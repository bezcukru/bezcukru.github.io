// Węzeł rodzica

const sectionAbout = document.getElementById('about');

console.log(sectionAbout.parentElement.parentElement); // zwraca parent element pierwszego i mozna łączyć

// Węzły dzieci

console.log(sectionAbout.childNodes);
console.log(sectionAbout.children); // zwraca zanczniki

console.log(sectionAbout.firstElementChild.firstChild);
console.log(sectionAbout.lastElementChild);

// Węzły rodzeństwa

console.log(sectionAbout.previousElementSibling.previousElementSibling);
console.log(sectionAbout.nextElementSibling);