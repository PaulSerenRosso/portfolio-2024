<script>
import { defineComponent } from 'vue'
import SpaceParagraph from '@/components/SpaceParagraph.vue'
import MainParagraph from '@/components/MainParagraph.vue'
import BoldElement from "@/components/BoldElement.vue";

export default defineComponent({
  name: 'RsmPitch',
  components: {BoldElement, MainParagraph, SpaceParagraph },
})
</script>

<template>
  <div>

    <space-paragraph>
      RSM is a <bold-element>social horror game</bold-element> played in <bold-element>first-person multiplayer</bold-element>. Up to <bold-element>4 players</bold-element> compete with
      each other using <bold-element>proximity voice chat</bold-element>. You play as prisoners enrolled in a <bold-element>rehabilitation program</bold-element> run by a <bold-element>mysterious
      private company known as RSM</bold-element>.
    </space-paragraph>
    <space-paragraph>
      Under the watchful eye of an <bold-element>all-seeing mascot</bold-element>, you must become the <bold-element>model citizen by </bold-element>performing forced labor in warped
      environments inspired by <bold-element>American life</bold-element> while avoiding <bold-element>unsettling entities</bold-element>. Completing these <bold-element>shared tasks</bold-element> earns you
      <bold-element>points</bold-element> and brings you closer to <bold-element>freedom</bold-element>. But be warned: <bold-element>only the player with the most points will reclaim their place
      in society</bold-element>.
    </space-paragraph>
    <space-paragraph>
      To rise to the top, master the art of <bold-element>betrayal</bold-element>: eliminate your rivals with a variety of <bold-element>gadgets</bold-element> and fulfill the
      mascot’s whims to earn extra points.
    </space-paragraph>
    <main-paragraph>
      <bold-element> Good luck, prisoners.</bold-element>
    </main-paragraph>

  </div>
</template>

<style scoped lang="scss"></style>
