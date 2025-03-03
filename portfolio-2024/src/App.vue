<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MenuBar from '@/components/MenuBar.vue'
</script>

<template>
  <header>
    <menu-bar></menu-bar>
  </header>
  <div id="routerView">
    <router-view v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in">
        <div :key="route.name">
          <component :is="Component"></component>
        </div>
      </Transition>
    </router-view>
  </div>
</template>
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(50px);
}
</style>

<style lang="scss">
html {
  background-color: $main-white-color;
}

body {
  background-color: $main-white-color;
}

#routerView {
  position: absolute;
  top: 10%;
  width: 100%;
  height: 90%;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1;
}
</style>
