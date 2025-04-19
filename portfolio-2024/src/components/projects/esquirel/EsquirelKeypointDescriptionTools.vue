<script>
import { defineComponent } from 'vue'
import MainParagraph from '@/components/MainParagraph.vue'
import SpaceParagraph from '@/components/SpaceParagraph.vue'
import LinkElement from '@/components/LinkElement.vue'
import BoldElement from "@/components/BoldElement.vue";

export default defineComponent({
  name: 'EsquirelKeypointDescriptionTools',
  components: {BoldElement, LinkElement, SpaceParagraph, MainParagraph },
})
</script>

<template>
  <div>
    <space-paragraph>
      Together with another game designer, we implemented the
      <link-element link="https://unity.com/products/remote-config"
        >Remote Config system</link-element
      >
      . This allowed game designers to <bold-element>modify variables directly without the need for a new build
      with each change</bold-element>. Given the frequent balancing adjustments made by the designers, this
      approach saved a significant amount of time. I was responsible for <bold-element>linking the variables</bold-element>
      created remotely to the actual variables in the code.
    </space-paragraph>

    <main-paragraph>
      Additionally, one of the challenges in Esquirel was finding the <bold-element>right timing for abilities</bold-element>.
      Abilities have various <bold-element>key moments</bold-element>, such as anticipation, damage application, and
      recovery. At the start,  <bold-element>game designers</bold-element> frequently needed  to <bold-element>tweak these timings</bold-element>, but the  <bold-element>game artists</bold-element>.

      couldn't adjust the  <bold-element>FX and animation</bold-element> timings every time. To solve this, I created a  <bold-element>tool</bold-element> that
        <bold-element>dynamically adjusts the FX duration/size and animation time</bold-element>. This allowed  <bold-element>game artists</bold-element> to
      create  <bold-element>placeholders</bold-element>, while  <bold-element>game designers</bold-element> could  <bold-element>tweak the variables</bold-element> and  <bold-element>receive real-time
      visual feedback</bold-element>. Once the tweaks were complete, the artists could  <bold-element>finalize</bold-element> the animations and
      FX accordingly.
    </main-paragraph>
  </div>
</template>

<style scoped lang="scss"></style>
