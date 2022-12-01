<template>
  <Page />
</template>

<script setup>
import Page from './pages/start.vue'

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

</style>