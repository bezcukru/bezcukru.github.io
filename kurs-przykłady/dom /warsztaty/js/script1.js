// Pargrafy zmieniaja kolor po kliknieciu w btn


const button = document.getElementById('button');

/* const red = document.getElementById('red');
const yellow = document.getElementById('yellow');

function setBackgroundRed(event) {
    red.style.backgroundColor = 'red';
}

function setBackgroundYellow(event) {
    yellow.style.backgroundColor = 'yellow';
}

button.addEventListener('click', setBackgroundRed);
button.addEventListener('click', setBackgroundYellow); */

/* document.querySelector('button').addEventListener('click', function() {
    document.getElementsByTagName('p')[0].style.backgroundColor = 'red';
    document.getElementsByTagName('p')[1].style.backgroundColor = 'yellow';
}
) */

document.querySelector('button').addEventListener('click', function() {
    document.getElementsByTagName('p')[0].classList.toggle('bg-red');
    document.getElementsByTagName('p')[1].classList.toggle('bg-yellow');
}
)
