<script>
import { defineComponent } from 'vue'
import MainParagraph from '@/components/MainParagraph.vue'
import SpaceParagraph from '@/components/SpaceParagraph.vue'
import LinkElement from '@/components/LinkElement.vue'
import PageTitle from '@/components/PageTitle.vue'
import BoldElement from '@/components/BoldElement.vue'

export default defineComponent({
  name: 'InrsPitch',
  components: { BoldElement, PageTitle, LinkElement, SpaceParagraph, MainParagraph },
})
</script>

<template>
  <div>
  <space-paragraph
  >It’s not Rocket Science is a <bold-element>party game</bold-element> where 2 teams of 2 players compete. Their goal is to
    make the <bold-element>highest rocket</bold-element>, then <bold-element>launch it</bold-element> in order to be the first to <bold-element>reach the finish line</bold-element>. There
    are various ways to <bold-element>cooperate</bold-element> or to <bold-element>sabotage</bold-element> the other team. It is a <bold-element>physic-based</bold-element> game, so there
    is a lot of <bold-element>chaos</bold-element>; stacking blocks for building the rocket or controlling the rocket in the
    space will be more difficult than expected.
  </space-paragraph>
  <main-paragraph>
    The project was designed to be <bold-element>released on Steam</bold-element>, starting from a <bold-element>simple concept</bold-element> and developed
    <bold-element>without dedicated game artists</bold-element>.
    <link-element link="https://store.steampowered.com/app/1580860/Its_Not_Rocket_Science/"
      >Here</link-element
    >
    is the
    <bold-element>Steam page</bold-element>
    .
  </main-paragraph>
  </div>
</template>

<style scoped lang="scss"></style>
