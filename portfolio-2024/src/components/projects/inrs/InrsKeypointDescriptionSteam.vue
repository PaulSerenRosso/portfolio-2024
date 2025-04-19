<script>
import { defineComponent } from 'vue'
import SpaceParagraph from '@/components/SpaceParagraph.vue'
import MainParagraph from '@/components/MainParagraph.vue'
import BoldElement from '@/components/BoldElement.vue'
import LinkElement from '@/components/LinkElement.vue'

export default defineComponent({
  name: 'InrsKeypointDescriptionSteam',
  components: { LinkElement, BoldElement, MainParagraph, SpaceParagraph },
})
</script>

<template>
  <div>
    <main-paragraph>
      After finishing production and completing a <bold-element>debugging</bold-element> and
      <bold-element>polishing</bold-element> phase, we decided to
      <bold-element>release</bold-element> our game on <bold-element>Steam</bold-element>. I helped
      integrate the
      <link-element link="https://partner.steamgames.com/doc/sdk">Steam SDK</link-element> and
      ensured the build followed all the necessary rules imposed by Steam. I also created the game's
      <bold-element>Steam page</bold-element>, set up <bold-element>achievements</bold-element>, and
      linked them to in-game behaviors in our code.
    </main-paragraph>
  </div>
</template>

<style scoped lang="scss"></style>
