<script>
import { defineComponent } from 'vue'
import ProjectPage from '@/components/containers/ProjectPage.vue'

export default defineComponent({
  name: 'BobyView',
  components: { ProjectPage },
})
</script>

<template>
  <project-page project-key="bobyProject" next-project-key="esquirelProject" />
</template>

<style scoped lang="scss"></style>
