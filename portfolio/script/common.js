$(document).ready(function() {
    $('header').append(`
        <div class="inner">
            <h1><a href="/index.html">KEEMSOEUN PORTFOLIO</a></h1>
            <nav class="gnb">
                <ul class="gnb-li">
                    <li><a href="/portfolio_2024/portfolio/page/portfolio/portfolio.html">PORTFOLIO</a></li>
                    <li><a href="/portfolio_2024/portfolio/page/about.html">ABOUT</a></li>
                    <li><a href="/portfolio_2024/portfolio/page/contact.html">CONTACT</a></li>
                </ul>
            </nav>
            <button type="button" class="menu-view__btn">MENU</button>
        </div>
    `);




    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();

    window.addEventListener("resize", ScrollTrigger.update);


    // header menu view
    $('.menu-view__btn').click(function() {
        $('.menu-view').addClass('down');
    });

    $('.menu-view__close').click(function() {
        $('.menu-view').removeClass('down');  
    });


    $(window).resize(function() {
        const viewport = $(window).width();
        if (viewport > 768) {
            $('.menu-view').removeClass('down');  
        }
    });
    

    // scroll
    const lenis = new Lenis();

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);


    // accordion
    $('.accordion-itm:first-of-type').children('.accordion-tit').addClass('show');
    $('.accordion-itm:first-of-type').children('.accordion-cont').show();

    $('.accordion-tit').click(function() {
        $(this).toggleClass('show');
        $(this).siblings('.accordion-cont').slideToggle(400);
    });


    // footer email copy
    const emailCopy = new ClipboardJS('#copyEmail');
    
    emailCopy.on('success', function(e) {
        console.info('Text:', e.text);
    
        $('.toast').removeClass('red');
        $('.toast').children('p').empty().html('이메일 주소가 복사되었어요');
        setTimeout(function() {
            $('.toast').removeClass('show');
        }, 3000)
        $('.toast').addClass('show');
    });

    emailCopy.on('error', function(e) {
        $('.toast').addClass('red');
        $('.toast').children('p').empty().html('복사 오류, 텍스트 드래그 후 복사해주세요');
        setTimeout(function() {
            $('.toast').removeClass('show');
        }, 3000)
        $('.toast').addClass('show');
    });


    // footer top btn
    $('.top-btn').click(function() {
        $('html, body').animate({scrollTop:0}, '300');
    });
});