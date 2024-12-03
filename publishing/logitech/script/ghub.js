$(document).ready(function() {
    $('.faq-tit').on('click', function() {
        $(this).siblings('.faq-cont').stop().slideToggle();
        $(this).toggleClass('arrow');
    });
});