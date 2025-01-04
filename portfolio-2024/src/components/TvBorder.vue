<script>
import {defineComponent} from 'vue'
import ScrollingTrigger from "@/components/ScrollingTrigger.vue";

export default defineComponent({
  name: "TvBorder",
  components: {ScrollingTrigger},
  mounted() {
      let slots = this.$refs.slotContainer.children;

      for (let i = 0; i < slots.length; i++) {
        slots[i].classList.add("tv-frame-slot");
      }

      for (let i = 0; i < slots.length; i++) {
        slots[i].classList.add("tv-frame-slot");
      }


  },

  props: {

    delay: Number,
  },
  methods: {
    launchRevealAnimation() {
      this.$refs.root.classList.add("tv-frame-root-reveal");
    },
  },
})
</script>

<template>
  <div class="tv-frame-root"  ref="root" >

    <div class="tv-frame-header">
      <div class="tv-frame-header-button"></div>
      <div class="tv-frame-header-button"></div>
      <div class="tv-frame-header-button"></div>
    </div>
    <div class="tv-frame-content" ref="slotContainer">
      <slot></slot>
    </div>
    <scrolling-trigger :delay="this.delay" @trigger-on-scrolling="launchRevealAnimation"></scrolling-trigger>
  </div>
</template>
<style>
.tv-frame-slot{
  object-fit: contain;
  width: 100%;


}
.tv-frame-root-reveal{
  display: block;
  animation-name: tv-frame-slot-reveal-animation;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
}

@keyframes tv-frame-slot-reveal-animation {
  0%{
    opacity: 0;


  }
  50%{

  }
  70%{
    opacity: 0.5;
  }
  100%{

    opacity: 1;

  }
}
</style>

<style scoped lang="scss">
.tv-frame-root{
  opacity: 0;

display: block;
  border-radius: 10px;
  background:  $main-highlight-color;

  padding-bottom: 0.6em;

}

.tv-frame-header{
  width: calc(100% - 0.6em);
  height: 20px;
  display: flex;
  padding-top: 0.5em;
  padding-bottom: 0.3em;
  padding-left: 0.5em;
  flex-direction: row;
  align-items: center;
}


.tv-frame-header-button{
  background-color: white;
  height: 0.6em;
  width: 0.6em;


  margin-right: 0.3em;
  margin-left: 0.3em;
  border-radius: 50%;
}

.tv-frame-content{

  width: calc(100% - 1.2em);
  height: calc(100% - 30px);
  display: flex;
  background-color: #12173D;

  align-items: center;
  justify-content: center;
  margin-left: 0.6em;


}




</style>
