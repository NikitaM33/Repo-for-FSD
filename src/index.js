import './scss/main.scss';

console.log("Hello world");

// ============== Drop menu with botton

$(document).ready(function() {

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