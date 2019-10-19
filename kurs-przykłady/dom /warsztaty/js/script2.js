// ma przechwycić przesylane dane i obsłuzyć zdarzenie

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementsByTagName('input')[0].value;
    let surname = document.getElementsByTagName('input')[1].value;
    console.log(name);
    console.log(surname);
});