$(function() {
    // swiper
    const bullet = ['치매환자 등록', '제품 신청', 'QR코드 스캔'];
    const serviceSlide = new Swiper('.service-slide', {
        loop: true,
        speed: 500,
        autoHeight: true,
        navigation: {
            nextEl: '.service .next',
            prevEl: '.service .prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.service .pagination',
            clickable: true,
            renderBullet: function(index, className) {
                return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
            }
        }
    });
    serviceSlide.autoplay.stop();

    responsive();
    $(window).scroll(function() {
        responsive();

        // swiper
        $('.service-slide').each(function() {
            const bottom_of_elm = $(this).offset().top + $(this).outerHeight() / 3;
            const bottom_of_window = $(window).scrollTop() + $(window).height();
            if(bottom_of_window > bottom_of_elm) {
                serviceSlide.autoplay.start();
            }
        });
        $('.service-slide').hover(function() {
            serviceSlide.autoplay.stop();
        }, function() {
            serviceSlide.autoplay.start();
        })
    });
});

function responsive() {
    // scroll event
    $('.s-event').each(function() {
        const bottom_of_elm = $(this).offset().top + $(this).outerHeight() / 3;
        const bottom_of_window = $(window).scrollTop() + $(window).height();
        if(bottom_of_window > bottom_of_elm) {
            $(this).addClass('on');
        }
    });
}