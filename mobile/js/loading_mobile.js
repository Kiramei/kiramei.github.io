$("head").append('<style type="text/css">#container { display: none; } #fade, #loader { display: block; }</style>');
$(window).load(function () {
    $("#loader img").css("width","77%");
    // anime({targets: ".menu", opacity: 0, delay: 900, duration: 2000, easing: "easeInOutQuad",})

});
document.documentElement.style.overflow = "hidden";
jQuery.event.add(window, "load", function () {
    var pageH = $("#container").height();
    var wid = window.screen.width;

    $("#fade").css("height", pageH).delay(900).fadeOut(800);
    $("#loader").delay(900).fadeOut(400);


});
$("document").ready(function () {
    for (var i = 0; i < 200; i++) {
        $("body .full .main  .snow-container").append('<div class="snow"></div>')
    }

});

