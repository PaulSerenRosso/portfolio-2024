<script>
import { defineComponent } from 'vue'
import SpaceParagraph from '@/components/SpaceParagraph.vue'
import MainParagraph from '@/components/MainParagraph.vue'
import LinkElement from "@/components/LinkElement.vue";
import BoldElement from "@/components/BoldElement.vue";

export default defineComponent({
  name: 'EsquirelPitch',
  components: {BoldElement, LinkElement, MainParagraph, SpaceParagraph },
})
</script>

<template>
  <div>
    <space-paragraph>
      Esquirel is a <bold-element>2v2 MOBA</bold-element> where players control <bold-element>squirrels</bold-element> battling to <bold-element>collect nuts</bold-element> around <bold-element>control
      points</bold-element>. <bold-element>Vision</bold-element> plays a crucial role in securing victory. The fog of war, bushes, wards, and
      even the squirrels' abilities encourage <bold-element>ambush</bold-element> strategies and demand constant awareness of
      enemy positions. The <bold-element>hand-painted</bold-element> universe draws inspiration from Robin Hood. For networking,
      we used <link-element link="https://www.photonengine.com/pun">Photon PUN</link-element>.
    </space-paragraph>

    <space-paragraph>
      The project was divided into two main parts: On one side, I was part of an <bold-element>R&D department</bold-element>
      composed of 10 programmers. Our mission was to <bold-element>document</bold-element> the <bold-element>technical challenges</bold-element> related to
      networking and MOBA development. In parallel, a subgroup of 3–4 programmers, including myself,
        was tasked with creating a <bold-element>UML architecture diagram</bold-element>. I contributed to the architecture and
      helped <bold-element>organize</bold-element> the department. Then we built a <bold-element>foundational codebase</bold-element> based on the
      architecture to address the core challenges of networking and gameplay mechanics. Along with
      some teammates, I also <bold-element>presented</bold-element> our work to the class.
    </space-paragraph>

    <main-paragraph>
      On the other side, the programming class was divided into pairs. Each pair collaborated with
      assigned game designers and artists. <bold-element>Starting from the prototype</bold-element>, each group developed a
      unique <bold-element>game experience</bold-element>, in my case Esquirel within a two-month timeframe.
    </main-paragraph>
  </div>
</template>

<style scoped lang="scss"></style>
