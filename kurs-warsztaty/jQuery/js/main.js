$(document).ready(function(){
    var slideShow = $('.slide-show');
    var slideCount = $('.single-slide').length; // liczba elementow
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;

    slideShow.css('width', slideCount*100 + '%'); //rozciagamy taśmę poza granice okna 

    slideShow.find('.single-slide').each(function(index) { //petla 
        $(this).css('width', slideWidth + '%');
        $(this).css('margin-left', slideWidth * index + '%'); //
    });

    $('.prev-slide').click(function(){
        slide(slideIndex - 1);
    });

    $('.next-slide').click(function(){
        slide(slideIndex + 1)
    });

    function slide(newSlideIndex) {
        if (newSlideIndex < 0 || newSlideIndex > slideCount - 1){ // -1 bo indeksy sa od 0
            return; //przerywa dzialanie funkcji
        }

        var slideCaption = $('.slide-caption').eq(newSlideIndex); // wskazanie indeksu danego elementu - eq
        var marginLeft = newSlideIndex * (-100) + '%'; //przesuwamy slideshow o szerokosc rodzica

        slideCaption.hide();

        slideShow.animate({
            'margin-left': marginLeft
        }, 800, function (){
            slideIndex = newSlideIndex; // tu definiujemy newSLideIndex
            slideCaption.fadeIn();
        })
    }

 //   
});
