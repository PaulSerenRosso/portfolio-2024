<script>
import { defineComponent } from 'vue'
import PopupContainer from '@/components/PopupContainer.vue'
import PageTitle from '@/components/PageTitle.vue'
import MainParagraph from '@/components/MainParagraph.vue'
import Subtitle from '@/components/Subtitle.vue'
import MainImage from "@/components/MainImage.vue";
import PropRender from "@/components/PropRender.vue";

export default defineComponent({
  name: 'PropPopup',
  components: {PropRender, MainImage, Subtitle, MainParagraph, PageTitle, PopupContainer },
  props: {
    src: {},
    isLazy:{ Boolean, default: true },
    gradientColor: String,
  },
})
</script>

<template>
  <div class="prop-popup-root">
    <popup-container :is-lazy="isLazy"
      :gradient-color="this.gradientColor"
      class-container-name="prop-popup-container"
    >
      <div class="prop-render">
        <prop-render :is-lazy="isLazy"  :src="this.src"></prop-render>
      </div>

      <subtitle class="subtitle">
        <slot name="title"></slot>
      </subtitle>
      <main-paragraph class="paragraph">
        <slot name="paragraph"></slot>
      </main-paragraph>
    </popup-container>
  </div>
</template>
<style lang="scss">
.prop-popup-container {
  display: flex;
  flex-direction: column;
  height: auto;

  border-style: dotted;
  border-width: 5px;
  border-color: $main-black-color;
  background: rgba(243, 243, 243, 0.7);
  border-radius: 10px;
  padding-top: 70px !important;
}

.prop-render {

  align-self: center;

  top: 0%;
  transform: translate(-50%,-50%);

  position: absolute;
}

.subtitle {
  text-align: left;
  padding-bottom: 10px;
}

.paragraph {
  text-align: left;
}



@include mobile-md() {
  .prop-render {
    max-width: 200px;
    max-height: 200px;
    padding-bottom: 30px;
  }
  .prop-popup-container {

  }

  .prop-popup-root{
    padding-top: 100px !important;
  }
}

@include tablet-md() {

  .prop-popup-container {
    padding-right: 10px !important;
  }
  .prop-render {
    max-width: 230px;
    max-height: 230px;
    padding-bottom: 40px;
  }

  .prop-popup-root{
    padding-top: 120px !important;
  }
}

@include desktop-md() {
  .prop-render {
    max-width: 250px;
    max-height: 250px;
    padding-bottom: 40px;
  }

  .prop-popup-root{
    padding-top: 180px !important;
  }

}

@include largeDesktop-md() {
  .prop-render {
    max-width: 300px;
    max-height: 300px;
    padding-bottom: 60px;
  }

  .prop-popup-root{
    padding-top: 180px !important;
  }

}

</style>
