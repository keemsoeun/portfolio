$(document).ready(function() {
    $(window).resize(function() {
        dep2Size();
        header();
    });
});


// header
function dep2Size() {
    const hdMargin = parseInt($('header .inner').css('margin-left'));
    const hdPadding = parseInt($('header .inner').css('padding-left'));
    const lftWidth = $('.dep2-lft').innerWidth();
    const rgtWidth = $('.dep2-rgt').innerWidth();

    $('.hd-bg__lft').css('width', hdMargin + lftWidth);
    $('.hd-bg__rgt').css('width', hdMargin + rgtWidth);
}
dep2Size();


function header() {
    if (window.innerWidth > 1024) {
        const hdHeight = $('header').innerHeight();

        $('.hd-gnb .dep1-li > li > a').on('mouseover', function() {
            $('header').addClass('hover');

            $('.hd-gnb .dep2').css({
                'visibility': 'hidden',
                'opacity': '0',
            });
            $(this).siblings('.dep2').css({
                'visibility': 'visible',
                'opacity': '1',
            });

            const dep2Height = $(this).siblings('.dep2').innerHeight();
            $('.hd-wrap').css('height', dep2Height + hdHeight);
        });

        $('header').on('mouseleave', function() {
            $('header').removeClass('hover');

            $('.hd-gnb .dep2').css({
                'visibility': 'hidden',
                'opacity': '0',
            });

            $('.hd-wrap').css('height', hdHeight);
        });
    } else {
        $('.hd-menu').click(function() {
            $('.menu-view').addClass('on');
        });

        $('.menu-view__close').click(function() {
            $('.menu-view').removeClass('on');
        });
        
        $('.menu-view .dep1-tit').click(function() {
            $(this).siblings('.dep2').stop().slideToggle();
            $(this).find('.gnb-arrow').toggleClass('up');
        });
    }
}
header();