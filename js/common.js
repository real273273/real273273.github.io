$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		loop:true,
		items: 1,
		margin:130,
		stagePadding: 130,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		navContainer: '#customNav',
		responsive: {
	   // > 0
	    0 : {
	      dots: false,
	      margin:30,
	      stagePadding: 30,
	    },
	    // > 768
	    768 : {
	    	margin:130,
	    	stagePadding: 130,
        dots: true,
	    }
		}
	});
});


    $(document).on('ready', function() {
      
     $('.slider-single').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  adaptiveHeight: true,
  infinite: false,
  useTransform: true,
  speed: 300,
   autoplay: false,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
 });
    // $('.slick-next').hide();
    // $('.slick-prev').hide();

 $('.slider-nav')
  .on('init', function(event, slick) {
    $('.slider-nav .slick-slide.slick-current').addClass('is-active');
  })
  .slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: false,
    infinite: false,
     asNavFor: '.slider-single',
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      }
    },{
      breakpoint: 940,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }, {
      breakpoint: 640,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }, {
      breakpoint: 420,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
    }
    }]
  });

 $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
  $('.slider-nav').slick('slickGoTo', currentSlide);
  var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
  $('.slider-nav .slick-slide.is-active').removeClass('is-active');
  $(currrentNavSlideElem).addClass('is-active');
 });

 $('.slider-nav').on('click', '.slick-slide', function(event) {
  event.preventDefault();
  var goToSingleSlide = $(this).data('slick-index');

  $('.slider-single').slick('slickGoTo', goToSingleSlide);
 });
 
 $('.popup').magnificPopup({
  removalDelay: 450,
  mainClass: 'mfp-fade'
 }); 

$("#form").submit(function () {
  $.ajax({
    type: "POST",
    url: "mail.php",
    data: $(this).serialize()
  }).done(function(){
    alert("Спасибл");
    setTimeout(function(){
      $.magnificPopup.close();
        },1000);

  });
  return false;
})



});
