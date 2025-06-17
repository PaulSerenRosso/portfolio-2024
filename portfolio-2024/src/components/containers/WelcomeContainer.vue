<script>
import { defineComponent } from 'vue'
import MainVideo from '@/components/MainVideo.vue'
import PageTitle from '@/components/PageTitle.vue'
import RadialGradient from '@/components/RadialGradient.vue'
import MainParagraph from '@/components/MainParagraph.vue'
import MainQuote from '@/components/MainQuote.vue'
import LinkElement from "@/components/LinkElement.vue";

export default defineComponent({
  name: 'WelcomeContainer',
  components: {LinkElement, MainQuote, MainParagraph, RadialGradient, PageTitle, MainVideo },
})
</script>


<template>
  <div class="welcome-container">
    <radial-gradient :is-lazy="false" :top="0" :left="10" :radius-x="30" :radius-y="20" color="blue"></radial-gradient>

    <radial-gradient :is-lazy="false" :top="90" :left="90" :radius-x="30" :radius-y="20" color="yellow"></radial-gradient>
    <radial-gradient :is-lazy="false" :top="100" :left="-5" :radius-x="30" :radius-y="20" color="red"></radial-gradient>
    <radial-gradient :is-lazy="false" :top="0" :left="100" :radius-x="40" :radius-y="20" color="lightGreen"></radial-gradient>
    <page-title
      text-content="Welcome! I am Paul, a Gameplay Programmer."
      class="welcome-title"
    ></page-title>

    <div class="welcome-video">
      <main-video  :delay="2000" src="vik-G4pqntk"></main-video>
    </div>

  </div>

</template>

<style scoped lang="scss">
@include mobile-md() {
  .welcome-video {
    width: 100%;
  }
}

@include tablet-md() {
  .welcome-video {
    width: 90%;
  }
}

@include largeDesktop-md() {
  .welcome-video {
    width: 120vh;
    max-width: 90%;
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
  padding-bottom: 1rem;
}


</style>
