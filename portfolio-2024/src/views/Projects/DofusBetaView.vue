<script>
import { defineComponent } from 'vue'
import ProjectPage from '@/components/containers/ProjectPage.vue'

export default defineComponent({
  name: 'DofusBetaView',
  components: { ProjectPage },
})
</script>

<template>
  <project-page project-key="dofusBetaProject" next-project-key="rsmProject" />
</template>

<style scoped lang="scss"></style>
