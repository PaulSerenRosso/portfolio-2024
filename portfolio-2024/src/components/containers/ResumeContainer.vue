<script>
import { defineComponent } from 'vue'
import PageTitle from '@/components/PageTitle.vue'
import MainButton from '@/components/MainButton.vue'
import MainQuote from '@/components/MainQuote.vue'

export default defineComponent({
  name: 'ResumeContainer',
  components: { MainQuote, MainButton },
})
</script>

<template>
  <main-quote :delay="1000" class="resume-title">Look at my resume, download it!</main-quote>
  <div class="resume-container">
    <a
      class="resume-button"
      href="/pdf/Paul_SEREN_ROSSO_Resume.pdf"
      download="Paul_SEREN_ROSSO_Resume.pdf"
    >
      <main-button>Get my English Resume!</main-button>
    </a>
    <a class="resume-button" href="/pdf/Paul_SEREN_ROSSO_CV.pdf" download="Paul_SEREN_ROSSO_CV.pdf">
      <main-button :delay="1500">Get my French Resume!</main-button>
    </a>
  </div>
</template>

<style scoped lang="scss">
.resume-button {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  text-decoration: none;
  padding: 10px;
}

.resume-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 20px);
  padding: 20px;
}

.resume-title {
  width: calc(100% - 20px);
  padding: 10px;
  text-align: center;
}
</style>
