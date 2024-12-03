$(document).ready(function() {
    // new sld
    const newSld = new Swiper('.new-sld', {
        spaceBetween: 150,
        loop: true,
        navigation: {
            nextEl: '.new .next',
            prevEl: '.new .prev',
        },
    });


    // laptop sld
    const laptopBullet = ['HP Spectre', 'HP Envy', 'HP Pavilion', 'OMEN', 'VICTUS'];

    const laptopSld = new Swiper('.laptop-sld', {
        effect: 'fade',
        fadeEffect: { 
            crossFade: true 
        },
        loop: true,
        navigation: {
            nextEl: '.laptop .next',
            prevEl: '.laptop .prev',
        },
        pagination: {
            el: '.laptop .pagination-bullet',
            clickable: true,
            renderBullet: function(index, className) {
                return '<div class="' + className + '"><span>' + (laptopBullet[index]) + '</span></div>';
            }
        },
    }); 
});