<script setup>
import WelcomeContainer from '@/components/containers/WelcomeContainer.vue'
import AboutMeContainer from '@/components/containers/AboutMeContainer.vue'
import EndRedirector from '@/components/EndRedirector.vue'
import ResumeContainer from '@/components/containers/ResumeContainer.vue'
import ScrollReset from "@/components/ScrollReset.vue";
</script>

<template>
  <welcome-container>

  </welcome-container>
  <div style="height: 20%"></div>

  <about-me-container></about-me-container>
  <resume-container></resume-container>
  <end-redirector
    text-content="Watch out my experiences and student projects"
    link="/keyProjects"
  ></end-redirector>
  <scroll-reset/>
</template>
<style scoped lang="scss">

</style>
