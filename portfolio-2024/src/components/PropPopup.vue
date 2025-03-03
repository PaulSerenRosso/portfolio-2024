<script>
import { defineComponent } from 'vue'
import PopupContainer from '@/components/PopupContainer.vue'
import PropRender from '@/components/PropRender.vue'
import PageTitle from '@/components/PageTitle.vue'
import MainParagraph from '@/components/MainParagraph.vue'
import Subtitle from '@/components/Subtitle.vue'

export default defineComponent({
  name: 'PropPopup',
  components: { Subtitle, MainParagraph, PageTitle, PropRender, PopupContainer },
  props: {
    src: String,

    gradientColor: String,
  },
})
</script>

<template>
  <div class="prop-popup-root">
    <popup-container
      :gradient-color="this.gradientColor"
      class-container-name="prop-popup-container"
    >
      <prop-render class="prop-render" :src="this.src"></prop-render>
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
  padding-right: 50px !important;
  border-style: dotted;
  border-width: 5px;
  border-color: $main-black-color;
  background: rgba(243, 243, 243, 0.7);
  border-radius: 10px;
  padding-top: 70px !important;
}
</style>

<style scoped lang="scss">
.prop-render {
  width: 200px;
  padding-bottom: 10px;
  align-self: center;
  top: 0%;
  transform: translateY(-50%);
  position: absolute;
}

.subtitle {
  text-align: left;
  padding-bottom: 10px;
}

.paragraph {
  text-align: left;
}
.prop-popup-root{
  padding-top: 50px !important;
}
</style>
