$(document).ready(function() {
    // gpro
    $('.gpro .product-tit a').on('click', function() {
        $(this).parents('.product-info').find('.product-cont').stop().slideUp();
        $(this).parents('li').find('.product-cont').stop().slideDown();

        const currentTab = $(this).attr('rel');
        $('.gpro .product-img .img-area').css('display', 'none');
        $('.gpro .product-img').find('#' + currentTab).css('display', 'block');
    });
    
    const bullet = ['keyboard_product_pagination_img_01.png', 'keyboard_product_pagination_img_02.png', 'keyboard_product_pagination_img_03.png', 'keyboard_product_pagination_img_04.png'];
    const keyboard = new Swiper('.keyboard .product-slide', {
        effect: 'fade',
        fadeEffect: { 
            crossFade: true 
        },
        slidesPerView: 1,
        pagination: {
            el: '.keyboard .product-pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<div class="' + className + '"><img src="../images/index/' + (bullet[index]) + '"></img></div>';
            },
        },
        on: {
            slideChangeTransitionEnd: function() {
                const currentSlide = $('.product-slide__item.swiper-slide-active').attr('id');
                $('.product-desc__item').removeClass('on');
                $('.product-desc__item.' + currentSlide).addClass('on');
            }
        },
    });

    const audio = new Swiper('.audio .product-slide', {
        slidesPerView: 'auto',
        spaceBetween: 240,
        centeredSlides: true,
        loop: true,
        on: {
            slideChangeTransitionEnd: function() {
                $('.product-slide__item .product-desc').css('display', 'none');
                $('.product-slide__item.swiper-slide-active .product-desc').css('display', 'block');
            }
        },
        navigation: {
            nextEl: '.audio .slide-navigation .next',
            prevEl: '.audio .slide-navigation .prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
});