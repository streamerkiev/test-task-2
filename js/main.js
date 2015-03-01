$(document).ready(function(){
    //bxSlider init
    $('.bxslider').bxSlider({
        auto: false,
        controls: true,
        speed: 800
    });

    //Top menu
    $('.burger-menu').click(function() {
        $('.top-menu').show().animate({
            opacity: 1,
            right: 0
        }, 300);
    });
    $('.mobile-menu-close').click(function() {
        $('.top-menu').animate({
            opacity: 0,
            right: -100
        }, 300, function() {
            $(this).hide();
        });
    })
});
