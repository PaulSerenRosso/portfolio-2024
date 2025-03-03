<script>
import { defineComponent } from 'vue'
import MainVideo from '@/components/MainVideo.vue'
import PageTitle from '@/components/PageTitle.vue'
import RadialGradient from '@/components/RadialGradient.vue'
import MainParagraph from '@/components/MainParagraph.vue'
import MainQuote from '@/components/MainQuote.vue'

export default defineComponent({
  name: 'WelcomeContainer',
  components: { MainQuote, MainParagraph, RadialGradient, PageTitle, MainVideo },
})
</script>
²

<template>
  <div class="welcome-container">
    <radial-gradient top="10" left="10" :radius="20" color="blue"></radial-gradient>
    <radial-gradient top="90" left="90" :radius="25" color="yellow"></radial-gradient>
    <radial-gradient top="100" left="0" :radius="20" color="red"></radial-gradient>
    <radial-gradient top="0" left="100" :radius="25" color="green"></radial-gradient>
    <page-title
      text-content="Welcome, I'm Paul, a Game Programmer!"
      class="welcome-title"
    ></page-title>
    <main-quote class="welcome-quote" :delay="2000">
      M2 Student Game Programming at Rubika / Looking for a 6-month end-of-studies internship from
      June
    </main-quote>

    <div class="welcome-video">
      <main-video delay="3000" src="ProjectsOverview.mp4"></main-video>
    </div>
  </div>
</template>

<style scoped lang="scss">
@include mobile-md() {
  .welcome-video {
    width: 90%;
  }
}

@include tablet-md() {
  .welcome-video {
    width: 90%;
  }
}

@include largeDesktop-md() {
  .welcome-video {
    width: 10vh;
  }
}

@include desktop-md() {
  .welcome-video {
    width: 120vh;
    max-width: 90%;
  }
}

.welcome-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 2rem);
  margin-left: 1rem;
  margin-right: 1rem;
}

.welcome-title {
  text-align: Center;
  width: 100%;
  padding-top: 20px;
}

.welcome-quote {
  padding-bottom: 1rem;
  text-align: Center;
}
</style>
