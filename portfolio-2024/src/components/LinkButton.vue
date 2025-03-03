<script>
import MainButton from '@/components/MainButton.vue'

export default {
  name: 'LinkButton',
  components: { MainButton },
  props:{
    link:String
  }
}
</script>

<template>
  <a :href="link" target="_blank" class="link-button">
    <main-button><slot></slot></main-button>
  </a>
</template>

<style scoped lang="scss">
.link-button {

  display: block;
  width: min-content;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  text-decoration: none;
}
</style>
