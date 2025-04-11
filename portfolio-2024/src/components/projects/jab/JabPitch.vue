<script>
import { defineComponent } from 'vue'
import BoldElement from "@/components/BoldElement.vue";
import MainParagraph from "@/components/MainParagraph.vue";

export default defineComponent({
  name: 'JabPitch',
  components: {MainParagraph, BoldElement},
})
</script>

<template>
  <div>
    <main-paragraph>
      Jab is a <bold-element>mobile fighting sport game</bold-element> with a crazy atmosphere. The player takes on one boss after
    another, aiming to <bold-element>win the entire tournament</bold-element>. To win a fight, the player must <bold-element>earn the crowd’s
    favor</bold-element> by taunting and hitting the boss, which fills a <bold-element>Hype gauge</bold-element> inspired by a  <bold-element>tug-of-war
    mechanic</bold-element>. The player can move around the boss on a  <bold-element>radial grid</bold-element>, creating dynamic positioning.
    Each boss features a <bold-element>unique ability</bold-element> or behavior, as well as a <bold-element>vulnerable moment</bold-element> that the player
    must discover and exploit to stun the boss and gain a <bold-element>critical advantage</bold-element>.
    </main-paragraph>
  </div>
</template>

<style scoped lang="scss"></style>
