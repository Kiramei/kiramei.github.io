<template>
  <Transition name="fade">
    <div class="loading" v-if="show_loading">
        <Loading />
    </div>
    </Transition>
  <Page />
</template>

<script setup>
import Page from './pages/start.vue'
import Loading from './pages/loading.vue'
import {ref} from 'vue'

const show_loading = ref(true)

onMounted(() => {
  setTimeout(() => {
   show_loading.value = false;
  }, 500)
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
    href: 'https://kiramei.cn/former/favicon.ico'
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

.loading{
  position:absolute;
  z-index: 9999;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.fade-enter-to, .fade-leave {
  opacity: 1;
}

</style>