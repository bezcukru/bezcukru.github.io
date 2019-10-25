$(document).ready(function ()
{
console.log('test');

// 1. z linka https://blockchain.info/pl/ticker pobierz dane za pomocą metody getJSON
// w znaczniku class exchange-rate wstaw aktualny kurs btc-pln

function getData () {
    $.getJSON('https://blockchain.info/pl/ticker', function (data) {
        console.log(data);
        var stringRate = $('.exchange-rate').text();
        var currentRate = (stringRate !== '')?parseFloat(stringRate):data.PLN.last;
        var newRate = data.PLN.last;
        var indicator = $('.fas');

        console.log(currentRate);
        console.log(newRate);

        if(currentRate === newRate) {
            indicator.removeClass('fa-arrow-down fa-arrow-up').addClass('fa-arrows-alt-h');   
        } else if (currentRate < newRate){
            indicator.removeClass('fa-arrow-down fa-arrows-alt-h').addClass('fa-arrow-up');
        } else {
            indicator.removeClass('fa-arrow-up fa-arrows-alt-h').addClass('fa-arrow-down');
        }

        $('.exchange-rate').text(data.PLN.last);
    
    });
}
getData();

var interval = setInterval(getData, 5000);

$('button').click(function(){
    var newInterval = parseInt($(this).val());
    console.log(newInterval);
    clearInterval(interval);
    interval = setInterval(getData, newInterval);

    $('#time-interval').text($(this).text());
});


}); // z doc ready