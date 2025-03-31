<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "LinkElement",
  props:{
    link:String,
  }
})
</script>

<template>
<a :href="link" class="link" target="_blank"><slot></slot></a>
</template>

<style scoped lang="scss">
.link
{
font-family: MyLight;
  color: $main-black-color;
}
</style>
