<script>
import {defineComponent} from 'vue'
import MainParagraph from "@/components/MainParagraph.vue";

export default defineComponent({
  name: "SpaceParagraph",
  components: {MainParagraph}
})
</script>

<template>
<main-paragraph class="spaced-paragraph"><slot></slot></main-paragraph>
</template>

<style scoped lang="scss">


@include mobile-md() {
  .spaced-paragraph {
    padding-bottom: 20px;
  }
}

@include tablet-md() {
  .spaced-paragraph {
    padding-bottom: 20px;
  }
}

@include largeDesktop-md() {
  .spaced-paragraph {
    padding-bottom: 20px;
  }
}

@include desktop-md() {
  .spaced-paragraph {
    padding-bottom: 20px;
  }
}
</style>
