<script>
import {defineComponent} from 'vue'
import EndRedirector from "@/components/EndRedirector.vue";
import PageTitle from "@/components/PageTitle.vue";

export default defineComponent({
  name: "ProjectsOverview",
  components: {PageTitle, EndRedirector}
})
</script>

<template>
  <page-title class="key-projects-title" text-content="Watch out my projects !"></page-title>
<end-redirector text-content="Contact me !" link="/ContactsView"></end-redirector>
</template>

<style scoped>
.key-projects-title{
  position: relative;
  width: 100%;
  text-align: center;
  padding-top: 20px;
}
</style>
