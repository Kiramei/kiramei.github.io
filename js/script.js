const mobileAgent = ["iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate",
	"bada", "nokia", "lg", "ucweb", "skyfire"
];
const browser = navigator.userAgent.toLowerCase();
let isMobile = false;
let height = window.innerHeight,
	width = window.innerWidth;
for (let i = 0; i < mobileAgent.length; i++) {
	if (browser.indexOf(mobileAgent[i]) !== -1) {
		window.location.href = "mobile/index.html"
	}
}


window.onload = function() {
	preset();
	createTopTitle();
	newsSetup();
	gallerySetup();
	movieSetup();
	addOption();
	musicSetup();
	lastSet();
};

let musics;
let news;
let movies;
let imgs;
var show = false;
/*
  functions below.
*/

function preset() {
	let m = document.querySelector("#t");
	if (height * 16 / 9 >= width) {
		m.style = "height:" + height +
			"px;margin-left:" + (-(height * 16 / 9) / 2 + width /
				2) + "px;";
	} else {
		m.style = "width:" + width + "px;";
	}
}

function createTopTitle() {
	Vue.createApp({
		methods:{
			toTop(){
				document.querySelector('#sp').scrollTo(0,0);
			}
		}
	}).mount('#toTop');
	Vue.createApp({
		data() {
			return {
				titles: [{
						text: "News",
						value: 1,
						scrollTop: height - 80
					},
					{
						text: "Music",
						value: 2,
						scrollTop: height + 650
					},
					{
						text: "Video",
						value: 3,
						scrollTop: height + 1470
					},
					{
						text: "Gallery",
						value: 4,
						scrollTop: height + 2067
					}
				],
				isShow: window.innerWidth > 720
			}
		},
		components: {
			'title-box': {
				props: ['title'],
				template: `<div class="mk"  :index="title.value"><a>{{ title.text }}</a></div>`
			}
		},
		methods: {
			select(event) {
				let index = -1 + eval(event.target.parentNode.getAttribute('index'));
				document.querySelector('#sp').scrollTo(0, this.titles[index].scrollTop);
			}
		},
		mounted() {
			var that = this;
			var ms = () => {
				height = window.innerHeight;
				that.wid = width = window.innerWidth;
				that.isShow = that.wid > 720;
				preset();
			};
			window.addEventListener('resize', ms);
			window.addEventListener('load', ms);
		}
	}).mount('#topTitle');
}

function musicSetup() {
	axios('json/music_list.json').then(response => {
		musics = response.data;
		Vue.createApp({
			data() {
				return {
					musics: response.data
				}
			},
			components: {
				'music-box': {
					props: ['music'],
					template: '<div class="mus"><div class="title">{{ music.name }}</div><a :href="music.url" download><div class="down">Download</div></a></div>'
				}
			}
		}).mount('#msList');
		addPlay(musics);
	});
}

function movieSetup() {
	axios('json/movie_list.json').then(response => {
		movies = response.data;
		Vue.createApp({
			data() {
				return {
					movies: response.data,
					currentUrl: ""
				}
			},
			methods: {
				select(event) {
					let index = eval(event.target.getAttribute('index'));
					this.currentUrl = movies[index].url;
				}
			},
			components: {
				'movie-box': {
					props: ['movie'],
					template: `<div class="movie-unit" :index='movie.value' >{{ movie.name }}</div>`
				}
			}
		}).mount('#mvList');
	});
}

function newsSetup() {
	axios('json/news_list.json').then(response => {
		news = response.data;
		Vue.createApp({
			data() {
				return {
					news: response.data,
				}
			},
			components: {
				'news-box': {
					props: ['new_'],
					template: `<div class="news_content"><div class="title"> {{ new_.title }} </div><div class="content" v-html="new_.content">   </div><div class="date"> {{ new_.date1 }}  </div></div>`
				}
			}
		}).mount("#newsP");
	});
}

function gallerySetup() {
	axios('json/img_list.json').then(response => {
		imgs = response.data;
		Vue.createApp({
			data() {
				return {
					imgs: response.data,
					open: false,
					current: ''
				}
			},
			methods: {
				change(v) {
					this.current = v;
					this.open = true;
				}
			},
			components: {
				'img-box': {
					props: ['img'],
					template: `<li ><img :src="img.url" alt=""></li>`
				}
			},

			mounted() {
				var masonry = new Macy({
					container: '#gal ul',
					trueOrder: false,
					waitForImages: true,
					useOwnImageLoader: false,
					debug: true,
					margin: {
						x: 20,
						y: 20
					},
					columns: 4,
					breakAt: {
						1200: {
							columns: 3,
							margin: {
								x: 23,
								y: 2
							}
						},
						940: {
							columns: 2,
							margin: {
								y: 23
							}
						},
						520: {
							columns: 1,
							margin: 3,
						},
					}
				});

			}
		}).mount("#gal");

	});



}

function addOption() {
	Vue.createApp({
		data() {
			return {
				flag: false
			}
		},
		methods: {
			change() {
				this.flag = !this.flag;
			},
			close() {
				this.flag = false;
			}
		}
	}).mount('#sm');
}

function addPlay(data) {
	const ap = new APlayer({
		container: document.getElementById('aplayer'),
		mini: false,
		autoplay: false,
		theme: '#3d3d3d',
		loop: 'all',
		order: 'list',
		preload: 'auto',
		volume: 0.7,
		mutex: true,
		listFolded: false,
		listMaxHeight: 90,
		lrcType: 3,
		audio: data
	});
}

function lastSet() {
	setTimeout(function() {
		fadeOut(document.querySelector("#fade"), 10);
		fadeOut(document.querySelector("#loader"), 5);
		document.querySelector('#gal ul').style.height = "400px";
	}, 900);

}

function fadeOut(element, spd) {
	var speed = spd;
	var num = 100;
	var st = setInterval(function() {
		num--;
		element.style.opacity = num / 100;
		if (num <= 0) {
			clearInterval(st);
			element.style.display = "none";
		}
	}, speed);
}
