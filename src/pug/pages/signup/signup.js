import '../../../scss/signup/signup.scss';

console.log("signup page");

$(document).ready(function() {
    $('.header__burger').click(function() {
        $('.header__burger, .header__nav').toggleClass('active');
        $('body').toggleClass('lock')
    });
})