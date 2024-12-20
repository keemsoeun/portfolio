$(document).ready(function() {
	responsive();

    $(window).scroll(function() {
		responsive();
    });

	// header
	var st = 0;
	$(window).scroll(function(){
		if(st < $(window).scrollTop()){
			$('header').css('transform', 'translateY(-100%)');
			st = $(window).scrollTop();
		} else {
			$('header').css('transform', 'translateY(0)');
			st = $(window).scrollTop();
		}
	});

	// visual
	const visual = new Swiper('.txt-rolling', {
		loop: true,
		direction: "vertical",
		touchRatio: 0,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
	});

	// business
	$('.tab-btn').on('click', function() {
		$('.tab-btn').removeClass('on');
		$(this).addClass('on');
		const currentTab = $(this).find('a').attr('rel');
		$('.tab-item').removeClass('on');
		$('#' + currentTab).addClass('on');
	});

  // solution
  const solution = new Swiper('.solution-slide', {
      slidesPerView: '1.5',
      loop: true,
      spaceBetween: 40,
      speed: 800,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.solution .pagination',
        type: "fraction",
      },
      navigation: {
        nextEl: '.solution .next',
        prevEl: '.solution .prev',
      },
      on: {
          slideChangeTransitionEnd: function() {
              const txtId = $('.solution .img-wrap.swiper-slide-active').attr('id');
              $('.solution .txt-box').removeClass('on');
              $('#' + txtId + '_txt').addClass('on');
              $('.solution .img-wrap.swiper-slide').removeClass('on');
              $('.solution .img-wrap.swiper-slide-active').addClass('on');
          }
      },
      breakpoints: {
        1281: {
			spaceBetween: 40,
			slidesPerView: '1.5',
        },
		769: {
			spaceBetween: 20,
			slidesPerView: '1.5',
		},
        0: {
			spaceBetween: 12,
			slidesPerView: '1.1',
        }
      }
  });

  // userchk
	$('.userchk-btn').click(function () {
			$('.modal-userchk').addClass('on');
			$('body').addClass('scroll').on('scroll touchmove mousewheel', function (e) {
				event.preventDefault();
				event.stopPropagation();
				return false;
			});
		});
	$('.modal-close').on('click', function() {
		$(this).parents('.modal').removeClass('on');
		$('body').removeClass('scroll').off('scroll touchmove mousewheel');
	});
});

function responsive() {
	if(window.innerWidth > 960) {
		$('#fullpage').fullpage({
			licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
			navigation: true,
			responsiveWidth: 961,
			normalScrollElements: '.contact .sec-right',
			menu: '#menu',
			anchors: ['Visual', 'About', 'Business', 'Solution', 'Address', 'Reference', 'Contact'],
				'afterLoad': function() {
				$(this).addClass('on');
			},
			'onLeave': function (anchorLink, index) {
				if (index == 2 || index == 4 || index == 6 || index == 7){
					$('header, .scroll-animation, #fp-nav').addClass('enter');
				} else if (index == 1 || index == 3 || index == 5) {
					$('header, .scroll-animation, #fp-nav').removeClass('enter');
				}
			},
		});

		
		$('header').removeClass('on');
	} else {
		$('section').each(function() {
			const bottom_of_elm = $(this).offset().top + $(this).outerHeight() / 6;
			const bottom_of_window = $(window).scrollTop() + $(window).height();
			if(bottom_of_window > bottom_of_elm) {
				$(this).addClass('on');
			}
		});

		
		$('header').addClass('on');
	}
}