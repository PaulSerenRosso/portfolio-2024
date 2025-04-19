<script>
import { defineComponent } from 'vue'
import MainParagraph from '@/components/MainParagraph.vue'
import BoldElement from '@/components/BoldElement.vue'
import LinkElement from '@/components/LinkElement.vue'
import SpaceParagraph from '@/components/SpaceParagraph.vue'

export default defineComponent({
  name: 'EsquirelKeypointDescriptionFog',
  components: { SpaceParagraph, LinkElement, BoldElement, MainParagraph },
})
</script>

<template>
  <div>
    <main-paragraph>
      The <bold-element>ambushes</bold-element> were a key point of Esquirel, so <bold-element>the fog of war</bold-element> and the interactions with it were
      very important. I worked closely with the <bold-element>tech artist</bold-element> to <bold-element>optimize</bold-element> the generation of the field
        of view mesh and making <bold-element> the reveal and hiding of areas by fog smoother</bold-element> . Additionally, I programmed <bold-element>bushes</bold-element>,
              <bold-element> wards</bold-element>, and <bold-element>abilities</bold-element> that interact with the fog, along with a <bold-element>mini-map</bold-element> based on a render
      texture of the map, the fog texture, and icons to represent certain entities. Finally, I <bold-element>maintained</bold-element> and <bold-element>debug</bold-element> the fog of war system.
    </main-paragraph>


  </div>
</template>

<style scoped lang="scss"></style>
