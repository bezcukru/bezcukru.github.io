let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];

//  stwórz znacznik listy, dodaj znacznik

let cityList = document.createElement('ol');
document.body.appendChild(cityList);

// wyświetl listę na stronie, dodaj klasy

for(let i=0; i < cities.length; i++) {
    let cityItem = document.createElement('li');
    let cityName = document.createTextNode(cities[i]);
    cityList.appendChild(cityItem);cityItem.appendChild(cityName);
    cityItem.setAttribute("class", "city");
}

// delegacja eventow --> od rodzica na dziecko przez target w DOM np

// document.getElementById('button-holder').addEventListener('click', function(e) {
    
// });

document.getElementsByTagName('button')[0].addEventListener('click', function() {
    let newListItem = document.createElement('li');
    newListItem.setAttribute('class', 'item');
    let newNumber = document.getElementsByClassName('item').length + 1;
    newListItem.innerText = 'Item ' + newNumber;
    document.getElementById('items').appendChild(newListItem); 
}
);


