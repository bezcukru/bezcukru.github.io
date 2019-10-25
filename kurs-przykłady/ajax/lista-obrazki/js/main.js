// 1. Obsłuz klikniecie w przycisk get-data

//document.getElementById('get-data').addEventListener('click', function() {

//})

// 2. Za pomocą fetchApi pobierz pierwsze 10 postów za pomocą przycisku
//https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10

$(document).ready(function () {

    fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
        .then(response => response.json())
        .then(json => {

            console.log(json);

            json.forEach(element => {
                let newPost = document.createElement('div');
                newPost.setAttribute('class', 'post');
                let newTitle = document.createElement('h2');
                let newImg = document.createElement('img');
                newImg.setAttribute('src', element.url);

                newTitle.innerText = element.id + '. ' + element.title;

                document.getElementById('post-list').appendChild(newPost);

                newPost.appendChild(newTitle);
                newPost.appendChild(newImg);

            })
        });


    // 3. Stwórz element z klasą .post, stwórz i dodaj do niego element img z odpowiednimi atrybutami 
    // stwórz h2 z odpowiednia treścią. EL. post dodaj do el. o id post-list


    // 4. Pobieranie danych zamknij w funkcji, którą wywołasz po załadowaniu strony oraz po kliknieciu


    // 5. Sparametryzuj funkcję i adres, z którego pobierane są dane w taki sposób, aby ładowane były kolejne paczki z danymi


    function getMore(start) {
        fetch('https://jsonplaceholder.typicode.com/photos?_start=' + start + '&_limit=10')
            .then(response => response.json())
            .then(json => {

                json.forEach(element => {
                    let newPost = document.createElement('div');
                    newPost.setAttribute('class', 'post');
                    let newTitle = document.createElement('h2');
                    let newImg = document.createElement('img');
                    newImg.setAttribute('src', element.url);

                    newTitle.innerText = element.id + '. ' + element.title;

                    document.getElementById('post-list').appendChild(newPost);

                    newPost.appendChild(newTitle);
                    newPost.appendChild(newImg);

                })
            })
    }

    document.getElementById('get-data').addEventListener('click', function () {
        let postCount = document.getElementsByClassName('post').length;
        getMore(postCount);
    });
});