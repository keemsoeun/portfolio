$(function() {
    // modal
    $('.modal-close').on('click', function() {
        $(this).parents('.modal').removeClass('on');
    });


    // select
    $('.select .current').on('click', function() {
        $(this).siblings('.select-list, .select-bg').addClass('on');
    });
    $('.select-close').on('click', function() {
        $(this).parents('.select').find('.select-list, .select-bg').removeClass('on');
    });
    $('.select ul a').on('click', function() {
        var currentTxt = $(this).text();
        $(this).parents('.select').find('.current span').text(currentTxt);
        $(this).parents('.select').find('.select-list, .select-bg').removeClass('on');
    })


    // form
    $('.txt-form input:not(:read-only)').click(function() {
        $('.txt-form').removeClass('focus');
        $(this).parents('.txt-form').addClass('focus');
    });
    $('html').click(function(e) {   
        if($(e.target).parents('.form-item').length < 1 && !$(e.target).hasClass('test')){   
            $('.txt-form').removeClass('focus');
        }
    });


    // tab
    $('.tab-btn').each(function() {
        $(this).find('li').first().find('a').addClass('on');
    });
    $('.tab-cont').each(function() {
        $(this).find('.tab-item').first().addClass('on');
    });
    $('.tab-btn a').on('click', function() {
        $(this).parents('.tab-btn').parent('.tab').children('.tab-btn').find('a').removeClass('on');
        $(this).addClass('on');
        var currentTab = $(this).attr('rel');
        $(this).parents('.tab-btn').parent('.tab').children('.tab-cont').children('.tab-item').removeClass('on');
        $(this).parents('.tab-btn').parent('.tab').children('.tab-cont').children('#' + currentTab).addClass('on');
    });
});