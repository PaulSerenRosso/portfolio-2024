<script>
import { defineComponent } from 'vue'
import SpaceParagraph from '@/components/SpaceParagraph.vue'
import MainParagraph from '@/components/MainParagraph.vue'
import BoldElement from "@/components/BoldElement.vue";

export default defineComponent({
  name: 'RsmKeypointDescriptionConcept',
  components: {BoldElement, MainParagraph, SpaceParagraph },
})
</script>

<template>
  <div>
    <space-paragraph>
      The <bold-element>initial concept</bold-element> for the project was created by an <bold-element>artist</bold-element> who wrote a document outlining
      the <bold-element>first creative intentions</bold-element>. After the project was selected to move to the next phase, I
      joined the team alongside another artist, forming the project's <bold-element>core team</bold-element>. At that point, our
      mission was to <bold-element>refine</bold-element> the concept and compare the original vision with <bold-element>new perspectives</bold-element>. To
      support this process, we conducted in depth <bold-element>research</bold-element> on <bold-element>liminal spaces</bold-element> and <bold-element>cooperative
      horror games</bold-element>. We engaged in numerous <bold-element>brainstorming</bold-element> sessions with the original vision holder
      to <bold-element>shape</bold-element> both the <bold-element>artistic direction</bold-element> and the <bold-element>game intentions</bold-element> and <bold-element>core mechanics</bold-element>, despite not yet having any dedicated
      designers on board.
    </space-paragraph>
    <main-paragraph>
      To convey the experience we wanted to create, we put together a carefully <bold-element>crafted presentation</bold-element>
      designed to <bold-element>immerse</bold-element> the viewer in the <bold-element>game's atmosphere</bold-element>. It included a trailer made from
      sample videos, as well as a breakdown of the artistic direction, core pillars, unique selling
      points (USPs), gameplay situations, and key systems and mechanics. We paid special attention
      to the form and flow of the presentation, making sure it wasn’t just <bold-element>informative</bold-element>, but also
        <bold-element>emotionally engaging</bold-element>. Thanks to this work, our project was once again selected for the next
      phase.
    </main-paragraph>
  </div>
</template>

<style scoped lang="scss"></style>
