<script>
import {defineComponent} from 'vue'
import PageTitle from "@/components/PageTitle.vue";
import MainButton from "@/components/MainButton.vue";

export default defineComponent({
  name: "ResumeContainer",
  components: {MainButton, PageTitle}
})
</script>

<template>
<page-title text-content="Resumes"> </page-title>
  <div>
    <main-button>Get my English Resume</main-button>
    <main-button></main-button>
  </div>
</template>

<style scoped lang="scss">

</style>
