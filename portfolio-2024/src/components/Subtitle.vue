<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Subtitle',
})
</script>

<template>
  <div class="subtitle-container">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.subtitle-container {
  color: $main-black-color;
  font-family: MyLight;
}

@include mobile-md() {
  .subtitle-container {
    font-size: $subtitle-mobile-font-size;
    line-height: $subtitle-mobile-font-size;
  }
}

@include tablet-md() {
  .subtitle-container {
    font-size: $subtitle-tablet-font-size;
    line-height: $subtitle-tablet-font-size + 10;
  }
}

@include desktop-md() {
  .subtitle-container {
    font-size: $subtitle-desktop-font-size;
    line-height: $subtitle-desktop-font-size + 10;
  }
}

@include largeDesktop-md() {
  .subtitle-container {
    font-size: $subtitle-large-desktop-font-size;
    line-height: $subtitle-large-desktop-font-size + 10;
  }
}
</style>
