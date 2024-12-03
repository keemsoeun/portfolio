$(document).ready(function() {
    // intro slide
    const detailSld = new Swiper('.detail-slide', {
        effect: 'fade',
        fadeEffect: { 
            crossFade: true 
        },
        slidesPerView: 'auto',
        speed: 800,
        loop: true,
        pagination: {
            el: '.detail-intro .pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.detail-intro .navigation .next',
            prevEl: '.detail-intro .navigation .prev',
        },
    });
});