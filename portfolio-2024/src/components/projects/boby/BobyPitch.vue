<script>
import { defineComponent } from 'vue'
import SpaceParagraph from "@/components/SpaceParagraph.vue";
import MainParagraph from "@/components/MainParagraph.vue";
import LinkElement from "@/components/LinkElement.vue";
import BoldElement from "@/components/BoldElement.vue";

export default defineComponent({
  name: 'BobyPitch',
  components: {BoldElement, LinkElement, MainParagraph, SpaceParagraph},
})
</script>

<template>
  <div>


  <space-paragraph>
    <link-element link="https://boby.net/">Boby</link-element> is a <bold-element>software solution</bold-element> designed for professionals in the <bold-element>construction industry</bold-element>,
    developed by Cegid and based in Bordeaux. It belongs to the "contech" (construction technology)
    category, which aims to <bold-element>digitize</bold-element> and <bold-element>modernize</bold-element> the construction sector with innovative tools.
  </space-paragraph>
  <space-paragraph>
    Boby’s flagship product is a <bold-element>SaaS</bold-element> (Software as a Service) application named "Boby",
    which provides construction artisans with a comprehensive range of features to <bold-element>optimize their
    daily management.</bold-element>
  </space-paragraph>
  <space-paragraph>
    My mission was to explore and develop the <bold-element>gamification aspect</bold-element> within the
    software. After learning more about the product, I researched and proposed different gamification
    possibilities. One of them was selected for development until the end of the internship. The
    chosen concept is an <bold-element>arcade video game</bold-element>  where players need to destroy <bold-element>components</bold-element> with the right
    <bold-element>tools</bold-element> and survive <bold-element>waves</bold-element> of components to achieve the best <bold-element>score</bold-element>.
  </space-paragraph>
  <main-paragraph>
    The goal of the prototype is to <bold-element>integrate it into the software</bold-element>, offering users a <bold-element>distraction</bold-element> between <bold-element>work sessions</bold-element>. The purpose of
    the video game is to serve as a <bold-element>foundation</bold-element> for future development of gamification within the
    software.
  </main-paragraph>
  </div>

</template>

<style scoped lang="scss"></style>
