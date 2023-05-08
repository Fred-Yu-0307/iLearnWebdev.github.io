
var touchStartX = 0;
var touchEndX = 0;
var threshold = 50;

$('.card').on('touchstart', function(event) {
  touchStartX = event.originalEvent.touches[0].pageX;
});

$('.card').on('touchmove', function(event) {
  touchEndX = event.originalEvent.touches[0].pageX;
});

$('.card').on('touchend', function(event) {
  var distance = touchEndX - touchStartX;
  if (Math.abs(distance) > threshold) {
    if (distance < 0) {
      $(this).addClass('swipe-left');
    } else {
      $(this).addClass('swipe-right');
    }
  }
  touchStartX = 0;
  touchEndX = 0;
});

$('.card').on('transitionend', function(event) {
  $(this).removeClass('swipe-left swipe-right');
});


$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
    $(".navbar").addClass("navbar-scrolled");
  } else {
    $(".navbar").removeClass("navbar-scrolled");
  }
});




