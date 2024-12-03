$(document).ready(function() {
    // detail 1
    $('.product-gallery__main img').first().addClass('show');
    $('.product-gallery__thumbs li').on('click', function() {
        const imgIdx = $(this).index();
        $('.product-gallery__main img').removeClass('show');
        $('.product-gallery__main img').eq(imgIdx).addClass('show');
    });

    // detail 2
    const detail2 = new Swiper('.detail-2 .video-slide', {
        effect: 'fade',
        fadeEffect: { 
            crossFade: true 
        },
        slidesPerView: 'auto',
        loop: true,
        navigation: {
            nextEl: '.detail-2 .next',
            prevEl: '.detail-2 .prev',
        },
        pagination: {
            el: ".detail-2 .pagination",
            type: "fraction",
                renderFraction: (currentClass, totalClass) => {
                    return '<span class="' + currentClass + '"></span>' + '<span class="line"></span>' + '<span class="' + totalClass + '"></span>'
            }
        },
        on: {
            init: function() {
                $('.detail-2 .swiper-pagination-current, .detail-2 .swiper-pagination-total').prepend('0');
            },
            slideChange: function() {
                $('.detail-2 .swiper-pagination-current, .detail-2 .swiper-pagination-total').prepend('0');
            },
        },
    });

    // detail 5
    const detail5 = new Swiper('.detail-5 .slide-area', {
        effect: 'fade',
        fadeEffect: { 
            crossFade: true 
        },
        autoHeight: true,
        slidesPerView: 'auto',
        loop: true,
        navigation: {
            nextEl: '.detail-5 .next',
            prevEl: '.detail-5 .prev',
        },
        pagination: {
            el: ".detail-5 .pagination",
            type: "fraction",
                renderFraction: (currentClass, totalClass) => {
                    return '<span class="' + currentClass + '"></span>' + '<span class="line"></span>' + '<span class="' + totalClass + '"></span>'
            }
        },
        on: {
            init: function() {
                $('.detail-5 .swiper-pagination-current, .detail-5 .swiper-pagination-total').prepend('0');
            },
            slideChange: function() {
                $('.detail-5 .swiper-pagination-current, .detail-5 .swiper-pagination-total').prepend('0');
            },
            slideChangeTransitionStart: function() {
                const activeSld = $('.detail-5 .swiper-slide-active').attr('id');
                $('.detail-5 .pointer').fadeOut();
                $('.detail-5 #pnt-' + activeSld).fadeIn();
            },
        },
    });
});