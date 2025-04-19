<script>

import PropPopup from "@/components/PropPopup.vue";
import MainVideo from "@/components/MainVideo.vue";
import MainImage from "@/components/MainImage.vue";
import PopupContainer from "@/components/PopupContainer.vue";
import Subtitle from "@/components/Subtitle.vue";
import MainParagraph from "@/components/MainParagraph.vue";
import TagsContainer from "@/components/TagsContainer.vue";
import {keypointContentType} from "@/composables/Enums.js";
import MainSwiper from "@/components/MainSwiper.vue";
import ContentImage from "@/components/ContentImage.vue";

export default {
  name: "KeypointDetails",
  computed: {
    keypointContentType() {
      return keypointContentType
    }
  },
  components: {
    ContentImage,
    MainSwiper, TagsContainer, MainParagraph, Subtitle, PopupContainer, MainImage, MainVideo, PropPopup},
  props:{
    keypoint:null,
    colorGradient:String,
    index:Number,

  }
}
</script>

<template>
  <div class="keypoint-details-container">
    <popup-container class="pop-up-root" class-container-name="keypoint-popup-container" :gradient-color="this.colorGradient">
      <tags-container class="tags" :tags="this.keypoint.keypointTags"></tags-container>
      <subtitle>  <span class="number">{{index}}.</span> {{this.keypoint.keypointName}}</subtitle>

      <component class="paragraph" :is=this.keypoint.keypointDescriptionComponent >
      </component>

    </popup-container>
    <div class="content">
      <main-video v-if="keypoint.keypointContentType === keypointContentType.video" :src="this.keypoint.keypointContentSrc"></main-video>

      <content-image v-else-if="keypoint.keypointContentType === keypointContentType.image"  :src="this.keypoint.keypointContentSrc"></content-image>
      <content-image class="image-spaced" v-else-if="keypoint.keypointContentType === keypointContentType.images" v-for="(image,index) in this.keypoint.keypointContentSrc" :key="index" :src="image"></content-image>
 <main-swiper :image-srcs="this.keypoint.keypointContentSrc" v-else></main-swiper>
    </div>

  </div>

</template>

<style lang="scss">


</style>
<style scoped lang="scss">
.image-spaced{
  margin-bottom: 20px;
}

.tags{
  justify-content: left !important;
}
.number{
  color: $main-highlight-color;
}

.paragraph{
  margin-top: 10px;
  margin-left: 5px;
  padding-left: 10px;
  border-left: $main-highlight-color;
  border-left-style: solid;
  border-left-width: 5px;
}
.pop-up-root{

}
.keypoint-details-container{
display: flex;

  flex-direction: row;
flex-wrap: wrap;
 justify-content: space-around;

}



@include mobile-md() {



  .keypoint-details-container{

    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .pop-up-root{
    width: 100%;
  }
  .content{
    width: 100%;
  }
  .paragraph{
    border-left-width: 0px;
    margin-left: 0px;
    padding-left: 0px;
  }
}

@include tablet-md() {
  .pop-up-root{
    width: 100%;
  }
  .keypoint-details-container{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 50px;
  }
  .content{
    width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
}

@include desktop-md() {
  .pop-up-root{

      width: 100%;

  }
  .content{
    width: 120vh;
    max-width: 90%;
  }
}

@include largeDesktop-md() {
  .pop-up-root{

    width:60%;

  }
  .content{
    width: 120vh;
    max-width: 90%;
  }
}

</style>
