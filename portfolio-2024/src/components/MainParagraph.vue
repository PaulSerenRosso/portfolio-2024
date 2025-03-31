<script>
import { defineComponent } from 'vue'
import SlideInAnimation from '@/components/SlideInAnimation.vue'

export default defineComponent({
  name: 'MainParagraph',
})
</script>

<template>
  <div class="paragraph-container">
    <slot></slot>
  </div>
</template>
<style>
paragraph-bold {
  font-family: MySemiBold;
}
</style>

<style scoped lang="scss">
.paragraph-container {
  color: $main-black-color;
  font-family: MyRegular;
}

@include mobile-md() {
  .paragraph-container {
    font-size: $quote-mobile-font-size;
  }
}

@include tablet-md() {
  .paragraph-container {
    font-size:  $quote-tablet-font-size;
  }
}

@include desktop-md() {
  .paragraph-container {
    font-size:  $quote-desktop-font-size;
  }
}

@include largeDesktop-md() {
  .paragraph-container {
    font-size: $quote-large-desktop-font-size;
  }
}
</style>
