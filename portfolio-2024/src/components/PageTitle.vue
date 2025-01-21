<script>
import { defineComponent } from 'vue'
import LettersAnimation from '@/components/LettersAnimation.vue'

export default defineComponent({
  name: 'PageTitle',
  components: { LettersAnimation },
  props: {
    textContent: String,
  },
})
</script>

<template>
  <div class="page-title-container">
    <letters-animation :delay="1000" :text-content="textContent"></letters-animation>
  </div>
</template>

<style scoped lang="scss">
.page-title-container {
  color: $main-black-color;
  font-family: MyBold;
}

@include mobile-md() {
  .page-title-container {
    font-size: $page-title-mobile-font-size;
    line-height: $page-title-mobile-font-size;
  }
}

@include tablet-md() {
  .page-title-container {
    font-size: $page-title-tablet-font-size;
    line-height: $page-title-tablet-font-size + 10;
  }
}

@include desktop-md() {
  .page-title-container {
    font-size: $page-title-desktop-font-size;
    line-height: $page-title-desktop-font-size + 10;
  }
}

@include largeDesktop-md() {
  .page-title-container {
    font-size: $page-title-large-desktop-font-size;
    line-height: $page-title-large-desktop-font-size + 10;
  }
}
</style>
