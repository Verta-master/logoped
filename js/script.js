//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
});

$('.menu__drop-btn').click(function() {
  $(this).toggleClass('menu__drop-btn--up');
  $(this).next().slideToggle();
});
