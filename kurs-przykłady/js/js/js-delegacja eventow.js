// delegacja eventow --> przekazyeanie akcji z rodzica na dziecko przez target w DOM
//target wyciaga najnizszy w hierarchi element dom ktory zostal klikniety 

document.getElementById('holder').addEventListener('click', function(e){
    if(e.target.tagName !== 'BUTTON') return;
    if(e.target.innerText === 'AC') {
        document.getElementById('display-screen').value = '';
        return; // wychodzi z funkcji
    }
    document.getElementById('display-screen').value += e.target.innerText;
});