<script>
import {defineComponent} from 'vue'
import SpaceParagraph from '@/components/SpaceParagraph.vue'
import MainParagraph from '@/components/MainParagraph.vue'
import BoldElement from "@/components/BoldElement.vue";

export default defineComponent({
  name: 'RsmKeypointDescriptionResearch',
  components: {BoldElement, MainParagraph, SpaceParagraph},
})
</script>

<template>
  <div>
    <space-paragraph>
      Before developing the proof of concept, we explored solutions for
      <bold-element>multiplayer</bold-element> and
        <bold-element>voice
          integration</bold-element>. We chose
          <bold-element>Steam's Listen Server</bold-element> for networking and
            <bold-element>Vivox</bold-element> for spatialized voice
              chat. We prototyped a lobby system with
              <bold-element>friend requests</bold-element> and voice features based on in-game
                positioning.
    </space-paragraph>
    <space-paragraph>
      I also
      <bold-element>set up</bold-element> and
        <bold-element>documented</bold-element> our
          <bold-element>Perforce</bold-element>, helping the team adopt version control efficiently. I created two main streams: a
            <bold-element>Main stream</bold-element> for <bold-element>daily
            development work</bold-element>, a <bold-element>Release stream</bold-element> for <bold-element>important builds</bold-element>, focused on stabilization and
            debugging. We also decided to make each <bold-element>sprint's end a build</bold-element>, allowing the team to <bold-element>playtest</bold-element> the
            game and <bold-element>debug multiplayer issues</bold-element>.
    </space-paragraph>
    <main-paragraph>
      In parallel, I also <bold-element>prototyped a solo non-Euclidean space</bold-element>, which was one of our key unique
      selling points (USP). I collaborated closely with the <bold-element>technical artist</bold-element> to identify and address
      the visual and technical challenges of this system. However, after evaluating the <bold-element>production
      costs</bold-element> especially the incompatibility with <bold-element>Lumen</bold-element> and the <bold-element>complexities in a multiplayer</bold-element>
      context we ultimately decided to <bold-element>cut</bold-element> the feature.
    </main-paragraph>
  </div>
</template>

<style scoped lang="scss"></style>
