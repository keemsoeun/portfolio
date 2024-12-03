$(document).ready(function() {
    // wedding slide, tab
    $('.wedding-slide').each(function(index) {
        let $this = $(this);
        $this.parent('.wedding-lft__itm').addClass(`wedding-lft__itm${index + 1}`);
        const weddingSld = new Swiper(`.wedding-lft__itm${index + 1} .wedding-slide`, {
            effect: 'fade',
            loop: true,
            fadeEffect: { 
                crossFade: true,
            },
            slidesPerView: 1,
            navigation: {
                nextEl: `.wedding-lft__itm${index + 1} .next`,
                prevEl: `.wedding-lft__itm${index + 1} .prev`,
            },
            pagination: {
                el: `.wedding-lft__itm${index + 1} .pagination`,
                type: "fraction",
            },
        });
    });

    $('.about-wedding .tab-btn li a').on('click', function() {
        const currentTab = $(this).attr('rel');
        $('.wedding-lft__itm').hide().siblings('#' + currentTab).show();
    });

    // club
    $('.about-club .img-hover__area .img-area').on('mouseover, click', function() {
        $('.about-club .img-hover__area .img-area').removeClass('on');
        $(this).addClass('on');
    });
});