<script>
import MainButton from '@/components/MainButton.vue'
import TvBorder from '@/components/TvBorder.vue'
import { deactivateScroll } from '@/composables/Scroll.js'
import ScrollingTriggerFlipFlop from '@/components/ScrollingTriggerFlipFlop.vue'

export default {
  name: 'MainVideo',
  props: {
    src: String,
    delay: {
      default: 1000,
      type: Number,
    },
  },
  data(){
    return{
     isLoaded:false,
    }
  },
  mounted() {

    this.$refs.video.onload = () => {

      this.isLoaded = true;
    }
  },
  methods: {
    playVideo() {
      console.log("test")
      const iframe = this.$refs.video
      iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
    },
    stopVideo() {
      const iframe = this.$refs.video
      iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
    },
    pauseVideo() {
      const iframe = this.$refs.video
      iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    },
  },
  components: { ScrollingTriggerFlipFlop, TvBorder },
}
</script>

<template>
  <tv-border :delay="this.delay">
    <template v-slot:scrollingTrigger>
      <scrolling-trigger-flip-flop  style="position: absolute; top: 50%;" v-if="isLoaded"
        :delay="1000"
        @triggerOnFlipScrolling="this.playVideo"
        @triggerOnFlopScrolling="this.pauseVideo"
      ></scrolling-trigger-flip-flop>
    </template>
    <iframe
      loading="lazy"
      ref="video"
      class="main-video"
      height="1920"
      width="1080"
      :src="'https://www.youtube.com/embed/' + this.src + '?mute=1&enablejsapi=1&loop=1&playlist='+ this.src"
      allow=""
      allowfullscreen
    >
    </iframe>
  </tv-border>
</template>

<style scoped>
.main-video {
  top: 0;
  border: 0;
  left: 0;
  width: 100%;
  height: 100%;
  aspect-ratio: 16/9;
}
</style>
