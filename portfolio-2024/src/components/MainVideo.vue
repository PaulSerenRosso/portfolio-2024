<script>
import MainButton from '@/components/MainButton.vue'
import TvBorder from '@/components/TvBorder.vue'
import { deactivateScroll } from '@/composables/Scroll.js'

export default {
  name: 'MainVideo',
  props: {
    src: String,
    delay: {
      default: 1000,
      type: Number,
    },
  },

  components: { TvBorder },
}
</script>

<template>
  <tv-border :delay="this.delay">
    <video
      class="main-video"
      :src="this.src"
      playsinline
      autoplay
      muted
      loop
      controls
      type="video/mp4"
    ></video>
  </tv-border>
</template>

<style scoped></style>
