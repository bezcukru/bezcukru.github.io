$(document).ready(function(){
    // $.getJSON('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10', function(data){
    

    //     data.forEach(function(elem) {
    //         var h2 = $('<h2></h2>');
    //         var p = $('<p></p>');

    //         h2.text(elem.id + ' ' + elem.title);
    //         p.text(elem.body);

    //         $('#post-list').append(h2, p);
        
    //     });
    // });

    function getData(start) {
        $.getJSON('https://jsonplaceholder.typicode.com/posts?_start=' + start + '&_limit=10', function(data){
    

        data.forEach(function(elem) {
            var h2 = $('<h2></h2>');
            var p = $('<p></p>');

            h2.text(elem.id + ' ' + elem.title);
            p.text(elem.body);

            $('#post-list').append(h2, p);
        
        });
    });
    }

    getData(0);
    $('#get-data').click (function(postCount) {
        console.log($('#post-list h2').length);
        var postCount = $('#post-list h2').length;
        getData(postCount);
    });
    
});

