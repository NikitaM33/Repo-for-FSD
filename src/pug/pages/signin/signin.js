import '../../../scss/signin/signin.scss';

console.log("signin page");

$(document).ready(function() {
    // ============== Burger menu
    $('.header__burger').click(function() {
        $('.header__burger, .header__nav').toggleClass('active');
        $('body').toggleClass('lock')
    });
});