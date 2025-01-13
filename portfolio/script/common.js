$(document).ready(function() {
    // header
    $('header').append(`
        <div class="inner">
            <h1><a href="/portfolio/index.html">KEEMSOEUN PORTFOLIO</a></h1>
            <nav class="gnb">
                <ul class="gnb-li">
                    <li><a href="/portfolio/portfolio/page/portfolio/portfolio.html">PORTFOLIO</a></li>
                    <li><a href="/portfolio/portfolio/page/about.html">ABOUT</a></li>
                    <li><a href="/portfolio/portfolio/page/contact.html">CONTACT</a></li>
                </ul>
            </nav>
            <button type="button" class="menu-view__btn">MENU</button>
        </div>
    `);


    // menu view
    $('.menu-view').append(`
        <div class="inner">
            <div class="menu-view__top">
                <button type="button" class="menu-view__close">CLOSE</button>
            </div>
            <div class="menu-view__menu">
                <ul>
                    <li><a href="/portfolio/index.html">HOME</a></li>
                    <li><a href="/portfolio/portfolio/page/portfolio/portfolio.html">PORTFOLIO</a></li>
                    <li><a href="/portfolio/portfolio/page/about.html">ABOUT</a></li>
                    <li><a href="/portfolio/portfolio/page/contact.html">CONTACT</a></li>
                </ul>
            </div>
            <div class="menu-view__btm">
                <ul>
                    <li><span>E-Mail.</span>keeemsoeun@gmail.com</li>
                    <li><span>Another E-Mail.</span>dobermannn@naver.com</li>
                    <li><span>Phone.</span>010-7919-9791</li>
                </ul>
            </div>
        </div>
    `);


    // footer
    $('footer').append(`
        <div class="inner">
            <div class="ft-top">
                <div class="ft-top__lft">
                    <button type="button" class="email-copy" id="copyEmail" data-clipboard-text="keeemsoeun@gmail.com">
                        <span>KEEEMSOEUN@</span>
                        <br/>
                        <span>
                            GMAIL.COM
                            <i>
                                <img src="/portfolio/portfolio/images/common/arrow_top_right_wh_ico.svg" alt="이메일 복사하기">
                                <img src="/portfolio/portfolio/images/common/arrow_top_right_wh_ico.svg" alt="">
                            </i>
                        </span>
                    </button>
                    <ul class="ft-contact">
                        <li><span>Another E-Mail.</span>dobermannn@naver.com</li>
                        <li><span>Phone.</span>010-7919-9791</li>
                    </ul>
                </div>
                <div class="ft-top__rgt">
                    <button type="button" class="top-btn" aria-label="맨 위로 이동">
                        <img src="/portfolio/portfolio/images/common/arrow_top_wh_ico.svg" alt="">
                        <img src="/portfolio/portfolio/images/common/arrow_top_wh_ico.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="ft-btm">
                <p class="copy">©2024 Keem-SoEun All Rights Reserved</p>
                <div class="update"><span>UPDATE.</span>2024.11</div>
            </div>
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


    // split
    $('.split').each(function(i) {
        const words = $(this).text().split('');
        for(var i = 0; i < words.length; i++) {
            if (words[i].length > 0) {
                $(this).parent().append('<span class="word">' + words[i] + '</span>');
            }
        }
        $(this).remove();
    });

    gsap.to('.split-area .word', {
        y: 0,
        stagger: .04,
        duration: 1,
    });
});