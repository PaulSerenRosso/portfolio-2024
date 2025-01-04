<script >
import {defineComponent} from 'vue'
import ScrollingTrigger from "@/components/ScrollingTrigger.vue";
export default defineComponent({
  name: "MainButton",
  components: {ScrollingTrigger},
  props:{
    delay:{Number, default:1000},
  },
  methods: {

    launchRevealAnimation() {
      this.$refs.button.classList.add("main-button-reveal-animation");
      this.$refs.button.addEventListener("animationend", this.addHoverClass);
    },
    addHoverClass(){
      this.$refs.button.classList.add("main-button-hover");
      this.$refs.button.classList.remove("main-button-reveal-animation");
    }
  }

})
</script>

<template>
   <div ref="button" class="main-button">
      <slot></slot>
     <scrolling-trigger :delay="this.delay" @trigger-on-scrolling=" this.launchRevealAnimation"></scrolling-trigger>
  </div>



</template>

<style scoped lang="scss">
.main-button{
  opacity: 0;
  background: rgb(238,174,202);
  background: linear-gradient($main-highlight-color 0%, $main-highlight-color 90%, $main-darken-highlight-color 100%);
  color: $main-white-color ;
  border-radius: 40px;
  padding-top: 1.1rem;
  padding-bottom: 1.1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  min-width: 10rem;
  text-align: center;
  transition: all .2s ease-in-out;
  font-family: MyBold;
  font-size: $button-large-desktop-font-size;


}
.main-button-reveal-animation{
    animation-name: reveal-animation;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;

  }
@keyframes reveal-animation {
  0%{
    opacity: 0;
    transform:scale(0);
  }
  50%{
    transform:scale(1.1);
  }
  70%{
    transform:scale(0.9);
  }
  100%{
    opacity: 1;
    transform:scale(1);
  }
}

.main-button-hover{
 transition: all .2s ease-in-out;
  opacity: 1;
}
.main-button-hover:hover { transform: scale(1.1); }

</style>
