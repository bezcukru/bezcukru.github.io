const button = document.getElementById('button');

console.dir(button);

function setBackground(event) {
    console.log(event);
    this.style.backgroundColor = 'lime';
}

button.onclick = setBackground; // bez () bo wywoła sie od razu, teraz jest własciwoscia a nie funkcją

function setBackgroundHeading() {
    document.getElementById('main-header').style.backgroundColor = 'red';
}

// button.onclick = function() {
//     document.getElementById('main-header').style.backgroundColor = 'red';
// }

document.body.addEventListener('click', setBackground);
button.addEventListener('dblclick', setBackgroundHeading);

function doubleSize() {
    this.style.fontSize = '30px';
}

button.addEventListener('mouseover', doubleSize);

// Blokowanie akcji

document.querySelector('.links').addEventListener('click', function(e) {    //nazwy eventow e, event, evnt
    e.preventDefault();
    console.log('klikam w link'); 
})

// document.getElementById('.links').addEventListener('click', function(e) {  
//     this.style.backgroundColor = 'yellow';
// })

// document.getElementById('.link-holder').addEventListener('click', function(e) {  
//     this.style.backgroundColor = 'pink';
// })
