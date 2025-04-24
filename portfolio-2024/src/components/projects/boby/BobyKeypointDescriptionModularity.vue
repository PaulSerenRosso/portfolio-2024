<script>
import { defineComponent } from 'vue'
import SpaceParagraph from '@/components/SpaceParagraph.vue'
import MainParagraph from '@/components/MainParagraph.vue'
import LinkElement from "@/components/LinkElement.vue";
import BoldElement from "@/components/BoldElement.vue";

export default defineComponent({
  name: 'BobyKeypointDescriptionModularity',
  components: {BoldElement, LinkElement, MainParagraph, SpaceParagraph },
})
</script>

<template>
  <div>
    <space-paragraph>
      During my internship, I needed to ensure that the game was <bold-element>easily adjustable</bold-element> for <bold-element>future
      developers</bold-element>. Designed as a quick, <bold-element>casual</bold-element> distraction, it offers three <bold-element>difficulty modes</bold-element>. Similar to the <link-element link="https://en.wikipedia.org/wiki/Dinosaur_Game">dinosaur game</link-element>,
      it heavily relies on <bold-element>randomness</bold-element> and on the <bold-element>progression of the difficulty</bold-element>. This randomness influences
      enemy positions, types, and attributes such as size, health, and spawn count. The game is
      built with <bold-element>pure JavaScript</bold-element>, CSS, and HTML, ensuring seamless integration without external
      libraries.
    </space-paragraph>
    <main-paragraph>
      To maintain flexibility, I structured the code efficiently by using <bold-element>abstract classes</bold-element> for tools
      and enemies, with <bold-element>concrete</bold-element> subclasses defining unique behaviors. I <bold-element>separated data and behavior</bold-element>
      through distinct files and classes. A <bold-element>Level superclass </bold-element>managing data configurations such as wave structures and enemy spawn
      probabilities. The wave system is handled through an <bold-element>event-based system</bold-element>. Additionally, I
      implemented a <bold-element>utility class</bold-element> for device detection, vector operations, animations, and collision
      handling. Lastly, I structured the CSS using <bold-element>modular stylesheets</bold-element> imported into a main file for better maintainability.
    </main-paragraph>
  </div>
</template>

<style scoped lang="scss"></style>
