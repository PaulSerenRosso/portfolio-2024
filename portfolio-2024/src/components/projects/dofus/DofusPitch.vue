<script>
import { defineComponent } from 'vue'
import SpaceParagraph from "@/components/SpaceParagraph.vue";
import MainParagraph from "@/components/MainParagraph.vue";
import LinkElement from "@/components/LinkElement.vue";
import BoldElement from "@/components/BoldElement.vue";

export default defineComponent({
  name: 'DofusPitch',
  components: {BoldElement, LinkElement, MainParagraph, SpaceParagraph},
})
</script>

<template>
  <div>
  <space-paragraph>
   <link-element link="https://www.ankama.com/en">Ankama</link-element>  is an independent company <bold-element>(~200 people)</bold-element> specializing in digital creation in the
    entertainment industry. It is renowned for its ability to create rich universes connected across
    <bold-element>multiple media</bold-element>, including video games, animation, board games, and comics.
  </space-paragraph>

  <space-paragraph>
    <link-element link="https://www.dofus.com/en/mmorpg/discover">Dofus</link-element> is an MMORPG
    release in 2004. Set in the “World of Twelve”, Dofus offers players the chance to create and
    customize their character from 18 classes,  <bold-element>explore</bold-element> a vast world filled with quests and dungeons,
    and engage in <bold-element>turn-based combat</bold-element> against monsters or other players in PvP. They can also learn
    professions, <bold-element>craft</bold-element> and <bold-element>sell</bold-element> items, own a house or a haven bag, and <bold-element>join a guild</bold-element> to participate in
    alliance wars.
  </space-paragraph>

  <main-paragraph>
    In  <bold-element>August 2024</bold-element>, Ankama reached a significant milestone with the launch of the open
    <bold-element>beta of Dofus 3.0</bold-element>, a modernized version of the original game. This major update is based on the
    transition <bold-element>from the Flash engine to Unity</bold-element>, a decision driven by several factors. Firstly, the
    gradual phase-out of Flash by web browsers made it necessary to adopt a more <bold-element>sustainable
    technology</bold-element>. Secondly, Unity offers greater flexibility, <bold-element>making it easier to integrate new
    features</bold-element>, enhance <bold-element>graphics</bold-element>, and <bold-element>optimize</bold-element> the game's performance.
  </main-paragraph>
  </div>
</template>

<style scoped lang="scss"></style>
