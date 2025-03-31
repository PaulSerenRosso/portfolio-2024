<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ScrollingTrigger',
  data() {
    return {
      app: null,
      timer: null,

    }
  },
  props: {
    delay: Number,
  },

  mounted() {
    this.app = document.getElementById('routerView')
    this.app.addEventListener('scroll', this.checkNeedToTrigger)
    this.checkNeedToTrigger()
  },
  unmounted() {
    this.app.removeEventListener('scroll', this.checkNeedToTrigger)
    clearTimeout(this.timer)
  },
  methods: {
    checkNeedToTrigger() {

      if (window.innerHeight > this.$refs.revealAnimationTrigger.getBoundingClientRect().top) {
        this.timer = setTimeout(this.launchRevealAnimation, this.delay)
        this.app.removeEventListener('scroll', this.checkNeedToTrigger)
      }
    },
    launchRevealAnimation() {
      this.$emit('triggerOnScrolling')
      clearTimeout(this.timer)
    },
  },
})
</script>

<template>
  <div ref="revealAnimationTrigger" ></div>
</template>

<style scoped></style>
