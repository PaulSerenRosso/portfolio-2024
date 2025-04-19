<script>
import {defineComponent} from 'vue'
import SpaceParagraph from '@/components/SpaceParagraph.vue'
import MainParagraph from "@/components/MainParagraph.vue";
import BoldElement from "@/components/BoldElement.vue";

export default defineComponent({
  name: 'RsmKeypointDescriptionProducing',
  components: {BoldElement, MainParagraph, SpaceParagraph},
})
</script>

<template>
  <div>
    <space-paragraph>
      After forming our group, we quickly defined our roles. I took on the role of producer,
      <bold-element>coordinating</bold-element> the team and ensuring our
        <bold-element>decisions were executed on time</bold-element>. The
          <bold-element>vision owner</bold-element> guided <bold-element>creative choices</bold-element> and keep the project <bold-element>aligned</bold-element> with its <bold-element>original concept</bold-element>. To
            streamline collaboration, I set up and maintained
            our project space on <bold-element>Notion</bold-element>, organizing all <bold-element>documentation</bold-element> so it was clear, accessible, and
            well-structured.
    </space-paragraph>

    <space-paragraph>
      For long-term planning, we worked with <bold-element>milestones</bold-element>, while also adapting to the
      expectations of our <bold-element>external evaluators</bold-element>. Each <bold-element>month</bold-element>, I organized a <bold-element>presentation</bold-element> for
      them, summarizing the <bold-element>progress</bold-element> of the previous month from
          <bold-element>artists, programmers, and designers</bold-element>. These sessions allowed us to gather <bold-element>feedbacks</bold-element>, adjust
      our goals and <bold-element>priorities</bold-element> accordingly. I was responsible for <bold-element>organizing</bold-element> and <bold-element>leading key
      meetings</bold-element>, including: Sprint planning with goals for subteams, Daily stand-ups and Sprint reviews.
    </space-paragraph>

    <space-paragraph>
      For day-to-day operations, we used a <bold-element>Kanban</bold-element> board with a <bold-element>verification workflow</bold-element>. Each team
      member before moving a task to “done,” they
      had to show their work to teammates for validation. This system was helpful to have a <bold-element>double-check</bold-element> on tasks done,
      gather feedbacks. Everyone
        <bold-element>choose their reviewers</bold-element> who were not necessarily me or the vision owner.
      Tasks were estimated using <bold-element>story points</bold-element>. I managed priorities, <bold-element>coordinated dependencies between tasks</bold-element>,
      and ensured that everything was properly scheduled and interconnected.
    </space-paragraph>
    <main-paragraph>
      To guide <bold-element>prototype</bold-element> development, I was in charge to define our Minimum Viable Product (<bold-element>MVP</bold-element>). We
      began by creating a comprehensive <bold-element>feature list</bold-element>, which we then prioritized using the <bold-element>MoSCoW</bold-element>
      method (Must have, Should have, Could have, Won’t have). This helped us focus on the most
        <bold-element>impactful features</bold-element> and manage scope effectively.
    </main-paragraph>
  </div>
</template>

<style scoped lang="scss"></style>
