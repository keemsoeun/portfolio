$(document).ready(function() {
    // visual scroll down
    const scrollDown = new Swiper('.visual-btm .scroll-down', {
        freeMode: false,
        enteredSlides: true,
        speed: 5000,
        autoplay: {
            delay: 1,
        },
        loop: true,
        slidesPerView:'auto',
        allowTouchMove: false,
        disableOnInteraction: true
    });


    // about
    const about = gsap.timeline({
        scrollTrigger: {
            trigger: '.about',
            start: '30% 100%',
            end: '60% 0',
            scrub: true,
            invalidateOnRefresh: true,
        },
    });
    about.to('.about-tit__tit p:first-of-type', {
        'background-size': '180% 100%'
    }).to('.about-tit__tit p:last-of-type', {
        'background-size': '180% 100%'
    }, '-=0.3');

    
    // main prj
    const mainPrjItm = document.querySelectorAll('.main-prj__itm');
    const mainPrj = gsap.timeline({
        scrollTrigger: {
            trigger: '.main-prj',
            pin: true,
            scrub: true,
            start: 'top top',
            end: '200% top',
            invalidateOnRefresh: true,
        },
    });
    mainPrjItm.forEach(function(mainPrjEle, i) {
        mainPrj.to(mainPrjEle, {
            'top': function() {
                if (i == 0) {
                    return null;
                }
                return '0'
            }
        }, '-=0.5').to(mainPrjEle, {
            'filter': function () {
                if (i >= mainPrjItm.length - 1) {
                    return null;
                }
                return 'brightness(0.4)'
            },
            'transform': function() {
                if (i >= mainPrjItm.length - 1) {
                    return null;
                }
                return 'scale(0.95)'
            },
        });
    });


    // sub prj background
    const subPrjBg = gsap.timeline({
        scrollTrigger: {
            trigger: '.sub-prj .sticky-area',
            scrub: true,
            start: '-50% 50%',
            end: '-50% top',
            invalidateOnRefresh: true,
        },
    });
    subPrjBg.to('main', {
        'background': '#232323'
    });


    // sub prj tit
    const subPrjTit = gsap.timeline({
        scrollTrigger: {
            trigger: '.sub-prj',
            pin: true,
            scrub: true,
            start: 'top top',
            end: '300% top',
            invalidateOnRefresh: true,
        },
    });
    subPrjTit.fromTo('.sub-prj .sticky-area h3', {
        'transform': 'translateX(100vw)',
        duration: 1,
    }, {
        'transform': 'translateX(0)',
    }).to('.sub-prj__li', {
        'transform': 'translateY(-100%)',
        duration: 2,
    });


    // sub prj pointer
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    if(!isMobile) {
        gsap.set('.pointer .ico', {
            xPercent: 0,
            yPercent: 0,
        });
        let xIco = gsap.quickTo('.pointer .ico', 'x', {
            duration: 0.6,
            ease: 'power3',
        });
        let yIco = gsap.quickTo('.pointer .ico', 'y', {
            duration: 0.6,
            ease: 'power3',
        });
        window.addEventListener('mousemove', e => {
            xIco(e.clientX);
            yIco(e.clientY);
        });
    
        gsap.set('.pointer .txt', {
            xPercent: 0,
            yPercent: 0,
        });
        let xTxt = gsap.quickTo('.pointer .txt', 'x', {
            duration: 1,
            ease: 'power3',
        });
        let yTxt = gsap.quickTo('.pointer .txt', 'y', {
            duration: 1,
            ease: 'power3',
        });
        window.addEventListener('mousemove', e => {
            xTxt(e.clientX);
            yTxt(e.clientY);
        });
    
        $('.sub-prj__itm a').on('mouseover', function() {
            $('.pointer').css('opacity', '1');
        });
        $('.sub-prj__itm a').on('mouseleave', function() {
            $('.pointer').css('opacity', '0');
        });
    }


    // all prj animation
    const allPrj = gsap.timeline({
        scrollTrigger: {
            trigger: '.all-prj',
            start: '20% 80%',
            invalidateOnRefresh: true,
        },
    });
    allPrj.to('.all-prj__cont a div:first-of-type p', {
        'transform': 'translateY(0)',
    }).to('.all-prj__cont a div:last-of-type p', {
        'transform': 'translateY(0)',
    }, '-=0.3');
});