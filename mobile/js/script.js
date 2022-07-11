var a = 0;
$('.right').click(function() {
	if (a == 0) {
		$('.nav-content').css('display', 'block');
		a = 1;
	} else {
		$('.nav-content').css('display', 'none');
		a = 0;
	}
});
const url1 = "../json/news_list.json";
const request1 = new XMLHttpRequest();
request1.open("get", url1);
request1.send(null);
request1.onload = function() {
	if (request1.status === 200) {
		news = JSON.parse(request1.responseText);
		for (let i = 0; i < news.length; i++) {
			$('.event').append('<div class="news_content"><div class="title">' + news[i].title +
				'</div><div class="zcontent">' + news[i].content + '</div><div class="date">' + news[i].date1 +
				"</div></div>");
		}
	}
}
var flag_1 = -1;
const url2 = "../json/music_list.json";
const request2 = new XMLHttpRequest();
var music;
request2.open("get", url2);
request2.send(null);
request2.onload = function() {
	if (request2.status === 200) {
		music = JSON.parse(request2.responseText);
		for (let i = 0; i < music.length; i++) {
			$('.music').append('<div class="music-content" index=' + i + '>' + music[i].name + '</div>');
		}
		$('.music-content').click(function() {
			$('.hov1').removeClass('hov1');
			$(this).addClass('hov1');

			i = $(this).attr('index');

			if (typeof(audio) !== "undefined")
				audio.pause();
			if (flag_1 !== i) {
				audio = new Audio(music[i].url);
				$(audio).off("ended").on("ended",
					function() {
						audio.play();
					});
				audio.play().then(r => {
					console.log(r)
				});
				flag_1 = i;

			} else {
				flag_1 = -1;
				$('.hov1').removeClass('hov1');
			}

		});
	}
}

const url3 = "../json/movie_list.json";
const request3 = new XMLHttpRequest();
var movie;
request3.open("get", url3);
request3.send(null);
request3.onload = function() {
	if (request3.status === 200) {
		movie = JSON.parse(request3.responseText);
		for (let i = 0; i < movie.length; i++) {
			$('.menu').append('<div class="v-item" index=' + i + '>' + movie[i].name + '</div>');
		}

		$('.v-item').click(function() {
			$('.hov2').removeClass('hov2');
			$(this).addClass('hov2');
			i = $(this).attr('index');
			$('#video').attr('src', movie[i].url);
		});
	}
}

$('.nav-content a ').click(function() {
	$('.hov').removeClass('hov');
	$(this).addClass('hov');
});

//jQuery(function () {




//});


var mode = '.cover';
$('#event').click(function() {
	$('.nav-content').css('display', 'none');
	a = 0;
	$(mode).css('display', 'none');
	$('.event').css('display', 'block');
	mode = '.event';
});
$('#music').click(function() {
	$('.nav-content').css('display', 'none');
	a = 0;
	$(mode).css('display', 'none');
	$('.music').css('display', 'block');
	mode = '.music';
});
$('#movie').click(function() {
	$('.nav-content').css('display', 'none');
	a = 0;
	$(mode).css('display', 'none');
	$('.movie').css('display', 'block');
	mode = '.movie';
});
$('#gallery').click(function() {
	$('.nav-content').css('display', 'none');
	a = 0;
	$(mode).css('display', 'none');
	$('.gallery').css('display', 'block');
	mode = '.gallery';
});
$('#cover').click(function() {
	$('.nav-content').css('display', 'none');
	a = 0;
	$(mode).css('display', 'none');
	$('.cover').css('display', 'block');
	mode = '.cover';
});
