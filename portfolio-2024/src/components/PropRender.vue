<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PropRender',
  props: {
    src: {},
  },
  mounted() {

      const levitateElement = this.$refs.propContainer;


        const randomDelay = -Math.random() * 2; // Random delay between 0 and 2 seconds
    levitateElement.style.animationDelay = `${randomDelay}s`;


  }
})
</script>

<template>

  <div ref="propContainer" class="prop-container">
    <picture>
      <source :srcset="this.src.webp" type="image/webp" />
      <img class="prop-render" :src="this.src.png" />
    </picture>
  </div>
</template>

<style scoped>
.prop-render {
  height: auto;
  user-select: none; /* Prevents text selection */
  pointer-events: none; /* Disables mouse interaction */
}
.prop-container {
  animation: levitateAnimation 3s ease-in-out infinite;
}

@keyframes levitateAnimation {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px); /* Upwards movement */
  }
  100% {
    transform: translateY(0); /* Back to original position */
  }
}
</style>
