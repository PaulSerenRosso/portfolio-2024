<script>
import { defineComponent } from 'vue'
import EndRedirector from '@/components/EndRedirector.vue'
import PageTitle from '@/components/PageTitle.vue'
import ProjectOverview from '@/components/ProjectOverview.vue'
import { useProjectInfoStore } from '@/store/ProjectsInfoStore.js'
import ScrollReset from '@/components/ScrollReset.vue'

export default defineComponent({
  name: 'ProjectsOverview',
  components: { ScrollReset, ProjectOverview, PageTitle, EndRedirector },
  setup() {
    const projectsInfoStoreRef = useProjectInfoStore()
    return { projectsInfoStore: projectsInfoStoreRef }
  },
})
</script>

<template>
  <page-title class="key-projects-title" text-content="Watch out my projects!"></page-title>
  <div class="key-projects-container">
    <div v-for="(projectInfo, index) in this.projectsInfoStore.allProjectsInfo" :key="index">
      <project-overview
        :gradient-color="projectInfo.firstGradientColor"
        :PictureOverviewSrc="projectInfo.overviewPictureSrc"
        :one-line="projectInfo.oneLineText"
        :subtitle="projectInfo.projectName"
        :tags="projectInfo.tagsText"
        :link="projectInfo.link"
      ></project-overview>
    </div>
  </div>
  <end-redirector text-content="Contact me !" link="/contacts"></end-redirector>
  <scroll-reset />
</template>

<style scoped lang="scss">
.key-projects-container {
  display: grid;


  width: calc(100%);
  grid-row-gap: 10px;
  position: relative;
  padding-top: 30px;


}

.key-projects-title {
  position: relative;
  width: 100%;
  text-align: center;
  padding-top: 20px;

}

@include mobile-md() {
  .key-projects-container {
    grid-template-rows: repeat(3, 1fr);
  }
}
@include tablet-md() {
  .key-projects-container {
    grid-template-rows: repeat(2, 2fr);
    grid-template-columns: repeat(1, 2fr);

    grid-column-gap: 30px;
    padding-left: 20px;
    padding-right: 20px;
  }
}

@include desktop-md() {
  .key-projects-container {
    grid-auto-rows: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
    padding-left: 100px;
    padding-right: 100px;
  }
}




@include largeDesktop-md() {
  .key-projects-container {
    grid-auto-rows: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
    padding-left: 100px;
    padding-right: 100px;
  }
}
</style>
