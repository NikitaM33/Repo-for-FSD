import '../../../scss/roomDitails/roomDitails.scss';

console.log('roomDitails page');


// ============== Drop menu with botton

$(document).ready(function() {
  // ============== Burger menu
  $('.header__burger').click(function() {
    $('.header__burger, .header__nav').toggleClass('active');
    $('body').toggleClass('lock')
  });

  // ============== Toggle burger down
  $('.arrow-down').click(function() {
    $(this).parent().next().slideToggle();
  });

  // ============== Plus/minus buttons
  $('.minus').click(function() {
    var $label = $(this).parent().find('.quantity');
    var count = parseInt($label.val()) - 1;
    count = count < 0 ? 0 : count;
    $label.val(count);
    $label.change();
    return false;
  });

  $('.plus').click(function() {
    var $label = $(this).parent().find('.quantity');
    var count = parseInt($label.val()) + 1;
    count = count > 9 ? 9 : count;
    $label.val(count);
    $label.change();
    return false;
  });
});