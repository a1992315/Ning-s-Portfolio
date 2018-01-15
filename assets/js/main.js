$(function () {

    new WOW().init();

    $('nav a, #scrollTopBtn').bind('click', function (event) {
        var $anchor = $(this);
        var navbarHeight = 50;
        $('html, body').stop().animate({
            /*------------------------------------navbar高度50---*/
            scrollTop: ($($anchor.attr('href')).offset().top - navbarHeight)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
    //window在捲動的時候// 
    $(window).scroll(function () {
        //以上條件發生時所做的處理
        //把()的內容印到console處理
        var $scrollPosition = $(window).scrollTop();
        console.log($scrollPosition);
        //如果滾動的位置大於500
        if ($scrollPosition > 500) {
            //#scrollTopBtn加上class scroll
            //$('#scrollTopBtn').addClass('scroll');
            $('#scrollTopBtn').fadeIn();
        } else {
            //#scrollTopBtn去除scroll
            //沒有了scroll的#scrollTopBtn display為none
            //$('#scrollTopBtn').removeClass('scroll');
            $('#scrollTopBtn').fadeOut();
        }

        if ($scrollPosition > 20) {
            $('#header').addClass('scroll')
        } else {
            $('#header').removeClass('scroll')
        }

    });
});
