<script>
import { defineComponent } from 'vue'
import SpaceParagraph from "@/components/SpaceParagraph.vue";
import MainParagraph from "@/components/MainParagraph.vue";
import LinkElement from "@/components/LinkElement.vue";
import BoldElement from "@/components/BoldElement.vue";

export default defineComponent({
  name: 'DofusKeypointDescriptionImproveUI',
  components: {BoldElement, LinkElement, MainParagraph, SpaceParagraph},
})
</script>

<template>
  <div>
  <space-paragraph>
    I worked closely with <bold-element>UI/UX designers</bold-element>, iterating with them and debugging interfaces which are highly
    modular using <link-element link="https://docs.unity3d.com/Manual/UIElements.html">UI Toolkit</link-element>.
    Some of the interfaces I worked on included <bold-element>crafting, recipes,
    guilds, emotes and quests</bold-element>.
  </space-paragraph>
    <space-paragraph>
      I also developed small features alongside artists, such as <bold-element>background
      animations</bold-element> in character selection. Additionally, I worked on  <bold-element>fullscreen/resolution options</bold-element>,
      which was particularly interesting as I had to ensure compatibility across all screen sizes and
      operating systems.
    </space-paragraph>
    <main-paragraph>
      Finally, I <bold-element>optimized the loading times</bold-element> of interfaces, especially those using
      portrait mode. I checked performance improvements in the <bold-element>profiler</bold-element> to ensure my optimizations were
      applied correctly. To identify all portrait-mode interfaces, I had to quickly understand how each
      interface worked and its related systems, optimize them, and test thoroughly to ensure nothing was
      broken.
    </main-paragraph>





  </div>
</template>

<style scoped lang="scss"></style>
