<script>
import {defineComponent} from 'vue'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MainImage from "@/components/MainImage.vue";
import ContentImage from "@/components/ContentImage.vue"; // if you use it
export default defineComponent({
  name: "MainSwiper",
  components: {ContentImage, MainImage},
  props:{
    imageSrcs:Array,
  }
})
</script>

<template>
  <swiper-container

    slides-per-view="1"
    navigation="true"
    pagination="true"
    loop="true"
    autoplay-delay="3500" autoplay-disable-on-interaction="true"
    grabCursor="true"
    space-between="30"
    class="mySwiper"
  >

    <swiper-slide v-for="(image,index) in this.imageSrcs" :key="index">
      <content-image  :has-animation="false"  :src="image"></content-image>
    </swiper-slide>
  </swiper-container>
</template>

<style  lang="scss">
.mySwiper{
  --swiper-theme-color:#ff6166;
}
</style>
