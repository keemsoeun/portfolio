$(window).on('load', function() {
    // tab
    tabHeight();
    $(window).resize(function() {
        tabHeight();
    });
    function tabHeight() {
        $('.tab-cont').each(function() {
            const heightArray = $('.tab-cont').map(function() {
                return $(this).height();
            }).get();
            const maxHeight = Math.max.apply(Math, heightArray);
            $(this).parents('.tab-area').find('.tab-cont__area').css('height', maxHeight);
        });
    }
    $('.tab-btn').find('a').first().addClass('on');
    $('.tab-cont').first().addClass('show');
    $('.tab-btn a').on('click', function() {
        $(this).parents('.tab-area').find('.tab-btn a').removeClass('on');
        $(this).addClass('on');
        const currentTab = $(this).parent('li').index();
        $(this).parents('.tab-area').find('.tab-cont').removeClass('show');
        $(this).parents('.tab-area').find('.tab-cont').eq(currentTab).show().addClass('show');
    });
});