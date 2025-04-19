<script>
import { defineComponent } from 'vue'
import SpaceParagraph from "@/components/SpaceParagraph.vue";
import MainParagraph from "@/components/MainParagraph.vue";
import BoldElement from "@/components/BoldElement.vue";
import LinkElement from "@/components/LinkElement.vue";

export default defineComponent({
  name: 'InrsKeypointDescriptionelastic',
  components: {LinkElement, BoldElement, MainParagraph, SpaceParagraph},
})
</script>

<template>
  <div>
    <space-paragraph>
    The physics of the elastic was one of the game's unique selling points. At the start of the
    project, another programmer and I began an <bold-element>R&D</bold-element> phase to explore what was possible in Unreal
      Engine. I started by experimenting with the built-in <link-element link="https://dev.epicgames.com/documentation/en-us/unreal-engine/1.5---physicsconstraints?application_version=4.27">physics constraints</link-element>, but quickly ran into
      <bold-element>limitations</bold-element> Unreal didn’t support a scenario where a single block could be influenced by two
    separate hands.
    </space-paragraph>
    <space-paragraph>
      However, allowing <bold-element>multiple players</bold-element> to <bold-element>interact</bold-element> with the <bold-element>same block</bold-element> was essential
    for both cooperation and sabotage mechanics. Because of this, we decided to develop our own
    custom elastic physics system. I explored a more <bold-element>realistic</bold-element> approach based on <bold-element>pendulum motion</bold-element>, using
        <bold-element>reaction forces</bold-element> when the elastic was taut, along with basic <bold-element>acceleration</bold-element> and <bold-element>velocity</bold-element> system. Meanwhile,
    the other programmer worked on a more <bold-element>arcade-style</bold-element> version, applying a <bold-element>simple force</bold-element> toward the
    hand and <bold-element>custom gravity</bold-element> when the block was picked up. Eventually, in collaboration with the game
    designers, we chose to go with a <bold-element>hybrid </bold-element>approach that better matched the desired <bold-element>gameplay feel</bold-element>. I
    implemented this version, blending elements of both realism and arcade behavior.
    </space-paragraph>
    <main-paragraph>
      Later, I
      developed the <bold-element>rotation</bold-element> logic for the blocks. The goal of the physics was to <bold-element>align</bold-element> that the block's rotation with both the <bold-element>pivot point</bold-element> where the elastic was attached and the direction of the <bold-element>player’s
    hands</bold-element>. To achieve this, I implemented <bold-element>angular velocity</bold-element> calculations based on those references.
    </main-paragraph>
  </div>
</template>

<style scoped lang="scss"></style>
