$("head").append('<style type="text/css">#container { display: none; } #fade, #loader { display: block; }</style>');

var mobileUrl = 'mobile/index.html';
var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
var browser = navigator.userAgent.toLowerCase();
var isMobile = false;
var height = $(window).height(),width = $(window).width();
  for (var i = 0; i < mobileAgent.length; i++) {
      if (browser.indexOf(mobileAgent[i]) != -1) {
          isMobile = true;
          break;
      }
  }
$(document).ready(function() {
    $("#fade").delay(900).fadeOut(800);
    $("#loader").delay(900).fadeOut(400);
  //  $('.form').text(height+','+width);
    setBackgroundSize();
    var w = $(window);
    w.resize(function() {
        var x = w.width(),
        y = w.height();
        height = $(window).height();
        width = $(window).width();
        setBackgroundSize();
    });
    $('.scrollPane').scroll(function() {
        if ($('.scrollPane').scrollTop() == 0) {
            $('.rights').stop().animate({
                opacity: 0
            },
            200);
        } else {
            $('.rights').stop().animate({
                opacity: 1
            },
            200);
        }
    });
    $('.rights').click(function() {
        if ($('.scrollPane').scrollTop() > 0) {
            $(".scrollPane").stop().animate({
                scrollTop: 0
            },
            600);
        }
    });

    $('#n1').click(function() {
        $(".scrollPane").stop().animate({
            scrollTop: height-100
        },
        600);
    });
    $("head").append("<style>.top_logo{-webkit-transition: all 0.1s;-moz-transition: all 0.1s;-ms-transition: all 0.1s;-o-transition: all 0.1s;transition: all 0.1s;}</style>");
    if (!isMobile) {
      $('#backer').parallax();
      $('#top').parallax();
    }
    var stalker = $('.cursor'),
    hovFlag = !1;
    document.addEventListener("mousemove",
    function(e) {
        stalker.css("display", "block");
        hovFlag || (stalker.css("transform", "translate(" + e.clientX + "px, " + e.clientY + "px)"));
    });
    for (var linkElem = document.querySelectorAll("a,.rights"), _i = 0, playerjp; _i < linkElem.length; _i++) linkElem[_i].addEventListener("mouseover",
    function(e) { (hovFlag = !1),
        stalker.addClass("hov");
    }),
    linkElem[_i].addEventListener("mouseout",
    function(e) { (hovFlag = !1),
        stalker.removeClass("hov");
    });
});
$(function () {
  $(".news_pane").slick({
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    asNavFor: '.news_nav',
    autoplaySpeed: 7000,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
});
  $(".news_nav").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    asNavFor: '.news_pane',
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    centerMode: true,
    focusOnSelect: true,
});
});
function setBackgroundSize() {
  if (height*16/9>=width) {
    $('#bi,#bg,#t').removeAttr("style","");
      $('#bi,#bg,#t').css('height',height);
  }else{
    $('#bi,#bg,#t').removeAttr("style","");
      $('#bi,#bg,#t').css('width',width);
  }
  if (width<1015) {
    $('.fi').css('display','none');
  }else {
    $('.fi').css('display','block');
  }
}
