$(document).ready(function(){ // loguje cos jesli dokument sie załadował (obsługa zdarzenia)
    //console.log('ready');
    changeColor();

    //selektor znacznika

    var allP = $('p');
    allP.css('color', '#00F');
    // console.log(allP);

    var allGreen = $('.green');
    allGreen.css('color', 'green');

    //metoda text
    console.log(allP.text());
    //allP.text('12345'); //zamienia tekst w paragrafie

    // metoda html

    console.log($('.html').html());
    $('.html').html('<p>kdjihqfiqhiiqf</p>'); // dodaje do środka kod wiec bedzie p w p

    //dodawanie tresci
    $('#container').prepend('<p class="prepend">Prepend</p>'); //na poczatku po selektorze
    $('#container').append('<p class="append">Append</p>'); //na koncu przed zamkieciem selektora

    $('#container').before('<div class="before">Before</div>'); //przed selektorem
    $('#container').after('<div class="after">After</div>'); // po selektorze

    //usuwanie tresci

    $('#delete p').empty(); // usuwa tylko wezel tekstowy
    $('#delete p').remove(); // usuwa caly element

    //metoda css - get 
    console.log($('.css p').css('color')); // zwroci kolor w rgb

    // css - set
     $('.css p').css('color', 'pink'); // ustawi kolor

    $('.css').css({
        width: '50%',
        backgroundColor: 'brown',
    });

    // metoda val

    console.log($('form input:first-of-type').val()); //zwroci wartosc - get
    $('form input:first-of-type').val('Tadek'); //nadpisze wartosc - set

    //dodawanie i usuwanie klas

    $('form').addClass('formularz pierwszy'); //jesli dwie klasy to jednym ciagiem
    $('form').removeClass('pierwszy'); 
    //$('form').toggleClass('pierwszy'); 

    //metoda find

    $('.find').find('span').css('font-size', '40px');

    // each() - dla kazdego

    // $('nav li').each(function(){
    //     $(this).click(function() {
    //         $(this).find('a').css('color', 'green');
    //     })
    // }) 

    // on - mozna opisac duzo zdarzen dla jednego obiektu

    $('nav li').on( {
        'click': function () {
            $(this).find('a').css('color', 'magenta');
        },      
        'mouseover': function (){
            $(this).find('a').css('font-size', '20px');
        },
        'mouseleave': function () {
            $(this).find('a').css('font-size', '16px');
        }
    });
    // callback po metodzie
    $('nav').hide('slow', function(){
        $('body').addClass('klasa');
    }).show(4000, function(){
        $('body').removeClass('klasa');
    })

    // fade 

    $('.fade').fadeOut(4000).delay(2000).fadeIn(4000);

    // slide

    // $('#slide').click(function() {
    //     $('.slide').slideToggle(2000);
    // })

    // animacje

    $('#slide').click(function() {
            $('.slide').animate( {
                width: '50%',
                height: '150px'
            }, 1000, animateHeight)
            //function(){ // callback
              //  $('.slide').css('background-color', 'red'); //animate nie dziala na background-color, jquery UI trzeba
            });
        });
    


// selektor ID
// jak jedna wlasciwosc to stringiem jjak wiecej to obiektem
function changeColor () {
    $('#first').css('background-color', 'red').hide('slow').show(3000); //skladnia lancuchowa, dziala jedno po drugim
}

//

function animateHeight() {
    $('.slide').animate({
        height: '300px'
    }, 1000)
}

