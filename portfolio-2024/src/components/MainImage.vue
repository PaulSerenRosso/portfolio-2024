<script>
import ScrollingTrigger from '@/components/ScrollingTrigger.vue'
import MainButton from "@/components/MainButton.vue";

export default {
  name: 'MainImage',
  components: {MainButton, ScrollingTrigger },
  props: {
    src: {},
    isLazy:{ Boolean, default: true },
    delay: Number,
    hasAnimation:{ Boolean, default: true },
    imageClass:String,
  },
  mounted() {


    if(!this.hasAnimation){
      this.$refs.root.style.opacity="1";
    }
  },

  methods: {
    launchRevealAnimation() {
      this.$refs.root.classList.add('root-reveal')
    },
  },
}
</script>

<template>
  <div ref="root" class="root" style="">
    <scrolling-trigger
      v-if="hasAnimation"
      style="position: absolute; top: 50%"
      :delay="this.delay"
      @trigger-on-scrolling="launchRevealAnimation"
    ></scrolling-trigger>
    <picture>
      <source  :srcset="this.src.webp"  type="image/webp">
      <img :loading="this.isLazy?'lazy':'eager'" :class="'main-image '+ this.imageClass" :src="this.src.jpg">
    </picture>



  </div>
</template>

<style scoped>
.main-image {
  display: block;
  width: 100%;

}
.root {
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
