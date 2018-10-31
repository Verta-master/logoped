//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
});

$('.menu__drop-btn').click(function() {
  $(this).toggleClass('menu__drop-btn--up');
  $(this).next().slideToggle();
});

//Header scroll
if (window.innerWidth < 766) {
  $(window).scroll(function(){
    if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
      $(".header").addClass('header--scroll');
    } else {
      $(".header").removeClass('header--scroll');
    };
  });
};

//Search
$('.search__btn').click(function(e) {
  e.stopPropagation();
  $('.search__input').toggleClass('search__input--show');
  $('.search__input').focus();
});

//Hide popups on escape and click outside
$("body").click(function(){
  $('.search__input').removeClass('search__input--show');
});

$("body").keydown(function(e) {
  if (e.keyCode == 27) {
    $('.search__input').removeClass('search__input--show');
  }
});
