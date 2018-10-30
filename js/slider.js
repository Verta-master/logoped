//Slider
var breakpoint = window.matchMedia('(max-width: 1024px)');
var newsSwiper;
var breakpointChecker = function() {
  if (breakpoint.matches === true) {
    if (newsSwiper !== undefined) newsSwiper.destroy(true, true);
    return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
};

var enableSwiper = function() {
  newsSwiper = new Swiper ('.slider', {
    navigation: {
    nextEl: '.slider__next',
    prevEl: '.slider__prev',
  },
  simulateTouch: false,
  preventClicks: false,
  preventClicksPropagation: false,
  slidesPerView: 'auto',
  spaceBetween: 20,
  })
};

breakpoint.addListener(breakpointChecker);
breakpointChecker();
