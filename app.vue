<template>
  <div class="content-loader"> <img src="./assets/logo.png" draggable="false" alt="" />
  </div>
  <div class="content-mask"></div>
  <Page />
</template>

<script setup>
import Page from './pages/start.vue'

onBeforeMount(() => {
  const lgr = useCookie('lang');
  langCode().value = Number.parseInt(lgr.value);
  console.log(langCode().value)
  setTimeout(function () {
    var e1 = document.querySelector(".content-loader");
    var e2 = document.querySelector(".content-mask");
    var num1 = 100;
    var st = setInterval(function () {
      num1--;
      e1.style.opacity = num1 / 100;
      if (num1 <= 0) {
        clearInterval(st);
        e1.style.display = "none";
      }
    }, 10);
    var num2 = 100;
    var stt = setInterval(function () {
      num2--;
      e2.style.opacity = num2 / 100;
      if (num2 <= 0) {
        clearInterval(stt);
        e2.style.display = "none";
      }
    }, 5);
  }, 900);
})
useHead({
  charset: 'utf-16',
  viewport: 'width=500, initial-scale=1',
  title: 'Kiramei Official Site',
  htmlAttrs: {
    lang: 'jp'
  },
  meta: [{
    charset: 'utf-8'
  },
  {
    name: 'viewport',
    content: 'width=device-width, initial-scale=1'
  },
  {
    hid: 'description',
    name: 'description',
    content: `This is Kiramei's official site. Activities are posted here`
  }
  ],
  link: [{
    rel: 'icon',
    type: 'image/x-icon',
    href: 'https://raw.githubusercontent.com/Kiramei/kiramei.github.io/main/fav.ico'
  }],
  plugins: [{ src: 'plugins/loader.js', ssr: false }],
})

</script>

<style>
* {
  user-select: none;
}

img {
  -webkit-user-drag: none;
}


.content-loader {
  width: 20%;
  position: fixed;
  _position: absolute;
  top: calc(45% - 28px);
  left: calc(50% - 113px);
  z-index: 999;
  -webkit-animation: blink 1.5s ease-in-out infinite alternate;
  -moz-animation: blink 1.5s ease-in-out infinite alternate;
  animation: blink 1.5s ease-in-out infinite alternate
}

.content-loader img {
  width: 225px;
}

.content-mask {
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  width: 100%;
  height: 100%;
  background: white no-repeat fixed center center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 998
}


@-webkit-keyframes blink {
  0% {
    opacity: 0
  }

  100% {
    opacity: 1
  }
}

@-moz-keyframes blink {
  0% {
    opacity: 0
  }

  100% {
    opacity: 1
  }
}

@keyframes blink {
  0% {
    opacity: 0
  }

  100% {
    opacity: 1
  }
}
</style>