<script>
import { defineComponent } from 'vue'
import ResumeContainer from '@/components/containers/ResumeContainer.vue'
import ScrollReset from '@/components/ScrollReset.vue'
import PropPopup from "@/components/PropPopup.vue";
import MainButton from "@/components/MainButton.vue";
import LinkButton from "@/components/LinkButton.vue";
import PageTitle from "@/components/PageTitle.vue";
import {gmailProp, linkedinProp, twitterProp} from "@/utils/generated/propsImagesImports.js";

export default defineComponent({
  name: 'ContactView',
  components: {PageTitle, LinkButton, MainButton, PropPopup, ScrollReset, ResumeContainer },
  data(){
    return{
      clipBoardAnimationTimer:undefined,
      twitterProp:twitterProp,
      gmailProp:gmailProp,
      linkedinProp:linkedinProp,
    }
  },
  methods: {
    copyPasteMail() {
      const content = 'serenrossopaul' + '@' + 'gmail' + '.com';
      navigator.clipboard.writeText(content);
      if (this.clipBoardAnimationTimer === undefined) {
        this.launchClipBoardAnimationPopup()
      } else {
        clearTimeout(this.clipBoardAnimationTimer);
        this.clipBoardAnimationTimer = undefined;
        this.$refs.mailPopUp.classList.remove("mail-copy-pop-up-animation");
        void this.$refs.mailPopUp.offsetWidth;
        this.launchClipBoardAnimationPopup();
      }

    },
    launchClipBoardAnimationPopup() {
      this.$refs.mailPopUp.classList.add("mail-copy-pop-up-animation")
      this.clipBoardAnimationTimer = setTimeout(() => {
        this.$refs.mailPopUp.classList.remove("mail-copy-pop-up-animation");
        this.clipBoardAnimationTimer = undefined;
      }, 2500);
    }
  }
})
</script>

<template>
  <page-title class="contact-title" text-content="Pick how to reach me!"></page-title>
  <div class="contacts-grid">
    <prop-popup :is-lazy="false" :src="linkedinProp" gradient-color="darkenBlue">
      <template v-slot:title>My Linkedin</template>
      <template v-slot:paragraph>
      <link-button link="https://www.linkedin.com/in/paul-seren-rosso/">Get it!</link-button>
      </template>
    </prop-popup>
    <prop-popup :is-lazy="false" :src="gmailProp" gradient-color="red">
      <template v-slot:title> My Mail</template>
      <template v-slot:paragraph>
        <div>
          <main-button class="mail-button" @click="this.copyPasteMail">
            Get it!

          </main-button>
          <div ref="mailPopUp" class="mail-copy-pop-up"> Copy To Clipboard !</div>
        </div>

      </template>
    </prop-popup>
    <prop-popup :is-lazy="false" src="/manette.png" gradient-color="yellow">
      <template v-slot:title>My Github</template>
      <template v-slot:paragraph
      >
        <link-button link="https://github.com/PaulSerenRosso">Get it!</link-button>
      </template>
    </prop-popup>
    <prop-popup :is-lazy="false" :src="twitterProp" gradient-color="green">
      <template v-slot:title> My Twitter</template>
      <template v-slot:paragraph>
        <link-button link="https://twitter.com/tiondel_">Get it!</link-button>
      </template>
    </prop-popup>
  </div>
  <resume-container></resume-container>
  <scroll-reset />
</template>

<style scoped lang="scss">

.contact-title{
  padding-left: 30px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.contacts-grid {
  display: grid;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;

  position: relative;
}

.mail-button{
  width: min-content;
}

.mail-copy-pop-up{
  background-color : $main-darken-highlight-color;
  border-radius: 50px;
  padding: 1rem;
  color: white;
  font-family: MyLight;
  opacity: 0;
  position: absolute;
  transform:  scale(0.7);
}

@keyframes reveal-animation {
  0%{
    opacity: 0;
    transform:  translateX(-50%) scale(0.7);
  }
  10%{
    transform: translateX(-50%) scale(1.1);
  }
  20%{
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
  80%{
    opacity: 1;
  }
  100%{
    transform: translateX(-50%) scale(1);
    opacity: 0;
  }
}

.mail-copy-pop-up-animation{

  animation-name: reveal-animation;
  animation-duration: 2.5s;
}

@include mobile-md() {
  .contacts-grid {
    grid-template-rows: repeat(3, 1fr);
    grid-auto-columns: auto;
    grid-row-gap: 30px;
  }
}

@include tablet-md() {
  .contacts-grid {
    grid-template-rows: repeat(2, 2fr);
    grid-template-columns: repeat(2, 2fr);
    grid-row-gap: 30px;
    grid-column-gap: 30px;
  }
}

@include desktop-md() {
  .contacts-grid {
    grid-auto-rows: auto;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
    grid-template-rows: auto;
  }
}

@include largeDesktop-md() {
  .contacts-grid {
    grid-auto-rows: auto;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 30px;
    grid-template-rows: auto;
  }
}


</style>
