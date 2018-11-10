$(document).ready(function() {
  $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots: true,
  asNavFor: '.slider-nav',
  responsive: [
    {
      breakpoint: 768,
//сообщает, при какой ширине экрана нужно включать настройки
      settings: {
        dots: false,
      }
    }
  ]
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 768,
//сообщает, при какой ширине экрана нужно включать настройки
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    }
]
});
});
