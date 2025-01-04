<script setup>

import RadialGradient from "@/components/RadialGradient.vue";
import WelcomeContainer from "@/components/containers/WelcomeContainer.vue";
import AboutMeContainer from "@/components/containers/AboutMeContainer.vue";
import EndRedirector from "@/components/EndRedirector.vue";
</script>

<template>
<welcome-container></welcome-container>
  <div style="height: 20%"></div>
  <about-me-container></about-me-container>
  <end-redirector text-content="Watch out my experiences and student projects" link="/ProjectsOverviewView" ></end-redirector>

</template>
<style scoped lang="scss">
.text-test
{
  font-family: MyBold;
  color: $main-black-color;

  font-size: $page-title-large-desktop-font-size;
}
.gradient-test{
position: absolute;
  top: 10%;
  left: 20%;
  width: 400px;
  aspect-ratio: 1 / 1;
  height: auto;

}

.gradient-test2{
  position: absolute;
  top: 80%;
  left: 80%;
}

</style>
