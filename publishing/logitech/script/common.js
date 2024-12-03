$(document).ready(function() {
    // select
    $('.select .current').on('click', function() {
        $(this).siblings('ul').stop().slideDown(200);
    });
    $('.select ul li button').on('click', function() {
        const currentTxt = $(this).html();
        $(this).parents('.select').find('.current span').html(currentTxt);
        $(this).parents('.select').find('ul').hide();
    });
    $('html').click(function(e){
        if($(e.target).parents('.select').length < 1){
            $('.select ul').hide();
        }
    });

    // accordion
    $('.accordion-tit').on('click', function() {
        $(this).toggleClass('down');
        $(this).siblings('.accordion-cont').stop().slideToggle();
    });

    // hidden txt
    $('.hidden-txt').hover(function() {
        $(this).children('span').show();
    }, function() {
        $(this).children('span').hide();
    });

    // product li slide
    $('.product-li').each(function(index) {
        let $this = $(this);
        $this.parent('.product-slide__area').addClass(`slide-${index}`);
        const swiper = new Swiper(`.slide-${index} .product-li`, {
            slidesPerView: 'auto',
            navigation: {
                nextEl: `.slide-basic-${index} .slide-next`,
                prevEl: `.slide-basic-${index} .slide-prev`,
            },
        });
    });
});