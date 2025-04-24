<script>
import { defineComponent } from 'vue'

import SlideInAnimation from '@/components/SlideInAnimation.vue'

export default defineComponent({
  name: 'PageTitle',
  components: { SlideInAnimation},
  props: {
    textContent: String,
  },
})
</script>

<template>
  <div class="page-title-container">
    <slide-in-animation :delay="500" :is-right-direction="false">
      <div>{{textContent}}</div>
    </slide-in-animation>
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
