<template>
  <Transition name="lg">
    <div v-if="loading" class="content-loader">
      <img src="./assets/logo.png" draggable="false" alt="" />
    </div>
  </Transition>
  <Transition name="blk">
    <div v-if="loading" class="content-mask">
    </div>
  </Transition>
  <Page />
</template>

<script setup>
import Page from './pages/start.vue'

const loading = ref(true);

onBeforeMount(() => {
  const lgr = useCookie('lang');
  langCode().value = Number.parseInt(lgr.value);
  setTimeout(() => {
    loading.value = false
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
  }]
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
  width: 100%;
  height: 100%;
  top: -40px;
  left: 0;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  z-index: 999;
  -webkit-animation: blink 1.5s ease-in-out infinite alternate;
  -moz-animation: blink 1.5s ease-in-out infinite alternate;
  animation: blink 1.5s ease-in-out infinite alternate
}

.content-loader img {
  width: 56px;
  height: 56px;
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


.blk-enter-active,
.blk-leave-active {
  transition: opacity 1.5s ease;
}

.blk-enter-from,
.blk-leave-to {
  opacity: 0;
}


.lg-enter-active,
.lg-leave-active {
  transition: opacity 0.1s ease;
}

.lg-enter-from,
.lg-leave-to {
  opacity: 0;
}
</style>