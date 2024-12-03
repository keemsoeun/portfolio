$(document).ready(function() {
    // email copy
    const contactEmail = new ClipboardJS('#contactEmail');

    contactEmail.on('success', function(e) {
        console.info('Text:', e.text);
    
        $('.toast').removeClass('red');
        $('.toast').children('p').empty().html('이메일 주소가 복사되었어요');
        setTimeout(function() {
            $('.toast').removeClass('show');
        }, 3000)
        $('.toast').addClass('show');
    });

    contactEmail.on('error', function(e) {
        $('.toast').addClass('red');
        $('.toast').children('p').empty().html('복사 오류, 텍스트 드래그 후 복사해주세요');
        setTimeout(function() {
            $('.toast').removeClass('show');
        }, 3000)
        $('.toast').addClass('show');
    });


    // another email copy
    const contactAnother = new ClipboardJS('#contactAnother');

    contactAnother.on('success', function(e) {
        console.info('Text:', e.text);
    
        $('.toast').removeClass('red');
        $('.toast').children('p').empty().html('이메일 주소가 복사되었어요');
        setTimeout(function() {
            $('.toast').removeClass('show');
        }, 3000)
        $('.toast').addClass('show');
    });

    contactAnother.on('error', function(e) {
        $('.toast').addClass('red');
        $('.toast').children('p').empty().html('복사 오류, 텍스트 드래그 후 복사해주세요');
        setTimeout(function() {
            $('.toast').removeClass('show');
        }, 3000)
        $('.toast').addClass('show');
    });


    // phone copy
    const contactPhone = new ClipboardJS('#contactPhone');

    contactPhone.on('success', function(e) {
        console.info('Text:', e.text);
    
        $('.toast').removeClass('red');
        $('.toast').children('p').empty().html('휴대폰 번호가 복사되었어요');
        setTimeout(function() {
            $('.toast').removeClass('show');
        }, 3000)
        $('.toast').addClass('show');
    });

    contactPhone.on('error', function(e) {
        $('.toast').addClass('red');
        $('.toast').children('p').empty().html('복사 오류, 텍스트 드래그 후 복사해주세요');
        setTimeout(function() {
            $('.toast').removeClass('show');
        }, 3000)
        $('.toast').addClass('show');
    });
})