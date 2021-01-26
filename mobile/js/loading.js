$("head").append('<style type="text/css">#container { display: none; } #fade, #loader { display: block; }</style>');
$(window).load(function () {
    $("#loader img").css("width","77%");
    anime({targets: ".menu", opacity: 0, delay: 900, duration: 2000, easing: "easeInOutQuad",})
});
document.documentElement.style.overflow = "hidden";
jQuery.event.add(window, "load", function () {
    var pageH = $("#container").height();
    var wid = window.screen.width;
    var w = $(".protext");
    $(".background img").css("width", ((wid - 1920) / 400 + 100) + "%");
    $(".background_b img").css("width", ((wid - 1920) / 400 + 100) + "%");
    $(".top_logo img").css("width", ((wid - 1920) / 225 + 106) + "%");
    $(".menu .layer .menu_border").css("width", ((wid - 1920) / 250 + 6) + "px");
    $(".menu .layer .menu_section .protext").css("font-size", ((wid - 1920) / 45 + 35) + "px");
    $(".menu .layer .menu_section").css("margin-top", ((wid - 1920) / 150 + 10) + "px");
    $(".menu .layer .menu_section").css("margin-left", ((wid - 1920) / 4.3 + 60) + "px");
    $(".menu .layer #fir").css("margin-left", ((wid - 1920) / 600 + 17) + "%");
    $(".menu .layer #sec").css("margin-left", ((wid - 1920) / 1.3 + 1680) + "%");
    $(".menu .layer #thr").css("margin-left", ((wid - 1920) / 1 + 2280) + "%");
    $(".menu .layer #for").css("margin-left", ((wid - 1920) / 0.75 + 2940) + "%");
    $(".menu .layer #fif").css("margin-left", ((wid - 1920) / 0.6 + 3580) + "%");
    $(".menu .layer #six").css("margin-left", ((wid - 1920) / 0.53 + 4180) + "%");
    $(".menu .layer #sev").css("margin-left", ((wid - 1920) / 0.46 + 4800) + "%");
    $(w[1]).css("margin-left", ((wid - 1920) / 10 + 570) + "%");
    $(w[2]).css("margin-left", ((wid - 1920) / 5 + 765) + "%");
    $(w[3]).css("margin-left", ((wid - 1920) / 3.05 + 970) + "%");
    $(w[4]).css("margin-left", ((wid - 1920) / 2.32 + 1170) + "%");
    $(w[5]).css("margin-left", ((wid - 1920) / 1.87 + 1375) + "%");
    $(".fp").css("font-size", ((wid - 1920) / 45 + 45) + "px");
    $(".fp").css("margin-top", ((wid - 1920) / 750 + 3) + "%");
    $(".albumPanel").css("top", ((wid - 1920) / 3 + 220) + "px");
    $(".albumPanel_nav").css("top", ((wid - 1920) / 8 + 290) + "px");
    $("#fade").css("height", pageH).delay(900).fadeOut(800);
    $("#loader").delay(900).fadeOut(400);
    $("#container").css("display", ((wid - 1920) / 1.3 + 1680) + "%");
    $("head").append("<style>.top_logo{-webkit-transition: all 0.1s;-moz-transition: all 0.1s;-ms-transition: all 0.1s;-o-transition: all 0.1s;transition: all 0.1s;}</style>");
    $("body").mousemove(function (event) {
        var rate = event.pageX / 1920;
        $(".top_logo").css("opacity", 1 - rate * 0.4)
    })
});
$("document").ready(function () {
    for (var i = 0; i < 200; i++) {
        $("body .full .main  .snow-container").append('<div class="snow"></div>')
    }
    $("#scene").parallax();
    $("#scenes").parallax();
    $("#porb").parallax();
    $("#ost").parallax();
    $("#por").parallax();
    setTimeout((function () {
        $('.menu_section').css("pointer-events", "auto")
    }), 2800)
});
$(function () {
    $(".albumPanel").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".albumPanel_nav",
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        pauseOnFocus: false,
        pauseOnHover: false,
    });
    $(".albumPanel_nav").slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: ".albumPanel",
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
    })
});