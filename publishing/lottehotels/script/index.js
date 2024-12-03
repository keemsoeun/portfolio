$(document).ready(function() {
    // visual slide
    const visualSld = new Swiper('.visual-slide', {
        init: true,
        effect: 'fade',
        fadeEffect: { 
            crossFade: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 800,
        loop: true,
        pagination: {
            el: '.visual .pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.visual .navigation .next',
            prevEl: '.visual .navigation .prev',
        },
    });

    // intro slide
    const introSld = new Swiper('.intro-slide', {
        init: true,
        slidesPerView: 'auto',
        speed: 800,
        loop: true,
        pagination: {
            el: '.intro .pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.intro .navigation .next',
            prevEl: '.intro .navigation .prev',
        },
    });

    // dining slide
    const diningLft = new Swiper('.dining-lft .dining-slide', {
        init: true,
        effect: 'fade',
        fadeEffect: { 
            crossFade: true,
        },
        loop: true,
        slidesPerView: 'auto',
        pagination: {
            el: '.dining-lft .pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.dining-lft .navigation .next',
            prevEl: '.dining-lft .navigation .prev',
        },
        on: {
            slideChangeTransitionStart: function() {
                const currentSld = $('.dining-lft .dining-slide__itm.swiper-slide-active').attr('id');
                $('.dining-rgt__itm').hide();
                $('.dining-rgt__itm.' + currentSld).show();
            }
        },
    });

    const diningRgt = new Swiper('.dining-rgt__itm .dining-slide', {
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });
});