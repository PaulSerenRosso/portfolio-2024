<script>
import ScrollingTrigger from '@/components/ScrollingTrigger.vue'

export default {
  name: 'lettersAnimation',
  components: { ScrollingTrigger },
  props: {
    textContent: String,
    delay: Number,
  },
  data() {
    return {
      letters: [],
      delayBetweenLettersCreation: 80,
      intervalTimer: null,
      currentTextContent: '',
    }
  },
  methods: {
    launchLettersAnimation() {
      this.letters = this.textContent.split('')

      this.intervalTimer = setInterval(this.animateLetter, this.delayBetweenLettersCreation)
    },
    animateLetter() {
      const currentLetterElement = this.letters.shift()
      if (currentLetterElement === undefined) {
        clearInterval(this.intervalTimer)
        this.$refs.lettersContainer.textContent = this.currentTextContent
      } else {
        this.currentTextContent = this.currentTextContent + currentLetterElement
        this.$refs.lettersContainer.textContent = this.currentTextContent + '|'
      }
    },
  },
}
</script>
<template>
  <div class="letters-container" ref="lettersContainer">
    <scrolling-trigger
      :delay:="this.delay"
      @trigger-on-scrolling="launchLettersAnimation"
    ></scrolling-trigger>
  </div>
</template>
<style scoped lang="scss">
.letters-container {
}

.letter-hidden {
  opacity: 0;
  display: inline;
  color: #424242;
}
</style>
