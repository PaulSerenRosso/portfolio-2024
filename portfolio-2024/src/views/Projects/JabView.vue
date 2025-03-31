<script>
import { defineComponent } from 'vue'
import ProjectPage from '@/components/containers/ProjectPage.vue'

export default defineComponent({
  name: 'JabView',
  components: { ProjectPage },
})
</script>

<template>
  <project-page project-key="jabProject" next-project-key="dofusBetaProject" />
</template>

<style scoped lang="scss"></style>
