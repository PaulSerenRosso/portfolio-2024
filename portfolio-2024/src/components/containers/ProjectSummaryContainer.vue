<script>
import PageTitle from '@/components/PageTitle.vue'
import MainQuote from '@/components/MainQuote.vue'
import MainVideo from '@/components/MainVideo.vue'
import TagsContainer from '@/components/TagsContainer.vue'
import MainParagraph from '@/components/MainParagraph.vue'
import RadialGradient from '@/components/RadialGradient.vue'
import PropPopup from "@/components/PropPopup.vue";
import {roleProp, teamProp, timelineProp} from "@/utils/generated/propsImagesImports.js";

export default {
  name: 'ProjectSummaryContainer',
  components: {PropPopup, RadialGradient, MainParagraph, TagsContainer, MainVideo, MainQuote, PageTitle },
  props: {
    projectName: String,
    firstGradientColor: String,
    secondGradientColor: String,
    oneLineText: String,
    pitchText: {},
    staffText: String,
    timelineText: String,
    trailerSrc: String,
    tagsText: Array,
    roleText: String,
  },
  data(){
    return{

      teamProp:teamProp,
      roleProp:roleProp,
      timelineProp:timelineProp,
    }
  },
  mounted() {},
}
</script>

<template>
  <div class="project-summary-container">
    <div class="project-summary-header" ref="header">
      <radial-gradient :is-lazy="false"
        :top="0"
        :left="0"
        :radius-x="40"
        :radius-y="40"
        :color="this.firstGradientColor"
      ></radial-gradient>
      <radial-gradient :is-lazy="false"
        :top="100"
        :left="0"
        :radius-x="40"
        :radius-y="40"
        :color="this.firstGradientColor"
      ></radial-gradient>

      <radial-gradient :is-lazy="false" :top="100" :left="100" :radius-x="60" :radius-y="60" :color="this.secondGradientColor">
      </radial-gradient>
      <tags-container class="tag-container" :tags="this.tagsText"></tags-container>
      <page-title  :text-content="this.projectName" > </page-title>
      <main-quote :delay="1000" :is-right-direction="true">
        {{ this.oneLineText }}
      </main-quote>
    </div>
    <div class="project-summary-content">
      <div class="project-summary-grid">
        <prop-popup :is-lazy="false" :src="timelineProp" >
          <template v-slot:title>When?</template>
          <template v-slot:paragraph
          >{{this.timelineText}}
          </template>
        </prop-popup>
        <prop-popup :is-lazy="false" :src="teamProp" >
          <template v-slot:title>What is the team ?</template>
          <template v-slot:paragraph
          >{{this.staffText}}
          </template>
        </prop-popup>
        <prop-popup :is-lazy="false" :src="roleProp" >
          <template v-slot:title>What is my role?</template>
          <template v-slot:paragraph
          >{{this.roleText}}
          </template>
        </prop-popup>
      </div>
      <component class="pitch" :is="this.pitchText"></component>

      <div class="trailer">
      <main-video class="trailer-video" :src="this.trailerSrc" :delay="500"></main-video>
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.trailer{
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 30px;
  padding-bottom: 30px;
}
.pitch{
  width: 100%;
  text-align: center
 ;

  padding-left:20px;
  padding-right: 20px;

}
.project-summary-grid{
    display: grid;
    padding-left: 10px;
    padding-right: 10px;
    width: 100%;
    position: relative;
    padding-bottom: 30px;

}
.project-summary-header {
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding-top: 10px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 10px;
}
.project-summary-content{
  background-color: $secondary-white-color;
}

.tag-container {
  justify-content: left !important;
}

@include mobile-md() {
  .project-summary-grid {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: auto;
    grid-auto-columns: auto;
    grid-row-gap: 0px;
  }
  .trailer-video {
    width: 90%;
  }
}

@include tablet-md() {
  .project-summary-grid {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: auto;
    grid-auto-columns: auto;

  }
  .trailer-video {
    width: 90%;
  }
}

@include desktop-md() {
  .project-summary-grid {
    grid-auto-rows: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-column-gap: 30px;
  }
  .trailer-video {
    width: 120vh;
    max-width: 90%;
  }
  .pitch{
    padding-left:20%;
    padding-right: 20%;
  }
}

@include largeDesktop-md() {
  .project-summary-grid {
    grid-auto-rows: auto;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
    grid-template-rows: auto;
  }
  .trailer-video {
    width: 120vh;
    max-width: 90%;
  }
  .pitch{
    padding-left:20%;
    padding-right: 20%;
  }
}
</style>
