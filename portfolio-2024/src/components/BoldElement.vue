<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "BoldElement"
})
</script>

<template>
<span class="bold"><slot></slot></span>
</template>

<style scoped lang="scss">
.bold{
  font-family: MyExtraBold;
}
</style>
