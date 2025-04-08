<script>
import { defineComponent } from 'vue'
import SpaceParagraph from "@/components/SpaceParagraph.vue";
import MainParagraph from "@/components/MainParagraph.vue";
import BoldElement from "@/components/BoldElement.vue";

export default defineComponent({
  name: 'BobyKeypointDescriptionWorkflow',
  components: {BoldElement, MainParagraph, SpaceParagraph},
})
</script>

<template>
  <div>
    <space-paragraph>
      The team organization was heavily inspired by Agile and Scrum methodologies, incorporating <bold-element>daily
      stand-ups</bold-element>,  <bold-element>Scrum Master</bold-element>, <bold-element>sprints</bold-element>, <bold-element>sprint reviews</bold-element>, and <bold-element>retrospectives</bold-element>. Although much of my work is
        <bold-element>independent</bold-element>, I still prepared <bold-element>presentations</bold-element> during team and leaders of the work completed during each sprint to gather
      feedback and plan the next steps.
    </space-paragraph>
    <space-paragraph>
      <bold-element>Code reviews</bold-element> were essential to ensure that my code was clean and
      followed proper naming conventions. I also collaborated with <bold-element>UI/UX designers</bold-element> for guidance on the
          <bold-element>artistic direction</bold-element> and with the <bold-element>Product Owners</bold-element> to align with the <bold-element>software's vision</bold-element>.
    </space-paragraph>
    <main-paragraph>
      Thanks to these
      Agile principles, I remained fully integrated into the sprint cycle during the development of my
      game. I started by building an<bold-element> MVP</bold-element> (Minimum Viable Product) and then focused on <bold-element>refactoring</bold-element> it
      with a stable architecture. This process followed a continuous <bold-element>cycle of adding features</bold-element>,
        <bold-element>cleaning up</bold-element> the code, <bold-element>testing</bold-element>, and incorporating <bold-element>feedback</bold-element> until final integration into the
      software.
    </main-paragraph>

  </div>
</template>

<style scoped lang="scss"></style>
