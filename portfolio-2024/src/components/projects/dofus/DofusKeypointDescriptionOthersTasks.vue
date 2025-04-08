<script>
import {defineComponent} from 'vue'
import SpaceParagraph from "@/components/SpaceParagraph.vue";
import MainParagraph from "@/components/MainParagraph.vue";
import BoldElement from "@/components/BoldElement.vue";

export default defineComponent({
  name: "DofusKeypointDescriptionOthersTasks",
  components: {BoldElement, MainParagraph, SpaceParagraph}
})
</script>

<template>
<div>
  <main-paragraph>
    During the final part of my internship, I helped my team with various tasks based on the feedbacks of the players, such as
    refactoring the <bold-element>chained action</bold-element> feature extensively with the help of QA, this feature allows to preselect different interactions (move to, harvest some resources, change map).
    And fixing issues in <bold-element>tutorials</bold-element>, <bold-element>dialogues</bold-element>, or <bold-element>music transitions</bold-element> during fights.
  </main-paragraph>
</div>

</template>

<style scoped lang="scss">

</style>
