import '../../../scss/searchedRoom/searchedRoom.scss';
import '../../../scss/main.scss';

console.log('Searched room');

// ================ Date range ==========
var twobombSlider  = (function(){
  var drag = false;
  var values = [];
  
  $(".slider").each(function(i,e){
    updateView(e);
  });

  $(".slider>.bar>.lp,.slider>.bar>.rp").bind("mousedown",function(){
    drag = $(this);
  })

  $(document).bind("mousemove",function(e){
    if(!drag)
    return;

    var x = (e.pageX - $(drag).outerWidth()/2 - $(drag).parent().parent().offset().left)/$(drag).parent().parent().outerWidth();
    if(x < 0 ) x = 0;

    if(x > 1) x = 1;

    var rp = $(drag).parent().find(".rp");
    var lp = $(drag).parent().find(".lp");

    if($(drag).hasClass("lp") && x > $(rp).attr("data-pos") ){
      $(rp).attr("data-pos",x);
    }

    if($(drag).hasClass("rp") && x < $(lp).attr("data-pos") ){
      $(lp).attr("data-pos",x);
    }

    $(drag).attr("data-pos",x);
    updateView($(drag).parent().parent());
  });
  
  $(document).bind("mouseup",function(){
    drag = false;
  });

  function updateView(slider) {
    var startVal = parseInt($(slider).find(".bar").data("start"));
    var endVal = parseInt($(slider).find(".bar").data("end"));
    
    if (startVal > endVal)
      endVal = startVal;
    startVal = startVal || 0;
    endVal = endVal || 50000;

    var values = [];

    for (var i = startVal; i <= endVal; i++)
      values.push(i);
      
    var l = $(slider).find(".lp").attr("data-pos");
    var r = $(slider).find(".rp").attr("data-pos");
    var x = $(slider).outerWidth() * l;
    var w = (r - l) * $(slider).outerWidth();

    $(slider).find(".bar").css({ left: x + "px", width: w + "px" });
    var index = Math.round(values.length * l);

    if (index >= values.length)
      index = values.length - 1;

    $('.min-price').html("<span>" + values[index] + "&#8381;</span>");
    index = Math.round(values.length * r);

    if (index >= values.length)
      index = values.length - 1;
    $('.max-price').html("<span>" + values[index] + "&#8381;</span>");
  }
})();

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

// ============== Drop checkbox

$(document).ready(function() {
  $('.updown-arrow').click(function() {
    $(this).parent().next().slideToggle();
  });

  // ============= Rotate arrow

  const MAX_ANGLE = -180;
  // const MIN_ANGLE = 0;
  const speed = 10; // скорость вращения
  let angle = 0;

  $('.updown-arrow').click(function() {
    if(angle > MAX_ANGLE) {
      
      const $rotate = $('.rotate');
      const animate = () => {

        if (angle < MAX_ANGLE) {
          requestAnimationFrame(animate);
        } else {
          angle = MAX_ANGLE;
        };
        
        $rotate.css('transform', `rotate(${angle}deg)`);
        angle -= speed;
      };
      animate();
    } else {
      const $rotate = $('.rotate');
      const animateBack = () => {
        if (angle == MAX_ANGLE) {
          requestAnimationFrame(animateBack);
        } else {
          angle = 0;
        };

        $rotate.css('transform', `rotate(${angle}deg)`);
        angle -= speed;
      };
      animateBack();
    }
  });


  // $('.updown-arrow').click(function() {
  //   const $rotate = $('.rotate');

  //   const MAX_ANGLE = -180;
  //   const MIN_ANGLE = 0;
  //   const speed = 10; // скорость вращения
  //   let angle = 0;
  //   const animate = () => {

  //     if (angle >= MAX_ANGLE) {
  //       requestAnimationFrame(animate);
  //     } else {
  //       angle = MAX_ANGLE;
  //     };
      
  //     $rotate.css('transform', `rotate(${angle}deg)`);
  //     angle -= speed;
  //   }
  
  //   animate();
  // });

});



// ================= Carousel ============

//Обработка клика на стрелку вправо
$(document).on('click', ".carousel-button-right",function(){ 
	var carusel = $(this).parents('.carousel');
	right_carusel(carusel);
	return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".carousel-button-left",function(){ 
	var carusel = $(this).parents('.carousel');
	left_carusel(carusel);
	return false;
});
function left_carusel(carusel){
  var block_width = $(carusel).find('.carousel-block').outerWidth();
  $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
  $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
  $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();    
  $(carusel).find(".carousel-items").animate({left: "0px"}, 200); 
  
  var block_width = $(carusel).find('.carousel-wrapper__dot').outerWidth();
  $(carusel).find(".carousel-wrapper__dots-wrapper").animate( 200, function(){
    $(carusel).find(".carousel-wrapper__dots-wrapper .carousel-wrapper__dot").eq(0).clone().appendTo($(carusel).find(".carousel-wrapper__dots-wrapper")); 
    $(carusel).find(".carousel-wrapper__dots-wrapper .carousel-wrapper__dot").eq(0).remove();
  });
}
function right_carusel(carusel){
  var block_width = $(carusel).find('.carousel-block').outerWidth();
  $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
  $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
    $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
    $(carusel).find(".carousel-items").css({"left":"0px"}); 
  });

  var block_width = $(carusel).find('.carousel-wrapper__dot').outerWidth();
  $(carusel).find(".carousel-wrapper__dots-wrapper .carousel-wrapper__dot").eq(-1).clone().prependTo($(carusel).find(".carousel-wrapper__dots-wrapper"));
  $(carusel).find(".carousel-wrapper__dots-wrapper .carousel-wrapper__dot").eq(-1).remove();
}

$(function() {
//Раскомментируйте строку ниже, чтобы включить автоматическую прокрутку карусели
	// auto_right('.carousel:first');
})

// Автоматическая прокрутка
function auto_right(carusel){
	setInterval(function(){
		if (!$(carusel).is('.hover'))
			right_carusel(carusel);
	}, 3000)
}
// Навели курсор на карусель
$(document).on('mouseenter', '.carousel', function(){$(this).addClass('hover')})
//Убрали курсор с карусели
$(document).on('mouseleave', '.carousel', function(){$(this).removeClass('hover')})