<script>
import { defineComponent } from 'vue'
import SpaceParagraph from '@/components/SpaceParagraph.vue'
import MainParagraph from '@/components/MainParagraph.vue'
import BoldElement from "@/components/BoldElement.vue";

export default defineComponent({
  name: 'RsmKeypointDescriptionPrototype',
  components: {BoldElement, MainParagraph, SpaceParagraph },
})
</script>

<template>
  <div>
    <space-paragraph>
      We created <bold-element>UML</bold-element> diagrams to outline the system and defined <bold-element>RPC types</bold-element> with <bold-element>clear nomenclature</bold-element>.
      <bold-element>Core systems</bold-element> were developed in <bold-element>C++</bold-element>, while <bold-element>Blueprints</bold-element> were used for <bold-element>feedback</bold-element> elements like
      animations, effects, sounds, UI, and AI behavior trees. We exposed variables, functions, and
      events to Blueprints, using interfaces for interactions, allowing <bold-element>game designers</bold-element> and <bold-element>artists</bold-element>
      to create <bold-element>interactable objects</bold-element> in <bold-element>Blueprints</bold-element> linked to the <bold-element>C++ codebase</bold-element>.
    </space-paragraph>

    <space-paragraph>
      To separate logics, I refactored <bold-element>character-related systems</bold-element> (such as stamina, inventory, and
      proximity chat) into <bold-element>actor components</bold-element>. Each <bold-element>player action</bold-element> was also an <bold-element>actor component</bold-element> and
      inherited from an <bold-element>abstract</bold-element> class <bold-element>make easier</bold-element> the <bold-element>creation</bold-element> of action and their <bold-element>replication</bold-element>. It
      handle for <bold-element>executing</bold-element> and <bold-element>stopping</bold-element> actions, passed by three methods: the client asks if an
      action can be used, the server accepts or denies it, and then the action is replicated to all
      clients using multicast. In the abstract class, a <bold-element>binary mask</bold-element> tracked which actions are being
      used. To support this template by handling <bold-element>generic arguments</bold-element> while <bold-element>optimizing bandwidth</bold-element>,
      I converted <bold-element>arguments</bold-element> into <bold-element>bits</bold-element> when sending across network <bold-element>recombined</bold-element> them into <bold-element>variables</bold-element>
      when received messages.
    </space-paragraph>
    <main-paragraph>
      I also integrated <bold-element>UI interfaces</bold-element> (inventory, sprint, push) using <bold-element>subwidgets</bold-element> for better
      modularity. I refactored the Vivox system to connect players to the <bold-element>Vivox server</bold-element> when they
      enter the party, using a <bold-element>game instance subsystem</bold-element>. At the end of the production, I worked on the <bold-element>end-game conditions</bold-element> and the <bold-element>transitions</bold-element> to the <bold-element>end-game screen</bold-element>, including <bold-element>dynamic cinematics</bold-element> that adapt to the <bold-element>number of players</bold-element> and the <bold-element>outcome of the game</bold-element>. I also implemented <bold-element>player titles</bold-element> based on <bold-element>individual actions</bold-element> during the game.
      I used the <bold-element>localization dashboard</bold-element> to support both French and English versions of the game. Additionally, I developed the <bold-element>AI spawning</bold-element> and <bold-element>despawning</bold-element> behavior, created a <bold-element>death/spectator mode</bold-element>, and fixed <bold-element>numerous multiplayer bugs</bold-element>.


    </main-paragraph>
  </div>
</template>

<style scoped lang="scss"></style>
