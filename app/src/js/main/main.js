$(document).ready(function () {
  $('#pagepiling').pagepiling({
    normalScrollElements: '.pp-ns',
  });
  $('.pp-tableCell').css('height', 'auto');

  function mobWidths() {
    if ($(window).width() <= 767) {
      $('.js-ns').addClass('pp-ns');
    } else {
      $('.js-ns').removeClass('pp-ns');
    }
    $('.pp-ns').slimScroll({
      height: '75vh',
    });
  }
  $(window).on('load resize',mobWidths);





  $('#pagepiling .pageDown').click(function () {
    $.fn.pagepiling.moveSectionDown();
  });
  $('#pagepiling .pageUp').click(function () {
    $.fn.pagepiling.moveTo(1);
  });

  // Carousel begin
  $('.sofa-carousel .img-area').owlCarousel({
    items:1,
    stagePadding:0,
    margin:25,
    autoplay:0,
    mouseDrag:0,
    touchDrag:0,
    loop:1,
  });
  // .on('changed.owl.carousel', sofaChange);

  function sofaChange() {
    var sofaType = $('.sofa-carousel .img-area .owl-item.active').next().find('.sofa-carousel__type').text();
    var sofaName = $('.sofa-carousel .img-area .owl-item.active').next().find('.sofa-carousel__name').html();
    $('.sofa-carousel__title-block .sofa-carousel__type').text(sofaType);
    $('.sofa-carousel__title-block .sofa-carousel__name').html(sofaName);

  }

  $('.sofa-carousel .sofa-carousel__next').click(function () {
    sofaChange();
    $('.sofa-carousel .img-area').trigger('next.owl.carousel');
  });

  $('.sertificates-carousel').owlCarousel({
    items:4,
    stagePadding:75,
    margin:0,
    autoplay:0,
    mouseDrag:0,
    touchDrag:0,
    loop:1,
    slideBy:4,
    responsive:{
        0:{
            stagePadding:15,
            items:1,
        },
        768:{
            items:2,
        },
        1300:{
            items:4,
        },
        1500:{
            items:4,
        }
    },
  })

  // Переключение слайда по стрелке
  $('.home-sertificates .sofa-carousel__next').click(function () {
    $('.sertificates-carousel').trigger('next.owl.carousel');
  });

  // Наведение на стрелку
  $('.home-sertificates .sofa-carousel__next').on('mouseover', function () {
    $('.sertificates-carousel .owl-stage').css('left', '-25%');
    $('.home-sertificates .sofa-carousel__next').on('mouseleave', function () {
      $('.sertificates-carousel .owl-stage').css('left', '0');
    });
  });

  $('.news-carousel').owlCarousel({
    items:4,
    stagePadding:75,
    margin:0,
    autoplay:0,
    mouseDrag:0,
    touchDrag:0,
    loop:1,
    slideBy:4,
    responsive:{
        0:{
            stagePadding:15,
            items:1,
        },
        768:{
            items:2,
        },
        1300:{
            items:4,
        },
        1500:{
            items:4,
        }
    },
  })

  // Переключение слайда по стрелке
  $('.home-news .sofa-carousel__next').click(function () {
    $('.news-carousel').trigger('next.owl.carousel');
  });

  // Наведение на стрелку
  $('.home-news .sofa-carousel__next').on('mouseover', function () {
    $('.news-carousel .owl-stage').css('left', '-25%');
    $('.home-news .sofa-carousel__next').on('mouseleave', function () {
      $('.news-carousel .owl-stage').css('left', '0');
    });
  });
  // Carousel end

  //
  $('.side-menu__open').click(function () {
    $('.side-menu').toggleClass('opened');
  })

  $('.hamburger').click(function () {
		$(this).toggleClass('is-active');
		$('.top-menu').toggleClass('show');
	})

});
