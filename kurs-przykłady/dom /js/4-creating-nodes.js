// Tworzenie węzlów

let userList = ['Adam', 'Ola', 'Kasia', 'Paweł'];

/* let userItem = document.createElement('li');
let userName = document.createTextNode(userList[0]);
userItem.appendChild(userName); */

for(let i=0; i<userList.length; i++) {
    let userItem = document.createElement('li');
    let userName = document.createTextNode(userList[i]);
    userItem.appendChild(userName);
    document.getElementById('users').appendChild(userItem);
}

/* let userList = document.getElementById('users');

userList.appendChild(userItem);

document.getElementById('users').appendChild(userItem);

console.log(userItem); */


// Dodawanie przed 

let newH2 = document.createElement('h2')
newH2.innerText = 'Nowy nagłówek';

document.body.insertBefore(newH2, document.getElementById('users')); //wstawia przed

document.body.insertBefore(newH2, document.getElementById('users').nextElementSibling); // - wstawia po

// Zastępowanie 

let newH3 = document.createElement('h3')
newH3.innerText = 'Nowe h3';
newH3.setAttribute('class', 'new-heading'); // dodawanie atrybutu
document.body.replaceChild(newH3, document.getElementById('main-header'));

// Usuwanie węzła

document.body.removeChild(document.getElementById('about'));

