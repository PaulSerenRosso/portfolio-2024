<script>
import { defineComponent } from 'vue'
import { useCSSStore } from '@/store/CSSStore.js'
import {
  gradientBlue, gradientCyan,
  gradientDarkenBlue, gradientGreen, gradientLightGreen, gradientOrange, gradientPink,
  gradientRed, gradientViolet,
  gradientYellow
} from "@/utils/generated/projectGradientsImagesImports.js";



export default defineComponent({
  name: 'RadialGradient',
  data() {
    return {
      Colors: {
        red: gradientRed,
        yellow: gradientYellow,
        darkenBlue: gradientDarkenBlue,
        blue:gradientBlue,
        green: gradientGreen,
        lightGreen: gradientLightGreen,
        violet: gradientViolet,
        pink: gradientPink,
        cyan: gradientCyan,
        orange: gradientOrange,

      },


    }
  },
  props: {
    color: String,
    top: Number,
    left: Number,
    radiusX:Number,
    radiusY:Number,
  },
  setup() {
    const cssStore = useCSSStore()
    return { cssStore: cssStore }
  },

})
</script>

<template>

    <picture>

      <source :srcset="this.Colors[this.color].webp">
      <img loading="lazy" :style="{top:this.top+'%', left:this.left+'%', width:this.radiusX*2+'%', height:this.radiusY*2+'%'}" :src="Colors[this.color].png" ref="container" class="background-radial-gradient" >
    </picture>





</template>

<style scoped>
.background-radial-gradient {
  position: absolute;
  /* Ensure the height does not exceed 100% of its container */
  z-index: -1;
  transform: translate(-50%, -50%);
  pointer-events: none;


filter: blur(50px);

}
</style>
