<script>
import MainButton from '@/components/MainButton.vue'
import MainImage from '@/components/MainImage.vue'
import Subtitle from '@/components/Subtitle.vue'
import MainParagraph from '@/components/MainParagraph.vue'

import PopupContainer from '@/components/PopupContainer.vue'
import TagsContainer from '@/components/TagsContainer.vue'
import {
  rsmKeypointContentConcept1,
  rsmKeypointContentConcept2, rsmKeypointContentProducing1, rsmKeypointContentPrototype5
} from "@/utils/generated/projectKeypointImagesImports.js";


export default {
  name: 'ProjectOverview',

  components: {


    TagsContainer,
    PopupContainer,
    MainParagraph,
    Subtitle,
    MainImage,
    MainButton,
  },
  props: {
    subtitle: String,
    oneLine: String,
    PictureOverviewSrc: {},
    tags: Array,
    gradientColor: String,
    keypoints: Array,
    link: String,
  },
}
</script>

<template>
  <popup-container class="project-overview-root"
    class-container-name="project-overview-container"
    :gradient-color="this.gradientColor" :is-lazy="false">

    <router-link class="project-overview-image-container" :to="this.link">
      <main-image image-class="project-overview-image" class="overview-picture" :is-lazy="false" :src="this.PictureOverviewSrc"></main-image>
    </router-link>

    <tags-container class="project-overview-tag-container" :tags="this.tags"></tags-container>

    <subtitle>{{ this.subtitle }}</subtitle>
    <main-paragraph>{{ this.oneLine }}</main-paragraph>

    <div class="project-overview-footer">
      <router-link class="link" :to="this.link">
        <main-button :has-animation="false">Explore the Project!</main-button>

      </router-link>


    </div>


  </popup-container>
</template>
<style>
.project-overview-image{
 aspect-ratio: 16/9;
}
</style>

<style lang="scss">
.project-overview-image-container{
  overflow: hidden;
  border-radius: 50px;
  aspect-ratio: 16/9;
  width: 100%;
  position: relative;
  max-height: 100%;
}

.project-overview-root {
  padding-bottom: 0 !important;
  padding-top: 0 !important;

}

@include mobile-md() {
  .project-overview-root {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
}
.project-overview-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  text-align: center;
}
</style>
<style scoped lang="scss">
.project-overview-footer {
position: relative;
}
.project-overview-tag-container {
  padding-top: 10px;
}





.link {
  padding-top: 10px;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  text-decoration: none;
  flex-grow: 0; /* Don't allow the item to grow */
  flex-shrink: 0; /* Don't allow the item to shrink */
  margin-left: 10px;
  margin-right: 10px;
}




.overview-picture {
  transition: all 0.25s ease-in-out;
  -ms-transform: scale(1); /* IE 9 */
  -webkit-transform: scale(1); /* Safari 3-8 */
  transform: scale(1);
  position: relative;
  width: 100%;

}

.overview-picture:hover {
  cursor: pointer;

  -ms-transform: scale(1.2); /* IE 9 */
  -webkit-transform: scale(1.2); /* Safari 3-8 */
  transform: scale(1.2);
}
</style>
