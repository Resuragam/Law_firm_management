<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
import m from '../public/Burt.mp3'
useHead({
  title: 'Vitesse',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})

onMounted(() => {
  const audioPlay = document.getElementById('myaudio')
})
</script>

<template>
  <RouterView />
  <audio controls src="/Burt.mp3">
    <a href="/Burt.mp3">
      Download audio
    </a>
  </audio>
</template>

<style>
audio {
  position: fixed;
  top: 100px;
  left: 50px;
}
</style>
