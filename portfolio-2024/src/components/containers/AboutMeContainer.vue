<script>
import { defineComponent } from 'vue'
import PageTitle from '@/components/PageTitle.vue'
import Subtitle from '@/components/Subtitle.vue'
import MainParagraph from '@/components/MainParagraph.vue'
import PropPopup from '@/components/PropPopup.vue'
import RadialGradient from '@/components/RadialGradient.vue'
import MainQuote from '@/components/MainQuote.vue'

export default defineComponent({
  name: 'AboutMeContainer',
  components: {
    MainQuote,
    RadialGradient,
    PropPopup,
    MainParagraph,
    Subtitle,
    PageTitle,
  },
  data(){
    return{
      
    }
  }
})
</script>

<template>
  <div class="about-me-container">
    <page-title class="about-me-title" text-content="What about me?"></page-title>
    <div class="about-me-grid">
      <prop-popup src="/manette.png" gradient-color="red">
        <template v-slot:title>Rebounds of failure</template>
        <template v-slot:paragraph>
          I strive to see failure as an opportunity to grow, not as a roadblock. I take the time to
          reflect, understand what caused this failure, learn from it, and continue on my path.
        </template>
      </prop-popup>
      <prop-popup src="/manette.png" gradient-color="yellow">
        <template v-slot:title> Program with curiosity</template>
        <template v-slot:paragraph>
          I’m passionate about learning across all programming specialties, regardless the languages
          or game engines. I truly enjoy crafting solutions tailored to the needs of projects and
          teams.
        </template>
      </prop-popup>
      <prop-popup src="/rocket.png" gradient-color="cyan">
        <template v-slot:title>Inspired by my team</template>
        <template v-slot:paragraph>
          I find it incredibly enriching to understand the knowledge and challenges faced by other
          members of my team and how my work contributes to theirs.
        </template>
      </prop-popup>
      <prop-popup src="/fraise.png" gradient-color="blue">
        <template v-slot:title> Sport for Self improving</template>
        <template v-slot:paragraph>
          After 10 years of competitive handball, I thrive on sports like badminton, swimming, and
          tennis. I love how they build focus, values, and determination—now training for a half
          marathon!
        </template>
      </prop-popup>
      <prop-popup src="/manette.png" gradient-color="green">
        <template v-slot:title>Cooking, eating good foods!</template>
        <template v-slot:paragraph>
          I love eating healthy, and baking cookies and ice cream as a reward! Cooking is my escape,
          a relaxing treat for myself.
        </template>
      </prop-popup>
      <prop-popup src="/fraise.png" gradient-color="violet">
        <template v-slot:title>Exploring life across medias!</template>
        <template v-slot:paragraph>
          I love diving into video game experiences, playing board games with friends, and exploring
          the captivating worlds of movies and books.
        </template>
      </prop-popup>
    </div>
    <main-quote :is-right-direction="false" class="socket-quote"
      >Finally, I have a collection of more 50 pairs of sockets!
    </main-quote>
  </div>
</template>

<style scoped lang="scss">
.about-me-grid {
  display: grid;
  padding-left: 10px;
  padding-right: 10px;
  width: calc(100%);

  position: relative;
}

.socket-quote {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: MySemiBold;
}

.about-me-container {
  position: relative;
  width: 100%;
  z-index: 1;
  padding-top: 30px;
}

.about-me-title {
  width: 100%;
  text-align: left;
  padding-left: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 20px;
}

@include mobile-md() {
  .about-me-grid {
    grid-template-rows: repeat(3, 1fr);
    grid-auto-columns: auto;
    grid-row-gap: 30px;
  }
}

@include tablet-md() {
  .about-me-grid {
    grid-template-rows: repeat(2, 2fr);
    grid-template-columns: repeat(2, 2fr);
    grid-row-gap: 30px;
    grid-column-gap: 30px;
  }
}

@include desktop-md() {
  .about-me-grid {
    grid-auto-rows: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
  }
}

@include largeDesktop-md() {
  .about-me-grid {
    grid-auto-rows: auto;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
  }
}
</style>
