<script>
import { defineComponent } from 'vue'
import SpaceParagraph from '@/components/SpaceParagraph.vue'
import MainParagraph from '@/components/MainParagraph.vue'
import BoldElement from "@/components/BoldElement.vue";

export default defineComponent({
  name: 'JabKeypointDescriptionAi',
  components: {BoldElement, MainParagraph, SpaceParagraph },
})
</script>

<template>
  <div>
    <space-paragraph>
      Using the architecture and tools we shared with the other programmer, I developed a range of
      AI behaviors. I implemented <bold-element>grid-based attack patterns</bold-element> such as lines,
      point attacks, and random grid attacks, along with specific <bold-element>movement patterns</bold-element> and moments of
      <bold-element>vulnerability</bold-element>. For example, after the cowboy shoots, the player can hit and stun the cowboy.</space-paragraph>
    <main-paragraph>
      The AI's behavior is influenced by <bold-element>probabilities</bold-element> based on a <bold-element>curve</bold-element> with
      the hype value. For instance, if the boss is close to the player's gauge, the probability of
      the boss attacking increases. The behavior is also determined by the
      player's <bold-element>distance</bold-element> and <bold-element>position</bold-element>, as well as <bold-element>timers</bold-element>. Finally, I created nodes to trigger
        <bold-element>feedbacks</bold-element> such as FX and animations.</main-paragraph>
  </div>
</template>

<style scoped lang="scss"></style>
