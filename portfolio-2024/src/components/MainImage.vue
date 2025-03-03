<script>
import ScrollingTrigger from '@/components/ScrollingTrigger.vue'

export default {
  name: 'MainImage',
  components: { ScrollingTrigger },
  props: {
    src: String,
    delay: Number,
  },

  methods: {
    launchRevealAnimation() {
      this.$refs.root.classList.add('root-reveal')
    },
  },
}
</script>

<template>
  <div ref="root" class="root">
    <scrolling-trigger style="position: absolute; top: 50%;"
      :delay="this.delay"
      @trigger-on-scrolling="launchRevealAnimation"
    ></scrolling-trigger>
    <img class="main-image" :src="this.src" alt="" />

  </div>

</template>

<style scoped>
.main-image {
  display: block;
  width: 100%;

}
.root{
  opacity: 0;
  display: block;
  position: relative;
}
.root-reveal {
  display: block;
  animation-name: tv-frame-slot-reveal-animation;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
}

@keyframes root-animation {
  0% {
    opacity: 0;
  }
  50% {
  }
  70% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
</style>
