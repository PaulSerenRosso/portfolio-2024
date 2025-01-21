<script>
import KeypointDetails from "@/components/KeypointDetails.vue";

export default {
  name: "ProjectKeypointsContainer",
  components: {KeypointDetails},
  props:{
    keypoints:null,
    firstGradientColor:String,
    secondGradientColor:String,
  }
}
</script>

<template>
<div class="keypoints-container">
<keypoint-details :index="index+1" :style="{flexDirection:index%2 ===0? 'row': 'row-reverse'}" class="keypoints-item" v-for="(keypoint,index) in this.keypoints" :keypoint="keypoint" :color-gradient="index%2 ===0? this.firstGradientColor: this.secondGradientColor" :key="index">

</keypoint-details>
</div>
</template>

<style scoped lang="scss">
.keypoints-container {
  display: flex;
  flex-direction: column;
  padding: 50px;
}
@include mobile-md() {
  .keypoints-container {
    padding-top: 50px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
  }
}

@include tablet-md() {
  .keypoints-container {

    padding-top: 50px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
  }
}

@include desktop-md() {
  .keypoints-container {

    padding-top: 50px;
    padding-bottom: 20px;
    padding-left: 50px;
    padding-right: 50px;
  }
}

@include largeDesktop-md() {
  .keypoints-container {


    padding-top: 50px;
    padding-bottom: 20px;
    padding-left: 50px;
    padding-right: 50px;
  }
}
</style>
