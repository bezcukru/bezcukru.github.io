$('button').click(function(){
    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
    var newData = JSON.stringify(data);
    console.log(newData);
    $('button').after('<div id="id="dane-programisty"><br>'+ newData + '</div>');
    });
});
