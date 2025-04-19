<script>
import { defineComponent } from 'vue'
import SpaceParagraph from "@/components/SpaceParagraph.vue";
import MainParagraph from "@/components/MainParagraph.vue";
import BoldElement from "@/components/BoldElement.vue";

export default defineComponent({
  name: 'InrsKeypointDescriptionelasticInteractions',
  components: {BoldElement, MainParagraph, SpaceParagraph},
})
</script>

<template>
  <div>
    <space-paragraph>


  Once the base of the elastic physics was completed, I developed the <bold-element>hands controller</bold-element>, which was
      divided into <bold-element>actor components</bold-element> for each action. The hands represented both a point on the <bold-element>screen</bold-element>
      and a point in <bold-element>world space</bold-element>. I needed to <bold-element>convert</bold-element> the <bold-element>player's movement</bold-element> on the <bold-element>UI—clamped</bold-element> within the
      screen into movement of a point in world space. Next, I had to <bold-element>solve</bold-element> the interaction that occurs
      when <bold-element>two players grab the same block</bold-element>. I <bold-element>abstracted</bold-element> the physics to support multiple hands
      interacting at once. When the elastic was <bold-element>tight</bold-element> because one player was pulling it in a direction or if  the
      other players would also be affected by the force and <bold-element>get pulled</bold-element>. For blocks that couldn’t move due to being <bold-element>obstructed by the environment</bold-element>,
      I added a counter-force to<bold-element> pull the hands back toward the block</bold-element>, maintaining consistent elastic behavior.
      I also created a <bold-element>FX line</bold-element> and its integration to
      provide clear visual <bold-element>feedback</bold-element> on the state of the <bold-element>elastic</bold-element>.
    </space-paragraph>
    <main-paragraph>
      I then implemented the <bold-element>conflict
      system</bold-element>, where <bold-element>shaking the joystick</bold-element> resolves tension between players on <bold-element>opposing teams</bold-element>. The elastic of the <bold-element>losing team</bold-element> is <bold-element>cut</bold-element>.  Additionally, I developed a <bold-element>teleportation</bold-element>
  system that allows <bold-element>players</bold-element> and <bold-element>blocks</bold-element> to <bold-element>move</bold-element> from <bold-element>one side of the screen to the other</bold-element>. Blocks picked only teleport
  when hands pass through the portal. To prevent issues, I added a <bold-element>safe zone</bold-element> to avoid block picked <bold-element>spawning
  directly on blocks</bold-element>, which could otherwise cause <bold-element>extreme forces</bold-element> due to collisions. Lastly, I
  implemented a block <bold-element>weight system</bold-element>: when a player picks up a <bold-element>heavy block</bold-element>, it <bold-element>slows down</bold-element> their hands.
  Players must <bold-element>cooperate</bold-element> and pick up blocks <bold-element>together</bold-element> to <bold-element>reduce the weight penalty</bold-element>.
    </main-paragraph>
  </div>
</template>

<style scoped lang="scss"></style>
