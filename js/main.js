//Slider 100vh :)
$(function (){
    'use strict'
    // Adjust Slider Height
    var winH   = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (upperH + navH));

    //Featured Work Shuffle
    $('.featured-word ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') === 'all'){
            $('.shuffle-imges .col-md').css('opacity', 1);
        }else{
            $('.shuffle-imges .col-md').css('opacity', '.07');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
});