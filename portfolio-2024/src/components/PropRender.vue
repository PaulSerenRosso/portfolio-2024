<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "PropRender",
  props: {
    src: String,

  }
});
</script>

<template>

  <img class="prop-render" :src="this.src">
</template>

<style scoped>
.prop-render {


  aspect-ratio: 1/1;
  height: auto;
  user-select: none; /* Prevents text selection */
  pointer-events: none; /* Disables mouse interaction */
}
</style>
