<script>
import { defineComponent } from 'vue'
import MainParagraph from "@/components/MainParagraph.vue";
import SpaceParagraph from "@/components/SpaceParagraph.vue";
import LinkElement from "@/components/LinkElement.vue";
import BoldElement from "@/components/BoldElement.vue";

export default defineComponent({
  name: 'BobyKeypointDescriptionIntegration',
  components: {BoldElement, LinkElement, SpaceParagraph, MainParagraph},
})
</script>

<template>
  <div>
    <space-paragraph>
      To integrate the game within Boby, it was essential for it to function across all <bold-element>browsers</bold-element> and
      <bold-element>platforms</bold-element>, as Boby was used on tablets, mobile devices, and PCs. For quick testing, I used
      <link-element link="https://ngrok.com/">ngrok</link-element>, which allowed me to easily <bold-element>test</bold-element> the game from a phone or tablet under conditions close to
          <bold-element>real-life usage</bold-element>. Additionally, I needed to ensure that <bold-element>inputs</bold-element> were compatible for both mobile and
      PC. This also applied to feedbacks, such as <bold-element>cursors</bold-element> for PCs and <bold-element>touch</bold-element> with
      <bold-element>tool animations</bold-element> for mobiles, for example. Of course, the game had to be responsive using <bold-element>media queries</bold-element>, <bold-element>flexbox</bold-element>,  <bold-element>units</bold-element>.
    </space-paragraph>
    <main-paragraph>
      The integration within the software primarily involved loading data from <bold-element>Boby’s database </bold-element>. I had to
      create variables, such as the best score in <bold-element>SQL</bold-element>, and access them, as well as the user’s avatar in
        <bold-element>PHP</bold-element>, so that it could be <bold-element>updated in JavaScript</bold-element>.
    </main-paragraph>

  </div>

</template>

<style scoped lang="scss"></style>
