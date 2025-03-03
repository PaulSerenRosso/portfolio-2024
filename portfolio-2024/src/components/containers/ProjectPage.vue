<script>
import ScrollReset from '@/components/ScrollReset.vue'
import EndRedirector from '@/components/EndRedirector.vue'
import ProjectKeypointsContainer from '@/components/containers/ProjectKeypointsContainer.vue'
import ProjectSummaryContainer from '@/components/containers/ProjectSummaryContainer.vue'
import { useProjectInfoStore } from '@/store/ProjectsInfoStore.js'

export default {
  name: 'ProjectPage',
  components: { ProjectSummaryContainer, ProjectKeypointsContainer, EndRedirector, ScrollReset },
  props: {
    projectKey: String,
    nextProjectKey: String,
  },
  setup() {
    const projectsInfoStoreRef = useProjectInfoStore()
    return { projectsInfoStore: projectsInfoStoreRef }
  },
}
</script>

<template>
  <project-summary-container
    :one-line-text="this.projectsInfoStore.allProjectsInfo[this.projectKey].oneLineText"
    :pitch-text="this.projectsInfoStore.allProjectsInfo[this.projectKey].pitchText"
    :project-name="this.projectsInfoStore.allProjectsInfo[this.projectKey].projectName"
    :role-text="this.projectsInfoStore.allProjectsInfo[this.projectKey].roleText"
    :staff-text="this.projectsInfoStore.allProjectsInfo[this.projectKey].staffText"
    :tags-text="this.projectsInfoStore.allProjectsInfo[this.projectKey].tagsText"
    :timeline-text="this.projectsInfoStore.allProjectsInfo[this.projectKey].timelineText"
    :trailer-src="this.projectsInfoStore.allProjectsInfo[this.projectKey].trailerSrc"
    :first-gradient-color="
      this.projectsInfoStore.allProjectsInfo[this.projectKey].firstGradientColor
    "
    :second-gradient-color="
      this.projectsInfoStore.allProjectsInfo[this.projectKey].secondGradientColor
    "
  ></project-summary-container>
  <project-keypoints-container
    :first-gradient-color="
      this.projectsInfoStore.allProjectsInfo[this.projectKey].firstGradientColor
    "
    :second-gradient-color="
      this.projectsInfoStore.allProjectsInfo[this.projectKey].secondGradientColor
    "
    :keypoints="this.projectsInfoStore.allProjectsInfo[this.projectKey].keypoints"
  />
  <end-redirector
    :link="this.projectsInfoStore.allProjectsInfo[this.nextProjectKey].link"
    :text-content="
      'Take a look to ' +
      this.projectsInfoStore.allProjectsInfo[this.nextProjectKey].projectName +
      ', ' +
      this.projectsInfoStore.allProjectsInfo[this.nextProjectKey].oneLineText
    "
  />
  <scroll-reset />
</template>

<style scoped lang="scss"></style>
