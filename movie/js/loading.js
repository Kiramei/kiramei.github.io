$("head").append('<style type="text/css">#container { display: none; } #fade, #loader { display: block; }</style>');
$(window).load(function () {
    anime({targets: ".menu", opacity: 0.75, delay: 900, duration: 2000, easing: "easeInOutQuad",})
    $("body .full").append("<div class=\"snow\" style=\"height:1200px;   position:fixed; left:0px; top:0px; right:0px; bottom:0px; pointer-events: none;z-index: 996;\"><canvas width=\"1904\" height=\"913\" style=\"position: absolute;left: 0;top: 0;\"></canvas></div>");



    if (/MSIE 6|MSIE 7|MSIE 8/.test(navigator.userAgent)) {
        return
    }
    var container = document.querySelector(".snow");
    // IE9-10 pointer-events兼容
    if (/MSIE 9|MSIE 10/.test(navigator.userAgent)) {
        $(container).bind('click mousemove', function (evt) {
            this.style.display = 'none';
            var x = evt.pageX, y = evt.pageY
            if ($(document).scrollTop() > 0 || $(document).scrollTop() > 0) {
                x = x - $(document).scrollLeft() + 1
                y = y - $(document).scrollTop() + 1
            }
            evt.preventDefault();
            evt.stopPropagation();
            var under = document.elementFromPoint(x, y);
            var evtType = evt.type === 'click' ? 'click' : 'mouseenter'
            if (evt.type === 'click') {
                $(under)[0].click();
            } else {
                $(under).trigger('mouseenter');
            }
            $('body').css('cursor', 'default')
            this.style.display = '';
            return false;
        });
    }
    var containerWidth = $(container).width();
    var containerHeight = $(container).height();
    var particle;
    var camera;
    var scene;
    var renderer;
    var mouseX = 0;
    var mouseY = 0;
    var windowHalfX = window.innerWidth / 2;
    var windowHalfY = window.innerHeight / 2;
    var particles = [];
    var particleImages = new Image();
    particleImages.src = "img/snow.png";
    var snowNum = 500;

    function init() {
        camera = new THREE.PerspectiveCamera(-75, containerWidth / containerHeight, 1, 10000);
        camera.position.z = 500;
        scene = new THREE.Scene();
        scene.add(camera);
        renderer = new THREE.CanvasRenderer();
        renderer.setSize(containerWidth, containerHeight);
        for (var i = 0; i < snowNum; i++) {
            var material = new THREE.ParticleBasicMaterial({map: new THREE.Texture(particleImages)});
            particle = new Particle3D(material);
            particle.position.x = Math.random() * 2000 - 1000;
            particle.position.y = Math.random() * 2000 - 1000;
            particle.position.z = Math.random() * 2000 - 1000;
            particle.scale.x = particle.scale.y = 1;
            scene.add(particle);
            particles.push(particle)
        }
        container.appendChild(renderer.domElement);
        document.addEventListener("mousemove", onDocumentMouseMove, false);
        document.addEventListener("touchstart", onDocumentTouchStart, false);
        document.addEventListener("touchmove", onDocumentTouchMove, false);
        setInterval(loop, 1000 / 50)
    }

    function onDocumentMouseMove(event) {
        mouseX = event.clientX - windowHalfX;
        mouseY = event.clientY - windowHalfY
    }

    function onDocumentTouchStart(event) {
        if (event.touches.length === 1) {
            event.preventDefault();
            mouseX = event.touches[0].pageX - windowHalfX;
            mouseY = event.touches[0].pageY - windowHalfY
        }
    }

    function onDocumentTouchMove(event) {
        if (event.touches.length === 1) {
            event.preventDefault();
            mouseX = event.touches[0].pageX - windowHalfX;
            mouseY = event.touches[0].pageY - windowHalfY
        }
    }

    function loop() {
        for (var i = 0; i < particles.length; i++) {
            var particle = particles[i];
            // 滚动到楼层模块，减少雪花 （自定义）
            if ($(window).scrollTop() < 1000) {
                particle.scale.x = particle.scale.y = 1;
            } else {
                if (i > particles.length / 5 * 3) {
                    particle.scale.x = particle.scale.y = 0;
                } else {
                    particle.scale.x = particle.scale.y = 0.8;
                }
            }
            particle.updatePhysics();
            with (particle.position) {
                if (y < -1000) {
                    y += 2000
                }
                if (x > 1000) {
                    x -= 2000
                } else {
                    if (x < -1000) {
                        x += 2000
                    }
                }
                if (z > 1000) {
                    z -= 2000
                } else {
                    if (z < -1000) {
                        z += 2000
                    }
                }
            }
        }
        camera.position.x += (mouseX - camera.position.x) * 0.005;
        camera.position.y += (-mouseY - camera.position.y) * 0.005;
        camera.lookAt(scene.position);
        renderer.render(scene, camera)
    }
    init();



});
document.documentElement.style.overflow = "hidden";
jQuery.event.add(window, "load", function () {
    var pageH = $("#container").height();
    var wid = window.screen.width;
    $(".background img").css("width", ((wid - 1920) / 400 + 100) + "%");
    $(".top_logo img").css("width", ((wid - 1920) / 225 + 106) + "%");
    $(".fp").css("font-size", ((wid - 1920) / 45 + 45) + "px");
    $(".ff").css("font-size", ((wid - 1920) / 50 + 36) + "px");
    $(".fp").css("margin-top", ((wid - 1920) / 750 + 3) + "%");
    $("#fade").css("height", pageH).delay(900).fadeOut(800);
    $("#loader").delay(900).fadeOut(400);
    $("#container").css("display", ((wid - 1920) / 1.3 + 1680) + "%");
    $("#por").css("z-index","997");
    $("head").append("<style>.top_logo{-webkit-transition: all 0.1s;-moz-transition: all 0.1s;-ms-transition: all 0.1s;-o-transition: all 0.1s;transition: all 0.1s;}</style>");
    $("body").mousemove(function (event) {
        var rate = event.pageX / 1920;
        $(".top_logo").css("opacity", 1 - rate * 0.2)
    })
});
$("document").ready(function () {
    $("#scene").parallax();
    $("#por").parallax();
    setTimeout((function () {
        $('.menu_section').css("pointer-events", "auto")
    }), 2800)
});
