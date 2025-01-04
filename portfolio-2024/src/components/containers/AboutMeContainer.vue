<script>
import {defineComponent} from 'vue'
import PageTitle from "@/components/PageTitle.vue";
import {PropSlideInfo} from "@/composables/PropSlideInfo.js";
import PropRender from "@/components/PropRender.vue";
import Subtitle from "@/components/Subtitle.vue";
import MainParagraph from "@/components/MainParagraph.vue";
import PropPopup from "@/components/PropPopup.vue";
import RadialGradient from "@/components/RadialGradient.vue";

export default defineComponent({
  name: "AboutMeContainer",
  components: {RadialGradient, PropPopup, MainParagraph, Subtitle, PropRender, PageTitle},
  data(){
    return{
      AboutMeSlidesInfo: [new PropSlideInfo(), new PropSlideInfo(), new PropSlideInfo()]

    }
  }
})
</script>

<template>

<div class="about-me-container">





<page-title class="about-me-title" text-content="What about me ?" ></page-title>
<div class="about-me-grid">
  <prop-popup src="/test.png" gradient-color="red">
    <template v-slot:title>Rebounds of failure </template>
    <template v-slot:paragraph> I like to put me in me in challenging and unknow or less go out of my daily routine, it’s make me fail fast so it’s me learning a lot. I’am trying to think about my task like an iterations spirit.
    </template>
  </prop-popup>
  <prop-popup src="/test.png"   gradient-color="yellow" >
    <template v-slot:title> Program with curiosity </template>
    <template v-slot:paragraph>  I love learning new things event matter the specialicity of programming the engine the language that are. I am trying to think about the experience wanted and learning in function that the project need.


    </template>
  </prop-popup>
  <prop-popup src="/test.png"  gradient-color="cyan" >
    <template v-slot:title>feeding off other displines persons</template>
    <template v-slot:paragraph>Expériences I made 2 years of game design, and I got some Producer, or lead of some students projects. I think that eating from the others disciplines help me to understanding more how work the team and the experience targeted and make me more effective.
    </template>
  </prop-popup>
  <prop-popup src="/test.png"  gradient-color="blue">
    <template v-slot:title>  Sockets for style look one line describing</template>
    <template v-slot:paragraph>Expériences I made 2 years of game design, and I got some Producer, or lead of some students projects. I think that eating from the others disciplines help me to understanding more how work the team and the experience targeted and make me more effective.
    </template>
  </prop-popup>
  <prop-popup src="/test.png"  gradient-color="pink" >
    <template v-slot:title>Sport for relaxing Cooking and eating good things</template>
    <template v-slot:paragraph>Expériences I made 2 years of game design, and I got some Producer, or lead of some students projects. I think that eating from the others disciplines help me to understanding more how work the team and the experience targeted and make me more effective.
    </template>
  </prop-popup>
  <prop-popup src="/test.png"  gradient-color="violet">
    <template v-slot:title>     And of course video game and boardgame</template>
    <template v-slot:paragraph> Play as the intrepid Mr Spy, an undercover agent with a knack for getting into tricky situations. Use your skills in this ultimate game of espionage!
    </template>
  </prop-popup>
</div>

</div>
</template>

<style scoped lang="scss">
.about-me-grid{
  display: grid;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;

position: relative;



}

#firstGradient{

}

#secondGradient{

}



.about-me-container{
position: relative;
  width: 100%;
  z-index: 1;


}
.rocket-video{
  width: 20%;
  position: absolute;
  top: 400%;
  left: 15%;



}

.rocket-video-2{
  width: 50%;
  position: absolute;
  top: 200%;
  z-index: -2;
  left: 25%;
  background-color: red;




}
.about-me-title{
width: 100%;
  text-align: left;
  padding-left: 20px;
}

@include mobile-md(){
  .about-me-grid{

    grid-template-rows: repeat(3, 1fr);
    grid-auto-columns: auto;
    grid-row-gap: 30px;

  }
}

@include tablet-md(){
  .about-me-grid{
    grid-template-rows: repeat(2, 2fr);
    grid-template-columns: repeat(2, 2fr);
    grid-row-gap: 30px;
    grid-column-gap: 30px;

  }
}

@include desktop-md(){
  .about-me-grid{
    grid-auto-rows: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
  }
}

@include largeDesktop-md(){
  .about-me-grid{
    grid-auto-rows: auto;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
  }
}
</style>
