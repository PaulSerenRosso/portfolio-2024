<script>
import { defineComponent } from 'vue'
import SlideInAnimation from '@/components/SlideInAnimation.vue'
import RadialGradient from '@/components/RadialGradient.vue'

export default defineComponent({
  name: 'PopupContainer',
  components: { RadialGradient },

  props: {
    classContainerName: String,
    gradientColor: String,
    isLazy:{ Boolean, default: true },
  },
})
</script>

<template>
  <div class="root">
    <radial-gradient :is-lazy="isLazy"
      v-if="gradientColor !== undefined"
      :top="50"
      :left="50"
      :radius-x="60"
      :radius-y="60"
      :color="this.gradientColor"
    ></radial-gradient>
    <div :class="'container ' + this.classContainerName" ref="container">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.root {
  position: relative;
  padding: 25px;
}

.container {
  position: relative;
  padding: 10px;
}
</style>
