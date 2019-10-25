// Po klinieciu w button dodaj kolejn element do listy nienumerowanej - znacznik li z tekstem list item

// WAZNE !!

document.getElementById('button').addEventListener('click', function() {
    let newListItem = document.createElement('li');
    newListItem.innerText = 'List item nowy';
    document.getElementsByTagName('ul')[0].appendChild(newListItem); // jest [] bo to przeciez pseudotablica i trzeba wybrac element!!
    console.log('new li');
}
)
