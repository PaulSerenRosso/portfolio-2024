<script>
import { defineComponent } from 'vue'
import SpaceParagraph from "@/components/SpaceParagraph.vue";
import MainParagraph from "@/components/MainParagraph.vue";
import BoldElement from "@/components/BoldElement.vue";

export default defineComponent({
  name: 'BobyKeypointDescriptionAccessibility',
  components: {BoldElement, MainParagraph, SpaceParagraph},
})
</script>

<template>
  <div>
    <space-paragraph>
      A large portion of Boby's users are not familiar with <bold-element>computer software</bold-element>, so accessibility was a
      key focus. First, I created a <bold-element>tutorial</bold-element> using a <bold-element>dialogue system</bold-element>, and a tutorial wave featuring <bold-element>static enemies </bold-element>and tutorial
      <bold-element>highlights</bold-element>.
    </space-paragraph>
    <space-paragraph>
    Since the game has an arcade style, destroying components needed to feel satisfying. I
      developed various <bold-element>CSS animation classes</bold-element>, handled by  <bold-element>timers in JavaScript</bold-element>,
      for damaged component effects, tools using, user interfaces, and power-ups.
    </space-paragraph>
    <space-paragraph>
      Regarding
      <bold-element>physics-based</bold-element> feedbacks, I worked on enemy destruction animations using <bold-element>collision detection</bold-element>. Another example is with the saw, where I designed <bold-element>special bounding colliders</bold-element> around the plank.
      To cut the plank, the player must collide with at least two bounding colliders, making the action
      feel more realistic.
    </space-paragraph>
   <main-paragraph>
     Finally, I created <bold-element>custom FX effects</bold-element> by <bold-element>layering images</bold-element> in <bold-element>Illustrator</bold-element> and
     <bold-element> animating each layer in CSS</bold-element> to enhance visual effects.
   </main-paragraph>

  </div>

</template>

<style scoped lang="scss"></style>
