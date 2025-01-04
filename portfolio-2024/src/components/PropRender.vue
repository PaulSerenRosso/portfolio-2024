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

    <img class="prop-render" :src="this.src" ></img>
</template>

<style scoped>
.prop-render{

  aspect-ratio: 1/1;
  height: auto;
}
</style>
