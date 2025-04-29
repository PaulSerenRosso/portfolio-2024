<script>
import { defineComponent } from 'vue'
//trigger flip when the element is above the end y value of the viewport,
// and trigger flop when the element is below the start y value of the viewport,
// when trigger flip it is waiting for trigger flop and reverse.
export default defineComponent({
  name: 'ScrollingTriggerFlipFlop',
  data() {
    return {
      app: null,
      timer: null,
      isFlop: true,
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
      const top = this.$refs.revealAnimationTrigger.getBoundingClientRect().top;
      if (this.isFlop) {

        if (top >0 && (window.innerHeight-top) >0 ) {
          clearTimeout(this.timer)
          this.timer = setTimeout(this.launchFlipAnimation, this.delay)
          this.isFlop = false;
        }
      } else {
        if (top <= 0 || top>0 && (window.innerHeight-top) <0 ) {
          clearTimeout(this.timer)
          this.timer = setTimeout(this.launchFlopAnimation, this.delay)
          this.isFlop = true
        }
      }
    },
    launchFlipAnimation() {
      this.$emit('triggerOnFlipScrolling')
      clearTimeout(this.timer)
    },
    launchFlopAnimation() {
      this.$emit('triggerOnFlopScrolling')
      clearTimeout(this.timer)
    },
  },
})
</script>

<template>
  <div ref="revealAnimationTrigger"></div>
</template>

<style scoped></style>
