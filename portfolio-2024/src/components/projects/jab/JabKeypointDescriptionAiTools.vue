<script>
import { defineComponent } from 'vue'
import SpaceParagraph from '@/components/SpaceParagraph.vue'
import MainParagraph from '@/components/MainParagraph.vue'
import BoldElement from "@/components/BoldElement.vue";

export default defineComponent({
  name: 'JabKeypointDescriptionAiTools',
  components: {BoldElement, MainParagraph, SpaceParagraph },
})
</script>

<template>
  <div>
    <space-paragraph>
      Due to the complexity of the <bold-element>boss logic</bold-element>, we chose to use a <bold-element>behavior tree</bold-element>, which offered great <bold-element>flexibility</bold-element> and <bold-element>reusability</bold-element> for
      the features we developed. Given the system’s scale, we began with <bold-element>pair programming</bold-element> to build a
      solid foundation and ensure <bold-element>shared understanding</bold-element>.
    </space-paragraph>

    <space-paragraph>
      Each node in the behavior tree was a <bold-element>ScriptableObject</bold-element> containing its <bold-element>data</bold-element> and a list of its  <bold-element>children</bold-element>. These
      were linked through an <bold-element>class instanced</bold-element> responsible for <bold-element>executing behaviors</bold-element>. At runtime a separate script
      read the <bold-element>hierarchy</bold-element> from a <bold-element>scriptable object</bold-element> root node and <bold-element>instantiated the full tree</bold-element>.
    </space-paragraph>

    <space-paragraph>
      However, <bold-element>editing</bold-element> the tree in Unity’s Inspector was <bold-element>difficult</bold-element>, as nodes appeared as a <bold-element>flat list</bold-element>
      showing only <bold-element>direct children</bold-element>. To improve usability, we built <bold-element>a custom window</bold-element> that
      <bold-element>visualized the entire tree</bold-element> from <bold-element>a root node</bold-element>, making it easy to <bold-element>view structure</bold-element>, <bold-element>node types</bold-element>, and
          <bold-element>add</bold-element> or <bold-element>modify</bold-element> nodes.
    </space-paragraph>
    <main-paragraph>
      Another challenge was <bold-element>duplicating a part of ScriptableObject trees</bold-element>. Since each node was a <bold-element>separate
      asset</bold-element>, recreating similar trees was tedious. To solve this, I developed a <bold-element>copy-paste tool</bold-element> that
        <bold-element> duplicates</bold-element> an <bold-element>entire node structure</bold-element> from a root, with options to change<bold-element> prefixes</bold-element> and define a
          <bold-element>save path</bold-element>, greatly <bold-element>speeding up workflow</bold-element>.
    </main-paragraph>
  </div>
</template>

<style scoped lang="scss"></style>
