<script>
import { defineComponent } from 'vue'
import SpaceParagraph from '@/components/SpaceParagraph.vue'
import MainParagraph from '@/components/MainParagraph.vue'
import BoldElement from "@/components/BoldElement.vue";

export default defineComponent({
  name: 'EsquirelKeypointDescriptionArchitecture',
  components: {BoldElement, MainParagraph, SpaceParagraph },
})
</script>

<template>
  <div>
    <space-paragraph>
      The architecture was based on a <bold-element>master-client model</bold-element>. Specifically, the multiplayer system
      relied on a <bold-element>listen server</bold-element> approach. We specified whether a class was <bold-element>local</bold-element> (e.g., the
      camera, which is only used by the local player), <bold-element>master-only</bold-element> (e.g., managers responsible
      for approving client requests), <bold-element>shared by all clients</bold-element> (e.g., entities, to allow
      communication from the master to all clients), or <bold-element>client-specific but needing server
      validation</bold-element> (e.g., fog systems, since each client has its own fog but still needs master
      approval for certain interactions).
    </space-paragraph>
    <space-paragraph>
      The architecture was designed using various <bold-element>design patterns</bold-element>. <bold-element>Scriptable objects</bold-element> and others
      classes were organized using <bold-element>abstract</bold-element> and <bold-element>concrete</bold-element> classes. This helped structure entities,
      capacities, and items effectively. We implemented a <bold-element>state machine</bold-element> to manage <bold-element>game states</bold-element>
      (e.g., lobby, in-game, end-game), and used two <bold-element>object pools</bold-element> one for local elements and
      another for networked ones. Entities were structured using <bold-element>interfaces</bold-element> to describe
      their behavior (e.g., `IDamageable`, `IMovable`, `ITargetable`).
    </space-paragraph>
    <space-paragraph>
      Finally, we <bold-element>explained</bold-element> the architecture to other programmers, <bold-element>supported</bold-element> them during integration
      while developing the codebase, <bold-element>addressed</bold-element> unforeseen issues, and continuously <bold-element>updated </bold-element>the
      architecture throughout the development process.
    </space-paragraph>

    <main-paragraph></main-paragraph>
  </div>
</template>

<style scoped lang="scss"></style>
