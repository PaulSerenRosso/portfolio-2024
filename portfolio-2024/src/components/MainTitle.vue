<script>
import {defineComponent} from 'vue'
import LettersAnimation from "@/components/LettersAnimation.vue";

export default defineComponent({
  name: "MainTitle",

  components: {LettersAnimation},
  props:{
  textContent:String,

  }
  })
  </script>

  <template>
    <div class="main-title-container">
      <letters-animation :key-event="keyEvent" :text-content="textContent"></letters-animation>
    </div>

  </template>

  <style scoped lang="scss">
    .main-title-container{
      color: $main-black-color;
      font-family: MyBold;

    ;
    }
    @include mobile-md(){
      .main-title-container{
        font-size: $title-mobile-font-size;
        line-height: $title-mobile-font-size;
      }
    }

    @include tablet-md(){
      .main-title-container{
        font-size: $title-tablet-font-size;
        line-height: $title-tablet-font-size+10;
      }
    }

    @include desktop-md(){
      .main-title-container{
        font-size: $title-desktop-font-size;
        line-height: $title-desktop-font-size+10;
      }
    }

    @include largeDesktop-md(){
      .main-title-container{
        font-size: $title-large-desktop-font-size;
        line-height: $title-large-desktop-font-size+10;
      }
    }
</template>

<style scoped>

</style>
