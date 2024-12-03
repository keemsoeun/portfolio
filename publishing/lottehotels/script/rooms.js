$(document).ready(function() {
    // rooms cate slide
    $('.rooms-cate .rooms-slide').each(function(index) {
        let $this = $(this);
        $this.parent('.rooms-rgt').addClass(`slide-area-${index + 1}`);
        $this.parents('.rooms-cate__itm').addClass(`rooms-cate-${index + 1}`);
        const roomsSlide = new Swiper(`.slide-area-${index + 1} .rooms-slide`, {
            effect: 'fade',
            loop: true,
            fadeEffect: { 
                crossFade: true,
            },
            slidesPerView: 1,
            navigation: {
                nextEl: `.slide-area-${index + 1} .next`,
                prevEl: `.slide-area-${index + 1} .prev`,
            },
            pagination: {
                el: `.slide-area-${index + 1} .pagination`,
                type: "fraction",
            },
            on: {
                slideChangeTransitionStart: function() {
                    const currentSlide = $(`.slide-area-${index + 1} .swiper-slide-active`).attr('id');
                    $(`.rooms-cate-${index + 1}`).find('.rooms-info').hide();
                    $(`.rooms-cate-${index + 1}`).find('.' + currentSlide).show();
                }
            },
        });
    });
});