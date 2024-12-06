$(document).ready(function() {
    footerLink();
    $(window).resize(function() {
        footerLink();
    });


    // header
    $('header').append(`
        <div class="inner">
            <a class="menu-view__btn" href="javascript:void(0);"></a>
            <h1 class="hd-logo">
                <a href="/portfolio_2024/publishing/logitech/page/index.html">
                    <img src="/portfolio_2024/publishing/logitech/images/common/logo_wh.svg" alt="logitech G">
                    <img src="/portfolio_2024/publishing/logitech/images/common/logo_bk.svg" alt="logitech G">
                </a>
            </h1>
            <a class="hd-sch__btn" href="javascript:void(0);"></a>
        </div>
        <div class="menu-view">
            <button class="menu-view__close" type="button"></button>
            <div class="inner">
                <div class="menu-view__form">
                    <form>
                        <div class="form">
                            <input type="text" placeholder="검색어 입력">
                            <button type="button">검색</button>
                        </div>
                    </form>
                </div>
                <ul class="menu-view__li">
                    <li>
                        <div class="dep1">
                            <a href="/portfolio_2024/publishing/logitech/page/product.html">제품</a>
                            <button class="dep1-arrow" type="button"></button>
                        </div>
                        <div class="dep2">
                            <div class="inner">
                                <ul class="dep2-li">
                                    <li>
                                        <a href="/portfolio_2024/publishing/logitech/page/product.html">게이밍 마우스 및 마우스패드</a>
                                        <ul class="dep3-li">
                                            <li><a href="/portfolio_2024/publishing/logitech/page/product.html">게이밍 마우스</a></li>
                                            <li><a href="/portfolio_2024/publishing/logitech/page/product.html">게이밍 마우스패드</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/portfolio_2024/publishing/logitech/page/product.html">게이밍 키보드</a>
                                        <ul class="dep3-li">
                                            <li><a href="/portfolio_2024/publishing/logitech/page/product.html">무선 키보드</a></li>
                                            <li><a href="/portfolio_2024/publishing/logitech/page/product.html">블루투스 키보드</a></li>
                                            <li><a href="/portfolio_2024/publishing/logitech/page/product.html">유선 키보드</a></li>
                                            <li><a href="/portfolio_2024/publishing/logitech/page/product.html">모든 게이밍 키보드</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/portfolio_2024/publishing/logitech/page/product.html">게이밍 헤드셋 및 오디오</a>
                                        <ul class="dep3-li">
                                            <li><a href="/portfolio_2024/publishing/logitech/page/product.html">PC 헤드셋</a></li>
                                            <li><a href="/portfolio_2024/publishing/logitech/page/product.html">콘솔 헤드셋</a></li>
                                            <li><a href="/portfolio_2024/publishing/logitech/page/product.html">모든 오디오 제품</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/portfolio_2024/publishing/logitech/page/product.html">레이싱 휠 및 시뮬레이션</a>
                                        <ul class="dep3-li">
                                            <li><a href="/portfolio_2024/publishing/logitech/page/product.html">레이싱 휠</a></li>
                                            <li><a href="/portfolio_2024/publishing/logitech/page/product.html">시뮬레이션</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/portfolio_2024/publishing/logitech/page/product.html">스트리밍</a>
                                        <ul class="dep3-li">
                                            <li><a href="/portfolio_2024/publishing/logitech/page/product.html">마이크</a></li>
                                            <li><a href="/portfolio_2024/publishing/logitech/page/product.html">카메라 및 조명</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/portfolio_2024/publishing/logitech/page/product.html">클라우드 게이밍</a>
                                        <ul class="dep3-li">
                                            <li><a href="/portfolio_2024/publishing/logitech/page/product.html">게임패드 및 컨트롤러</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/portfolio_2024/publishing/logitech/page/product.html">게이밍 가구</a>
                                        <ul class="dep3-li">
                                            <li><a href="/portfolio_2024/publishing/logitech/page/product.html">데스크톱</a></li>
                                            <li><a href="/portfolio_2024/publishing/logitech/page/product.html">레이싱</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/portfolio_2024/publishing/logitech/page/product.html">액세서리</a>
                                        <ul class="dep3-li">
                                            <li><a href="/portfolio_2024/publishing/logitech/page/product.html">키보드 액세서리</a></li>
                                            <li><a href="/portfolio_2024/publishing/logitech/page/product.html">오디오 액세서리</a></li>
                                            <li><a href="/portfolio_2024/publishing/logitech/page/product.html">마이크 액세서리</a></li>
                                            <li><a href="/portfolio_2024/publishing/logitech/page/product.html">케이블 + 케이스</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <div class="dep2-lft">
                                    <figure>
                                        <img src="/portfolio_2024/publishing/logitech/images/common/header/dep2_lft_img_01.png" alt="">
                                        <figcaption>시리즈 구매하기</figcaption>
                                    </figure>
                                    <ul>
                                        <li><a href="javascript:void(0);">PRO 시리즈</a></li>
                                        <li><a href="javascript:void(0);">ASTRO 시리즈</a></li>
                                        <li><a href="javascript:void(0);">시뮬레이션 레이싱</a></li>
                                        <li><a href="javascript:void(0);">게임, 스트리밍 및 제작</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="dep1">
                            <a href="/portfolio_2024/publishing/logitech/page/light.html">둘러보기</a>
                            <button class="dep1-arrow" type="button"></button>
                        </div>
                        <div class="dep2">
                            <div class="inner">
                                <ul class="dep2-li">
                                    <li>
                                        <a href="/portfolio_2024/publishing/logitech/page/light.html">게이밍 마우스 및 마우스패드</a>
                                        <ul class="dep3-li">
                                            <li><a href="/portfolio_2024/publishing/logitech/page/light.html">HERO 센서</a></li>
                                            <li><a href="/portfolio_2024/publishing/logitech/page/light.html">LIGHTSPEED</a></li>
                                            <li><a href="/portfolio_2024/publishing/logitech/page/light.html">LIGHTSYNC</a></li>
                                            <li><a href="/portfolio_2024/publishing/logitech/page/light.html">POWERPLAY</a></li>
                                            <li><a href="/portfolio_2024/publishing/logitech/page/light.html">LIGHTFORCE</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/portfolio_2024/publishing/logitech/page/light.html">게이밍 키보드</a>
                                        <ul class="dep3-li">
                                            <li><a href="/portfolio_2024/publishing/logitech/page/light.html">LIGHTSPEED</a></li>
                                            <li><a href="/portfolio_2024/publishing/logitech/page/light.html">LIGHTSYNC</a></li>
                                            <li><a href="/portfolio_2024/publishing/logitech/page/light.html">기계식 스위치</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/portfolio_2024/publishing/logitech/page/light.html">게이밍 헤드셋 및 오디오</a>
                                        <ul class="dep3-li">
                                            <li><a href="/portfolio_2024/publishing/logitech/page/light.html">PRO-G 게이밍 오디오</a></li>
                                            <li><a href="/portfolio_2024/publishing/logitech/page/light.html">Blue Vo!ce</a></li>
                                            <li><a href="/portfolio_2024/publishing/logitech/page/light.html">LIGHTSPEED</a></li>
                                            <li><a href="/portfolio_2024/publishing/logitech/page/light.html">LIGHTSYNC</a></li>
                                            <li><a href="/portfolio_2024/publishing/logitech/page/light.html">LIGHTFORM(ILP)</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/portfolio_2024/publishing/logitech/page/light.html">스트리밍</a>
                                        <ul class="dep3-li">
                                            <li><a href="/portfolio_2024/publishing/logitech/page/light.html">LIGHTSYNC</a></li>
                                            <li><a href="/portfolio_2024/publishing/logitech/page/light.html">Blue Vo!ce</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="/portfolio_2024/publishing/logitech/page/light.html">레이싱 휠</a>
                                        <ul class="dep3-li">
                                            <li><a href="/portfolio_2024/publishing/logitech/page/light.html">TRUEFORCE</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <div class="dep2-lft">
                                    <figure>
                                        <img src="/portfolio_2024/publishing/logitech/images/common/header/dep2_lft_img_02.png" alt="">
                                        <figcaption>커뮤니티</figcaption>
                                    </figure>
                                    <ul>
                                        <li><a href="javascript:void(0);">Logitech G 챌린지</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="dep1">
                            <a href="/portfolio_2024/publishing/logitech/page/ghub.html">소프트웨어</a>
                            <button class="dep1-arrow" type="button"></button>
                        </div>
                        <div class="dep2">
                            <div class="inner">
                                <ul class="dep2-li wide">
                                    <li>
                                        <a href="/portfolio_2024/publishing/logitech/page/ghub.html">
                                            <div class="img-area"><img src="/portfolio_2024/publishing/logitech/images/common/header/dep2_menu3_img_01.png" alt=""></div>
                                            G HUB
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/portfolio_2024/publishing/logitech/page/ghub.html">
                                            <div class="img-area"><img src="/portfolio_2024/publishing/logitech/images/common/header/dep2_menu3_img_02.png" alt=""></div>
                                            Streamlabs
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/portfolio_2024/publishing/logitech/page/ghub.html">
                                            <div class="img-area"><img src="/portfolio_2024/publishing/logitech/images/common/header/dep2_menu3_img_03.png" alt=""></div>
                                            Mixline
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/portfolio_2024/publishing/logitech/page/ghub.html">
                                            <div class="img-area"><img src="/portfolio_2024/publishing/logitech/images/common/header/dep2_menu3_img_04.png" alt=""></div>
                                            ASTRO 시리즈 소프트웨어
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="dep1">
                            <a href="">지원</a>
                            <button class="dep1-arrow" type="button"></button>
                        </div>
                        <div class="dep2">
                            <div class="inner">
                                <ul class="dep2-li wide">
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div class="img-area"><img src="/portfolio_2024/publishing/logitech/images/common/header/dep2_menu4_img_01.png" alt=""></div>
                                            지원 센터
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:void(0);">
                                            <div class="img-area"><img src="/portfolio_2024/publishing/logitech/images/common/header/dep2_menu4_img_02.png" alt=""></div>
                                            제품 등록
                                        </a>
                                    </li>
                                    <li>
                                        <a href="v">
                                            <div class="img-area"><img src="/portfolio_2024/publishing/logitech/images/common/header/dep2_menu4_img_03.png" alt=""></div>
                                            Logi ID 생성
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="hd-search">
            <div class="inner">
                <form>
                    <div class="form">
                        <input type="text" placeholder="검색어 입력">
                        <button type="button">검색</button>
                    </div>
                </form>
            </div>
        </div>
    `);

    let lastScrollTop = 0, delta = 15;
    $(window).scroll(function(event){
        const st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) {
            return;
        } else if ((st > lastScrollTop) && (lastScrollTop > 0)) {
            $('header').css('top', -$('header').outerHeight());
        } else {
            $('header').css('top', '0');
        }
        lastScrollTop = st;

        if ($(window).scrollTop() > 150){
            $('header').addClass('scroll');
        } else {
            $('header').removeClass('scroll');
        }
    });
    
    // search
    $('.hd-sch__btn').on('click', function() {
        $('.menu-view').hide();
        $('.hd-search').fadeIn(200);
        $('header').addClass('on');
    });

    // menu view
    $('.menu-view__li .dep2').hide().first().show();
    $('.dep1-arrow').first().addClass('on');
    $('.menu-view__btn').on('click', function() {
        $('.hd-search').hide(0);
        $('.menu-view').fadeIn(200);
        $('header').addClass('on');
        $('body').css('overflow', 'hidden');
    });
    $('.menu-view__close').on('click', function() {
        $('.menu-view').fadeOut(200);
        $('header').removeClass('on');
        $('body').css('overflow', 'auto');
    });

    if (window.innerWidth > 1280) {
        $('.menu-view__li .dep1 a').on('mouseover', function() {
            $('.menu-view__li .dep2').hide();
            $(this).parents('li').find('.dep2').show();
        });

        $('header').on('mouseleave', function() {
            $('.hd-search').fadeOut(200);
            $('.menu-view').fadeOut(200);
            $('header').removeClass('on');
        });
    } else if (window.innerWidth <= 1280) {
        $('.dep1-arrow').on('click', function() {
            $('.dep1-arrow').removeClass('on');
            $('.menu-view__li .dep2').stop().slideUp();
            $(this).parents('li').find('.dep2').stop().slideDown();
            $(this).toggleClass('on');
        });
    }


    // footer
    $('footer').append(`
        <div class="inner">
            <div class="ft-cont">
                <div class="ft-left">
                    <div class="logo"><img src="/portfolio_2024/publishing/logitech/images/common/footer/ft_logo.svg" alt="logitech G"></div>
                    <div class="news-letter">
                        <form>
                            <div class="form">
                                <input type="email" placeholder="이메일 주소">
                                <button type="button">구독</button>
                            </div>
                            <label for="letter" class="checkbox">
                                <input type="checkbox" id="letter">
                                <span>로지텍G에서 제품, 뉴스 등에 대한 이메일을 받고 싶습니다.</span>
                            </label>
                        </form>
                    </div>
                </div>
                <ul class="link">
                    <li>
                        <p>로지텍 G</p>
                        <ul>
                            <li><a href="javascript:void(0);">소개</a></li>
                            <li><a href="javascript:void(0);">연락처</a></li>
                            <li><a href="javascript:void(0);">채용</a></li>
                            <li><a href="javascript:void(0);">파트너 개발자 랩</a></li>
                            <li><a href="javascript:void(0);">사이트맵</a></li>
                            <li><a href="javascript:void(0);">투자자</a></li>
                        </ul>
                    </li>
                    <li>
                        <p>약관</p>
                        <ul>
                            <li><a href="javascript:void(0);">이용약관</a></li>
                            <li><a href="javascript:void(0);">웹 개인정보 보호정책</a></li>
                            <li><a href="javascript:void(0);">제품 개인정보 보호정책</a></li>
                            <li><a href="javascript:void(0);">쿠키 설정</a></li>
                            <li><a href="javascript:void(0);">이메일 설정</a></li>
                            <li><a href="javascript:void(0);">이메일 등록 페이지</a></li>
                        </ul>
                    </li>
                    <li>
                        <p>지속 가능성</p>
                        <ul>
                            <li><a href="javascript:void(0);">지속 가능성</a></li>
                            <li><a href="javascript:void(0);">재활용</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="ft-btm">
                <p class="copy">© 2023 로지텍. All rights reserved</p>
                <ul class="sns">
                    <li><a href="javascript:void(0);"><img src="/portfolio_2024/publishing/logitech/images/common/footer/ft_sns_01.svg" alt=""></a></li>
                    <li><a href="javascript:void(0);"><img src="/portfolio_2024/publishing/logitech/images/common/footer/ft_sns_02.svg" alt=""></a></li>
                    <li><a href="javascript:void(0);"><img src="/portfolio_2024/publishing/logitech/images/common/footer/ft_sns_03.svg" alt=""></a></li>
                    <li><a href="javascript:void(0);"><img src="/portfolio_2024/publishing/logitech/images/common/footer/ft_sns_04.svg" alt=""></a></li>
                </ul>
            </div>
        </div>
    `);


    // footer
    function footerLink() {
        if(window.innerWidth <= 480) {
            $('.ft-cont .link > li').click(function() {
                $('.ft-cont .link > li > ul').hide();
                $(this).find('ul').show();
            });
        } else if(window.innerWidth > 480) {
            $('.ft-cont .link > li').off('click');
            $('.ft-cont .link > li > ul').show();
        }
    }
    footerLink();


    // select
    $('.select .current').on('click', function() {
        $(this).siblings('ul').stop().slideDown(200);
    });
    $('.select ul li button').on('click', function() {
        const currentTxt = $(this).html();
        $(this).parents('.select').find('.current span').html(currentTxt);
        $(this).parents('.select').find('ul').hide();
    });
    $('html').click(function(e){
        if($(e.target).parents('.select').length < 1){
            $('.select ul').hide();
        }
    });


    // accordion
    $('.accordion-tit').on('click', function() {
        $(this).toggleClass('down');
        $(this).siblings('.accordion-cont').stop().slideToggle();
    });


    // hidden txt
    $('.hidden-txt').hover(function() {
        $(this).children('span').show();
    }, function() {
        $(this).children('span').hide();
    });


    // product li slide
    $('.product-li').each(function(index) {
        let $this = $(this);
        $this.parent('.product-slide__area').addClass(`slide-${index}`);
        const swiper = new Swiper(`.slide-${index} .product-li`, {
            slidesPerView: 'auto',
            navigation: {
                nextEl: `.slide-basic-${index} .slide-next`,
                prevEl: `.slide-basic-${index} .slide-prev`,
            },
        });
    });
});