
document.getElementById('get-data').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10') // paginacja zeby uzyc np tylko 10 ?_start=0&_limit=10
        .then(response => response.json()) // json jest metoda obiektu fetch api
        .then(json => {

            console.log(json);

            json.forEach(element => {
                let newTitle = document.createElement('h2');
                let newPar = document.createElement('p');

                newTitle.innerText = element.id + '. ' + element.title;
                newPar.innerText = element.body;

                document.body.appendChild(newTitle);
                document.body.appendChild(newPar);

            })
        });
})
