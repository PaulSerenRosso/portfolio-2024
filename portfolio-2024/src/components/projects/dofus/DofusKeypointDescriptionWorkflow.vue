<script>
import { defineComponent } from 'vue'
import SpaceParagraph from '@/components/SpaceParagraph.vue'
import MainParagraph from '@/components/MainParagraph.vue'
import BoldElement from '@/components/BoldElement.vue'

export default defineComponent({
  name: 'DofusKeypointDescriptionWorkflow',
  components: { BoldElement, MainParagraph, SpaceParagraph },
})
</script>

<template>
  <div>
  <space-paragraph>
    Due to the complexity of an MMORPG and the multitude of systems it integrates, Dofus’
    architecture is both
    <bold-element>abstract</bold-element>
    and
    <bold-element>highly compartmentalized</bold-element>, relying on various
    <bold-element>programming patterns</bold-element>
    . It was therefore essential for me to adhere to this structure to ensure the maintainability
    and stability of the project.
  </space-paragraph>
  <space-paragraph>
    My code needed to be
    <bold-element>clean and properly placed</bold-element>
    so that another programmer could easily understand and modify it. Due to the number of
    programmers working on the project, it was important to correctly use
    <bold-element>version control tools</bold-element>
    and
    <bold-element>follow the merging pipeline</bold-element>
    to avoid blocking other programmers.
    </space-paragraph>
    <space-paragraph>
      During the beta launch, I had to be extremely
    <bold-element>cautious</bold-element>
    with fixes and thoroughly
    <bold-element>test my code</bold-element>, as any modification could introduce bugs due to the complexity of the architecture,
    potentially impacting the player experience when they received the latest patches. To prevent
    this, my changes were reviewed by other developers, tested by the QA team. Once I had updated my
    modifications based on their
    <bold-element>feedbacks</bold-element>, I integrated my
    <bold-element>patches accessible to players</bold-element>
    as part of the open beta.
  </space-paragraph>
  <main-paragraph>
    This experience provided me with real immersion in
    <bold-element>live game management</bold-element>, working with an active community that reacted each week to new content and fixes!
  </main-paragraph>
  </div>
</template>

<style scoped lang="scss"></style>
