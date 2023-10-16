$(document).ready(function(){
// Menu
    $('.menu a').each(function(index, elemento){

        $(this).css({
            'top': '-200px'
        });

        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });
// Header
    if ( $(window).width() > 800 ) {

        $('header .text').css({
            opacity: 0,
            marginTop: 0
        });

        $('header .text').animate({
            opacity: 1,
            marginTop: '-52px'
        }, 1500);
    }
//Scroll element menu
    var carer = $('#carer').offset().top,
        menu = $('#kafein').offset().top, 
        galeri = $('#galeri').offset().top,
        lokasi = $('#lokasi').offset().top; 
    
    $('#btn-carer').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 580
        }, 500);
    });
    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu
        }, 500);
    });
    $('#btn-galeri').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeri
        }, 500);
    });
    $('#btn-lokasi').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: lokasi
        }, 500);
    });

});