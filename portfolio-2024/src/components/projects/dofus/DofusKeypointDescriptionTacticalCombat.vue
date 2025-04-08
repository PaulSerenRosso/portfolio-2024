<script>
import { defineComponent } from 'vue'
import SpaceParagraph from "@/components/SpaceParagraph.vue";
import MainParagraph from "@/components/MainParagraph.vue";
import BoldElement from "@/components/BoldElement.vue";

export default defineComponent({
  name: 'DofusKeypointDescriptionTacticalCombat',
  components: {BoldElement, MainParagraph, SpaceParagraph},
})
</script>

<template>
  <div>
  <space-paragraph>
    Regarding the combat system in Dofus, I started developing small features for <bold-element>combat interfaces</bold-element>, such
    as the Kolossium UI and the end-turn button. Some of these features required <bold-element>collaboration with
    the server developers</bold-element>, who had to implement part of the feature on their side and send the
    corresponding <bold-element>network messages</bold-element> so that I could implement them on the client side.
  </space-paragraph>
  <main-paragraph>
    After that, I
    worked directly on the <bold-element>combat sequences</bold-element>. To fix these bugs, I had to work in parallel with the
    <bold-element>Flash version</bold-element> of the game to compare certain combat behaviors and better track down the source of
    the issues. The challenge with these bugs was that they occurred in very <bold-element>specific contexts</bold-element>, and
    modifying the combat sequences which is a <bold-element>global system</bold-element> could cause other bugs in different
    situations.
  </main-paragraph>
  </div>
</template>

<style scoped lang="scss"></style>
