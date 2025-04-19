<script>
import { defineComponent } from 'vue'
import SpaceParagraph from '@/components/SpaceParagraph.vue'
import MainParagraph from "@/components/MainParagraph.vue";
import BoldElement from "@/components/BoldElement.vue";

export default defineComponent({
  name: 'InrsKeypointDescriptionCruise',
  components: {BoldElement, MainParagraph, SpaceParagraph },
})
</script>

<template>
  <div>
    <space-paragraph>
      I implemented the entire system of the the cruise phase. One of the main
      challenges was our <bold-element>systems</bold-element> were <bold-element>shared</bold-element> between the <bold-element>two phases</bold-element>, construction and spatial with
      differences. To manage this, I created <bold-element>interfaces</bold-element> with <bold-element>Start</bold-element>, <bold-element>Update</bold-element>, and<bold-element> End</bold-element>
      methods for each phase.
    </space-paragraph>
    <space-paragraph>
      The main technical challenge was <bold-element>merging all the physical blocks,
      along with the rocket’s base and its top</bold-element> (placed at the highest point), into a <bold-element>single mesh</bold-element>.
      The <bold-element>rocket's physics</bold-element> system was based on <bold-element>localized forces</bold-element> applied by the <bold-element>thrusters</bold-element>. I also
      developed a <bold-element>camera</bold-element> that follows the <bold-element>winning player</bold-element> from behind and implemented <bold-element>collision</bold-element> for the
      rocket, including <bold-element>screen limits</bold-element>.
    </space-paragraph>
      <main-paragraph>
      Additionally, I assigned <bold-element>mass</bold-element> to both the <bold-element>rocket</bold-element> and the
        <bold-element>asteroids</bold-element> based on their <bold-element>scale</bold-element>. The <bold-element>heavier the rocket</bold-element>, the <bold-element>easier </bold-element>it was for the players to
          <bold-element>push the asteroids</bold-element>. The asteroid field was <bold-element>procedurally</bold-element> generated using a <bold-element>pool of level
      segments</bold-element> defined by <bold-element>difficulty</bold-element>. I designed a <bold-element>level progression </bold-element>system that
      determines when and how each type of segment is introduced. All parameters were stored in
              in<bold-element> DataAssets</bold-element> to make the system easily adjustable by in game designers.
      </main-paragraph>
  </div>
</template>

<style scoped lang="scss"></style>
