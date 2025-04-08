<script>
export default {
  name: 'TagElement',
}
</script>

<template>
  <div class="tag">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.tag {
  color: $secondary-white-color;
  background-color: $main-light-highlight-color;
  font-family: MyRegular;

  border-radius: 40px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  min-width: 50px;
  text-align: center;
  margin: 3px;
}

@include mobile-md() {
  .tag {
    font-size: $small-mobile-font-size;
  }
}

@include tablet-md() {
  .tag{
    font-size: $small-tablet-font-size;
  }
}

@include desktop-md() {
  .tag {
    font-size: $small-desktop-font-size;
  }
}

@include largeDesktop-md() {
  .tag {
    font-size: $small-large-desktop-font-size;
  }
}
</style>
