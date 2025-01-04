<script >


export default {
  name: "MainImage",
  props:{
    src: String,
  }
}
</script>

<template>
  <img class="main-image" :src="require('@/assets/'+this.src)" alt="">
</template>

<style scoped>

</style>