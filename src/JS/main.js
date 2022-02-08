$(document).ready(function() {
    $('#sign').click(function(event){
        $('.login').toggleClass('login-active');
        $('.burger').removeClass('burger-none');
    });
    $('#sign_up').click(function(event){
        $('.login').toggleClass('login-active');
        $('.burger').removeClass('burger-none');
        $('.burger_menu').removeClass('burger_menu-active');
    });
    $('.close').click(function(event){
        $('.login').removeClass('login-active');
    });
});


$(document).ready(function() {
    $('.burger').click(function(event){
        $('.burger_menu').toggleClass('burger_menu-active');
        $('.burger').toggleClass('burger-none');
    });
    $('.burger_close').click(function(event){
        $('.burger_menu').removeClass('burger_menu-active');
        $('.burger').removeClass('burger-none');
    });
});