$(document).ready(function() {
    // prj length
    const prjList = $('.prj-li > li').length;
    $('.prj-length span').html(prjList);


    // prj cate
    $('.sub-head__cate a').first().addClass('on');
    $('.sub-head__cate a').on('click', function() {
        $('.sub-head__cate a').removeClass('on');
        $(this).addClass('on');

        const currentTab = $(this).attr('rel');

        $('.prj-li li').css('display', 'none');
        $('.cate-' + currentTab).css('display', 'block');
    });

    $('.sub-head__cate .all').click(function() {
        $('.prj-li li').css('display', 'block');
    });
});