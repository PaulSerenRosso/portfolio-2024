<script>
import {defineComponent} from 'vue'
import SlideInAnimation from "@/components/SlideInAnimation.vue";

export default defineComponent({
  name: "MainQuote",
  components: {SlideInAnimation},
  props:{
    isRightDirection:Boolean,

    delay:Number,

  },
})
</script>

<template>
  <div  class="quote-container">
    <slide-in-animation :delay="this.delay" :is-right-direction="this.isRightDirection">
      <slot></slot>
    </slide-in-animation>
  </div>
</template>

<style scoped lang="scss">


.quote-container {
  color: $main-black-color;
  font-family: MyLight;
}

@include mobile-md(){
  .quote-container{
    font-size: $quote-mobile-font-size;
  }
}

@include tablet-md(){
  .quote-container{
    font-size: $quote-tablet-font-size;
  }
}

@include desktop-md(){
  .quote-container{
    font-size: $quote-desktop-font-size;
  }
}

@include largeDesktop-md(){
  .quote-container{
    font-size: $quote-large-desktop-font-size;
  }
}

</style>
