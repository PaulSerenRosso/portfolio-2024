<script>
import { defineComponent } from 'vue'
import MainParagraph from '@/components/MainParagraph.vue'
import LinkElement from '@/components/LinkElement.vue'
import BoldElement from "@/components/BoldElement.vue";

export default defineComponent({
  name: 'JabKeypointDescriptionTools',
  components: {BoldElement, LinkElement, MainParagraph },
})
</script>

<template>
  <div>
    <main-paragraph>
      We needed to <bold-element>streamline</bold-element> the workflow for <bold-element>playtesting</bold-element> and <bold-element>QA</bold-element>, so I created an <bold-element>in-game report
      window</bold-element>. This feature opens <bold-element>a form</bold-element> where players can submit <bold-element>feedback</bold-element> or report <bold-element>bugs</bold-element>. They can
      enter a title, player name, description, and tags, and also attach a<bold-element> screenshot</bold-element> (which can be
        taken beforehand). Finally, the report is sent directly to a <bold-element>Trello board</bold-element> in the right column with the information input using
      <link-element
        link="https://docs.unity3d.com/6000.0/Documentation/ScriptReference/Networking.UnityWebRequest.html"
        >UnityWebRequest
      </link-element>
      with the appropriate links using the
      <link-element
        link="https://developer.atlassian.com/cloud/trello/rest/api-group-actions/#api-group-actions"
        >Trello API
      </link-element>
      .
    </main-paragraph>
  </div>
</template>

<style scoped lang="scss"></style>
