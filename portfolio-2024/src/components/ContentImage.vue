<script>
import { defineComponent } from 'vue'
import MainImage from '@/components/MainImage.vue'

export default defineComponent({
  name: 'ContentImage',
  components: { MainImage },
  props: {
    src: {},

    hasAnimation: { Boolean, default: true },
  },
  mounted() {
    console.log(this.src)
  },
})
</script>

<template>
  <main-image :src="src" class="content-image"></main-image>
</template>

<style scoped lang="scss">
.content-image {
  border-color: $main-light-highlight-color;
  border-width: 10px;
  border-style: solid;
  border-radius: 10px;
}

@include mobile-md() {
  .content-image {
    border-color: $main-light-highlight-color;
    border-width: 0;
    border-style: solid;
    border-radius: 0;
  }
}
</style>
