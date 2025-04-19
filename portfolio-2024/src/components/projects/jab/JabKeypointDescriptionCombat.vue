<script>
import { defineComponent } from 'vue'
import SpaceParagraph from '@/components/SpaceParagraph.vue'
import MainParagraph from '@/components/MainParagraph.vue'
import BoldElement from "@/components/BoldElement.vue";
import LinkElement from "@/components/LinkElement.vue";

export default defineComponent({
  name: 'JabKeypointDescriptionCombat',
  components: {LinkElement, BoldElement, MainParagraph, SpaceParagraph },
})
</script>

<template>
  <div>
    <space-paragraph>
      For the combat inputs, I implemented actions based on <bold-element>swipe</bold-element>, <bold-element>hold</bold-element>, and <bold-element>tap</bold-element> gestures. The
      combat system uses three main scripts: the player controller, action handler, and action
      script. The controller <bold-element>handles input</bold-element>, the handler <bold-element>checks conditions</bold-element> to trigger actions, and
      the action script <bold-element>executes</bold-element> them.
    </space-paragraph>
    <space-paragraph>
      I create an <bold-element>input buffer</bold-element>, letting players <bold-element>queue inputs</bold-element> for later
      execution when conditions are met, ensuring a <bold-element>fluid experience</bold-element>. The movement system keeps the
        camera focused on the boss, and the player's direction is based on their position relative to
      the boss, within the arena guided by point spawners on a <bold-element>polar grid</bold-element>. The attack and
      taunt mechanics include phases like <bold-element>anticipation</bold-element>, <bold-element>damage</bold-element>, <bold-element>recovery</bold-element> and <bold-element>cancel windows</bold-element>,
      and the player can <bold-element>chain attacks</bold-element> in a <bold-element>combo system</bold-element> with specific <bold-element>timing windows</bold-element>.
    </space-paragraph>
    <main-paragraph>
      I created a <bold-element>reusable cinematic system </bold-element>for the start and end of combat to <bold-element>save time</bold-element> for game
      artists. They only need <bold-element>one timeline per type of cinematic</bold-element>, while I handle <bold-element>animations and
      character positions</bold-element>. The artist’s timeline focuses on <bold-element>camera movement</bold-element>. I use <link-element link="https://docs.unity3d.com/Manual/com.unity.addressables.html">Addressables</link-element> to
      load environment and characters <bold-element>asynchronously</bold-element>, preventing<bold-element> memory bloating</bold-element> from unused assets.
    </main-paragraph>
  </div>
</template>

<style scoped lang="scss"></style>
