<script>
import { defineComponent } from 'vue'
import ProjectPage from '@/components/containers/ProjectPage.vue'

export default defineComponent({
  name: 'RSMView',
  components: { ProjectPage },
})
</script>

<template>
  <project-page project-key="rsmProject" next-project-key="inrsProject" />
</template>

<style scoped lang="scss"></style>
