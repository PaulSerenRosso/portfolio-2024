<script>
import { defineComponent } from 'vue'
import MainParagraph from '@/components/MainParagraph.vue'
import BoldElement from '@/components/BoldElement.vue'
import LinkElement from '@/components/LinkElement.vue'
import SpaceParagraph from '@/components/SpaceParagraph.vue'

export default defineComponent({
  name: 'EsquirelFogKeypointDescription',
  components: { SpaceParagraph, LinkElement, BoldElement, MainParagraph },
})
</script>

<template>
  <div>


  <space-paragraph
    >Esquirel is a 2v2 MOBA. The players play squirrels and fight for collecting nuts around
    <bold-element>control points.</bold-element> The importance of the
    <link-element link="https://www.ankama.com/fr">vision</link-element> is the key of the victory.
  </space-paragraph>
  <main-paragraph
    >The fog of war, the bushes, wards or even the Squirels’ abilities push the players to ambush
    and be careful regarding their enemies’ positions. The universe in hand paint was inspired by
    Robin hood.</main-paragraph
  >
  </div>
</template>

<style scoped lang="scss"></style>
