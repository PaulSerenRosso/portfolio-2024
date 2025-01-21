<script>

import PropPopup from "@/components/PropPopup.vue";
import MainVideo from "@/components/MainVideo.vue";
import MainImage from "@/components/MainImage.vue";
import PopupContainer from "@/components/PopupContainer.vue";
import Subtitle from "@/components/Subtitle.vue";
import MainParagraph from "@/components/MainParagraph.vue";

export default {
  name: "KeypointDetails",
  components: {MainParagraph, Subtitle, PopupContainer, MainImage, MainVideo, PropPopup},
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
      <subtitle>  <span class="number">{{index}}.</span> {{this.keypoint.keypointName}}</subtitle>

      <main-paragraph class="paragraph">{{this.keypoint.keypointDescription}}
    </main-paragraph>
    </popup-container>
    <div class="content">
      <main-video v-if="keypoint.contentIsVideo" :src="this.keypoint.keypointContentSrc"></main-video>
      <main-image v-else class="keypoint-image" :src="this.keypoint.keypointContentSrc"></main-image>
    </div>

  </div>

</template>

<style lang="scss">


</style>
<style scoped lang="scss">
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

.keypoint-image{
  border-radius: 10px;
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
  }
}

@include desktop-md() {
  .pop-up-root{

      width: 50%;

  }
  .content{
    width: 50%;
  }
}

@include largeDesktop-md() {
  .pop-up-root{

    width: 50%;

  }
  .content{
    width: 50%;
  }
}

</style>
