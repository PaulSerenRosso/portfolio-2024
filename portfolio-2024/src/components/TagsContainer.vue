<script>
import TagElement from '@/components/TagElement.vue'

export default {
  name: 'TagsContainer',
  components: { TagElement },
  props: {
    tags: Array,
  },
}
</script>

<template>
  <div class="container">
    <tag-element v-for="(tag, index) in this.tags" :key="index">
      {{tag }}
    </tag-element>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
