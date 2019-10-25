//Po kliknięciu w przycisk kwadrat ma się przesunąć w prawo o 100px oraz ma się zmniejszyć do rozmiaru 100px na 100px - wykorzystaj do tego metodę animate() 3s 
$(document).ready(function(){ 

    $('button').click(function () {
        $('.red').animate( {
                      width: '100px',
                      height: '100px',
                      marginLeft: '100px',
                  }, 3000).animate( {
                      backgroundColor: 'blue',
                  }, 5000).queue(function (){
                         $('.red').html('<h2 >Animacja zakończona</h2>');
                          })
      });


// po kilku paragrafy zmieniaja miejsce

// $('#up').click(function () {
//     $('p:last-of-type').insertBefore($('p:first-of-type'));                     
//   });
  
//   $('#down').click(function () {
//     $('p:first-of-type').insertAfter($('p:last-of-type'));                     
//   });


// sumuje wyplaty 

$('#count-sum').click(function () {
    var total = 0;
    $('.salary').each(function(){
        total += parseInt($(this).text()); // zmienia stringi na liczby calkowite
        $("#sum").text(total);
  });
  });
});  