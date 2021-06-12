const mobileAgent = ["iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire"];
const browser = navigator.userAgent.toLowerCase();
let isMobile = false;
let height = $(window).height(), width = $(window).width();
for (let i = 0; i < mobileAgent.length; i++) {
    if (browser.indexOf(mobileAgent[i]) !== -1) {
        Cookies.set('mode', '0');
        isMobile = true;
        break;
    }
}


jQuery(function () {
    dataPreset();
    setSwitch();
    modeCheck();
    jsonParse();
    sizeSet();
    setBackgroundSize();
    menuSet();
    lastSet();
});


let musics;
let news;
let flag = 0;
let audio;
let mode;


/*
  functions below.
*/

function dataPreset() {
    $("#fade").delay(900).fadeOut(800);
    $("#loader").delay(900).fadeOut(400);
    if ($('.scrollPane').scrollTop() === 0) $('.rights').css('opacity', 0);
    $('.form').html('Scroll To See More<br/>|');
    $('.rights').text('↑');
    let p = ['News', 'Music', 'Video', 'Gallery'];
    for (let i = 0; i < 4; i++) {
        $('.fi').append('<div class="mk" id="n' + (i + 1) + '"><a>' + p[i] + '</a></div>');
    }
    $('.hint').text('Effect:');
    $('.news .title').text('News');
    const url2 = "../json/news_list.json";
    const request2 = new XMLHttpRequest();
    request2.open("get", url2);
    request2.send(null);
    request2.onload = function () {
        if (request2.status === 200) {
            news = JSON.parse(request2.responseText);
            for (let i = 0; i < news.length; i++) {
                $('.news_pane').append('<div class="news_content"><div class="title">' + news[i].title + '</div><div class="content">' + news[i].content + '</div><div class="date">' + news[i].date1 + "</div></div>");
                $('.news_nav').append('<a><div class="news_block">' + news[i].date2 + '</div></a>');
            }
            setSlick();
        }
    }
    $('.music_controller .title').text('Please choose one listed to play');
    $('.musics .title').text('Music');
    $('.movies .title').text('Movie');
}

function modeCheck() {
    mode = parseInt(Cookies.get('mode'));
    if (isNaN(mode)) {
        Cookies.set('mode', 0);
        mode = 0
    }
    let m = $('.mode');
    m.css('background', mode !== 0 ? '#20A2CCAA' : '#DB5B70AA');
    m.text(mode === 0 ? 'off' : 'on');
    if (mode !== 1) {
        $('#backer').html(' <div class="layer" data-depth="0.3"> <img id="t" src="img/background/all.png" alt=""/></div>');
    }
}

function jsonParse() {
    const url = "../json/music_list.json";
    const request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function () {
        if (request.status === 200) {
            musics = JSON.parse(request.responseText);
            for (let i = 0; i < musics.length; i++) {
                $('.list').append('<div class="mus"><div class="title">' + musics[i].name + '</div><a><div class="listen" index=' + i + '> Play</div></a><a><div class="down">Download</div></a></div>');
                addPlay();
                addMovie();
            }
        }
        addPause();
        addMouse();
    }
}


function addPlay() {
    $('.listen').on("click", function (e) {
        const i = $(e.target).attr('index');
        $('.listen').css('background','#20A2CCAA')
        $(e.target).css('background','#6E696D');
        $('.music_controller .title').text(musics[i].name);
        if (typeof (audio) !== "undefined")
            audio.pause();
        audio = new Audio(musics[i].url);
        $(audio).off("ended").on("ended",
            function () {
                audio.play();
            });
        audio.play().then(r => {
            console.log(r)
        });
        $('.pause').html('<svg t="1620046119918" fill="#0000009f" class="icon" viewbox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="2002" width="20" height="20"><path d="M325.008696 0c-28.93913 0-51.2 22.26087-51.2 51.2l0 919.373913c0 28.93913 22.26087 51.2 51.2 51.2s51.2-22.26087 51.2-51.2L376.208696 53.426087C376.208696 24.486957 351.721739 0 325.008696 0zM698.991304 0c-28.93913 0-51.2 22.26087-51.2 51.2l0 919.373913c0 28.93913 22.26087 51.2 51.2 51.2s51.2-22.26087 51.2-51.2L750.191304 53.426087C752.417391 24.486957 727.930435 0 698.991304 0z" p-id="2003"></path></svg>');
        setInterval(function () {
            $('.timeline').children().css({width: (audio.currentTime / audio.duration).toFixed(4) * 100 + "%"});
        }, 100);
        flag = 1;
    });
}

function addMovie(){
    $('.movie-unit').on('click',function (e) {
        const i=$(e.target).attr('index');
        $('.movie-unit').css('color',"#3b3c3c");
        $(e.target).css('color','#20A2CCAA');

    });
}

function addPause() {
    let p = $('.pause');
    p.on("click", function () {
        if (typeof (audio) === "undefined") return;
        if (flag === 0) {
            audio.play();
            $('.pause').html('<svg t="1620046119918" fill="#0000009f" class="icon" viewbox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="2002" width="20" height="20"><path d="M325.008696 0c-28.93913 0-51.2 22.26087-51.2 51.2l0 919.373913c0 28.93913 22.26087 51.2 51.2 51.2s51.2-22.26087 51.2-51.2L376.208696 53.426087C376.208696 24.486957 351.721739 0 325.008696 0zM698.991304 0c-28.93913 0-51.2 22.26087-51.2 51.2l0 919.373913c0 28.93913 22.26087 51.2 51.2 51.2s51.2-22.26087 51.2-51.2L750.191304 53.426087C752.417391 24.486957 727.930435 0 698.991304 0z" p-id="2003"></path></svg>');
            flag = 1;
        } else {
            audio.pause();
            $('.pause').html('<svg t="1620388647690" fill="#0000009f" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="1637" width="22" height="22"><path d="M810.666667 512c0 14.933333-8.533333 27.733333-19.2 34.133333l0 0L273.066667 846.933333l0 0c-6.4 4.266667-12.8 6.4-19.2 6.4-21.333333 0-40.533333-17.066667-40.533333-40.533333L213.333333 211.2c0-21.333333 17.066667-40.533333 40.533333-40.533333 6.4 0 14.933333 2.133333 19.2 6.4l0 0 518.4 300.8 0 0C802.133333 484.266667 810.666667 497.066667 810.666667 512z" p-id="1638"></path></svg>');
            flag = 0;
        }
    });
    p.on("mousemove", function () {
        $('.pause').css('background', '#DB5B709f');
        $('.pause svg').attr('fill', '#ffffff9f');
    });
    p.on("mouseout", function () {
        $('.pause').css('background', '#ffffff6f');
        $('.pause svg').attr('fill', '#0000009f');
    });
}

function addMouse() {
    let stalker = $('.cursor'),
        hovFlag = !1;
    document.addEventListener("mousemove",
        function (e) {
            stalker.css("display", "block");
            hovFlag || (stalker.css("transform", "translate(" + e.clientX + "px, " + e.clientY + "px)"));
        });
    let linkElem = document.querySelectorAll("a,.rights"), _i = 0;
    for (; _i < linkElem.length; _i++) linkElem[_i].addEventListener("mouseover",
        function () {
            (hovFlag = !1),
                stalker.addClass("hov");
        }),
        linkElem[_i].addEventListener("mouseout",
            function () {
                (hovFlag = !1),
                    stalker.removeClass("hov");
            });
}

function setBackgroundSize() {
    let m;
    if (height * 16 / 9 >= width) {
        m = $('#bi,#bg,#t');
        m.removeAttr("style");
        m.css('height', height);
    } else {
        m = $('#bi,#bg,#t');
        m.removeAttr("style");
        m.css('width', width);
    }
}

function setSlick() {
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
}

function menuSet() {
    $('.rights').on("click", function () {
        if ($('.scrollPane').scrollTop() > 0) {
            $(".scrollPane").stop().animate({
                    scrollTop: 0
                },
                600);
        }
    });

    $('#n1').on("click", function () {
        $(".scrollPane").stop().animate({
                scrollTop: height - 80
            },
            600);
    });
    $('#n2').on("click", function () {
        $(".scrollPane").stop().animate({
                scrollTop: height + 650
            },
            600);
    });
    $('#n3').on("click", function () {
        $(".scrollPane").stop().animate({
                scrollTop: height + 1470
            },
            600);
    });
}

function sizeSet() {
    const w = $(window);
    w.on("resize", function () {
        w.width();
        w.height();
        height = $(window).height();
        width = $(window).width();
        setBackgroundSize();
    });
    $('.scrollPane').on("scroll", function () {
        if ($('.scrollPane').scrollTop() === 0) {
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
}

function setSwitch() {
    $('.mode').on('click', function () {
        Cookies.set('mode', mode = (mode === 0 ? 1 : 0));
        console.log(mode)
        let m = $('.mode');
        m.css('background', mode !== 0 ? '#20A2CCAA' : '#DB5B70AA');
        m.text(mode === 0 ? 'off' : 'on');
    });
}

function lastSet() {
    let h = $('head');
    h.append('<style>#container { display: none; } #fade, #loader { display: block; }</style>');
    h.append("<style>.top_logo{-webkit-transition: all 0.1s;-moz-transition: all 0.1s;-o-transition: all 0.1s;transition: all 0.1s;}</style>");
    if (!isMobile) {
        $('#backer').parallax();
        $('#top').parallax();
    }
}