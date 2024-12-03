$(document).ready(function() {
    // filter hide
    $('.btn-hide').on('click', function() {
        $('.filter-li').hide();
        $('.product-wrap').addClass('wide');
        $(this).hide().siblings('.btn-show').show();
    });
    $('.btn-show').on('click', function() {
        $('.filter-li').show();
        $('.product-wrap').removeClass('wide');
        $(this).hide().siblings('.btn-hide').show();
    });

    // filter
    $('.filter-tit').on('click', function() {
        $(this).toggleClass('on');
        $(this).siblings('ul').stop().slideToggle(300);
    });

    filter();
    $(window).resize(function() {
        filter();
    });

    // product color
    $('.product-color li button').on('click', function() {
        const current = $(this).parent().index();
        console.log(current)
        $(this).parents('.product-color').siblings('.img-area').find('img').css('display', 'none');
        $(this).parents('.product-color').siblings('.img-area').find('img').eq(current).css('display', 'block');
    });


    $('.filter-li label input[type=checkbox]').change(function() {
        filterOnchange(this);
    });
});

let checkedList = [];
function filterOnchange(target) {
    if ($(target).is(':checked')) {
        if (!checkedList.includes(target.id)) {
            checkedList.push(target.id);
            $('.' + target.id).css('display', 'block');
            setLi(target)
        }
    } else {
        if (checkedList.includes(target.id)) {
            let filteredList = checkedList.filter((el) => el != target.id);
            checkedList = filteredList;
            $('.' + target.id).css('display', 'none');
            delLi(target.id);
        }
    }

    if (checkedList.length == 0) {
        $('.product-li > li').css('display', 'block');
    } else {
        $('.product-li > li').css('display', 'none');
        checkedList.forEach(id => {
            $('.' + id).css('display', 'block');
        })
    }
}

function setLi(target) {
    const filterTxt = $(target).siblings('span').html();
    $('.selected-li').css('margin-bottom', '1rem');
    $('.selected-li').prepend('<li id="' + target.id + '" class="selected">' + filterTxt + '<button class="btn-delete" type="button"></button></li>');

    $('.btn-delete').on('click', function () {
        const parentLi = $(this).parent();
        const id = $(parentLi).attr("id");
        
        $(parentLi).remove();
        $("input[id="+id+"]").prop('checked', false);

        let filteredList = checkedList.filter((el) => el != id);
        checkedList = filteredList;
        $('.' + id).css('display', 'none');

        if (checkedList.length == 0) {
            $('.selected-li').css('margin-bottom', '0rem');
        }
    })
}

function delLi(target) {
    $(".selected-li").children("#"+target.id).remove();
}

function delLi(targetId) {
    $("ul[class=selected-li]").find("li[id="+targetId+"]").remove();
}

function filter() {
    if (window.innerWidth <= 768) {
        $('.filter-li').hide();
    } else {
        $('.filter-li').show();
        $('.product-wrap').removeClass('wide');
    }
}