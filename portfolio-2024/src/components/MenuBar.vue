<script>
import { defineComponent } from 'vue'
import { activateScroll, deactivateScroll } from '@/composables/Scroll'
import { useCSSStore } from '@/store/CSSStore.js'

import MainButton from '@/components/MainButton.vue'

export default defineComponent({
  name: 'MenuBar',
  components: { MainButton },
  setup() {
    const cssStore = useCSSStore()
    return { cssStore: cssStore }
  },
  data() {
    return {
      aboutMeName: 'About Me',
      keyProjectsName: 'Key Projects',
      contactName: 'Contact Me!',
      mobileMenuButtonState: 'closed',
      scrollDesactivationTimer: {},
      windowWidth: 0,
    }
  },
  created() {
    window.addEventListener('resize', this.updateWindowWidth)
    this.updateWindowWidth()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWindowWidth)
  },
  computed: {
    checkPlatformDeviceIdForRenderMobileMenuBar() {

      return this.windowWidth <= this.cssStore.DesktopMinBreakpoint
    },
  },
  methods: {
    updateWindowWidth() {
      this.windowWidth = window.innerWidth
    },
    goToPage() {
      this.changeStateOfMobileMenuToClosed()
    },

    changeStateOfMobileMenuToClosed() {
      clearTimeout(this.scrollDesactivationTimer)
      activateScroll()
      this.mobileMenuButtonState = 'closed'
    },
    changeStateOfMobileMenu() {
      if (this.mobileMenuButtonState === 'opened') {
        clearTimeout(this.scrollDesactivationTimer)
        activateScroll()
        this.mobileMenuButtonState = 'closed'
      } else {
        this.scrollDesactivationTimer = setTimeout(deactivateScroll, 1000)
        this.mobileMenuButtonState = 'opened'
      }
    },
  },
})
</script>

<template>
  <div
    v-if="this.checkPlatformDeviceIdForRenderMobileMenuBar"
    id="_menuBarMobilePopUp"
    :class="`menu-bar-mobile-pop-up-${this.mobileMenuButtonState}`"
  >
    <router-link v-on:click="this.goToPage()" to="/" class="menu-bar-button menu-bar-mobile-button">
      {{ this.aboutMeName }}
    </router-link>
    <router-link
      v-on:click="this.goToPage()"
      to="/keyProjects"
      class="menu-bar-button menu-bar-mobile-button"
    >
      {{ this.keyProjectsName }}
    </router-link>
    <router-link
      v-on:click="this.goToPage()"
      to="/contacts"
      class="menu-bar-button menu-bar-mobile-button"
    >
      {{ this.contactName }}
    </router-link>
  </div>
  <div id="_menuBarContainer">
    <div id="_menuBarMobile" v-if="this.checkPlatformDeviceIdForRenderMobileMenuBar">
      <div class="menu-bar-mobile-burger-button" v-on:click="this.changeStateOfMobileMenu()">
        <span
          :class="`menu-bar-mobile-burger-button-icon menu-bar-mobile-burger-button-icon-${this.mobileMenuButtonState}`"
        >
        </span>
      </div>
    </div>
    <div id="_menuBarDesktop" v-if="!this.checkPlatformDeviceIdForRenderMobileMenuBar">
      <div id="_menuBarDesktopButtonsContainer">
        <router-link
          v-on:click="this.goToPage()"
          to="/"
          class="menu-bar-button menu-bar-desktop-button"
        >
          {{ this.aboutMeName }}
        </router-link>
        <router-link
          v-on:click="this.goToPage()"
          to="/keyProjects"
          class="menu-bar-button menu-bar-desktop-button"
        >
          {{ this.keyProjectsName }}
        </router-link>

        <router-link v-on:click="this.goToPage()" to="/contacts" class="menu-bar-contact-desktop">
          <main-button :has-animation="false" :delay="1000" key-event="">
            {{ this.contactName }}
          </main-button>
        </router-link>
      </div>
    </div>
    <div class="menu-bar-title-container">
      <router-link v-on:click="this.goToPage()" to="/" class="menu-bar-title">
        <img src="/Logo_PSR.png" class="menu-bar-logo" />
        Paul Seren-Rosso
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-bar-title-container {
  position: absolute;
  height: 100%;
  left: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
}

.menu-bar-logo {
  height: 70%;
  padding-right: 0.1rem;
}

.menu-bar-title {
  font-family: MyBlack;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: $main-black-color;
  height: 100%;
}

.menu-bar-button {
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  text-decoration: none;
  font-family: MyRegular;
}

.menu-bar-contact-desktop {
  margin-right: 1rem;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
  text-decoration: none;
}

.menu-bar-mobile-button {
  padding-top: 10px;
  color: $main-black-color;
  font-size: $subtitle-mobile-font-size;
}

.menu-bar-desktop-button {
  color: $main-black-color;
  margin-right: 1rem;
  font-size: $default-large-desktop-font-size;
}

#_menuBarMobile {
  position: absolute;
  height: 100%;
  width: 100%;
}

#_menuBarDesktop {
  position: absolute;
  height: 100%;
  width: 100%;
}

#_menuBarDesktopButtonsContainer {
  position: relative;
  height: 100%;
  width: auto;
  right: 0%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
}

#_menuBarMobilePopUp {
  position: fixed;
  overflow: hidden;
  z-index: 2;
  top: 0%;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: $main-white-color;
}

.menu-bar-mobile-pop-up-opened {
  left: 0%;
  transition-duration: 1s;
}

.menu-bar-mobile-pop-up-closed {
  left: -100%;
  transition-duration: 1s;
}

.menu-bar-mobile-burger-button {
  position: absolute;
  top: 0%;
  left: 80%;
  height: 100%;
  width: 20%;
}

#_menuBarContainer {
  position: fixed;
  overflow: hidden;
  top: 0%;
  left: 0%;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10%;
  z-index: 3;
  background-color: $secondary-white-color;
  border-color: $main-black-color;
  border-bottom-width: 0.1rem;
  border-bottom-style: dashed;
}

.menu-bar-mobile-burger-button-icon {
  width: 2rem;
  height: 0.2rem;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.menu-bar-mobile-burger-button-icon::after {
  content: '';
  width: 2rem;
  height: 0.2rem;
  background-color: $main-black-color;
  display: block;
  position: absolute;
}

.menu-bar-mobile-burger-button-icon::before {
  content: '';
  width: 2rem;
  height: 0.2rem;
  background-color: $main-black-color;
  display: block;
  position: absolute;
}

.menu-bar-mobile-burger-button-icon-closed {
  transition-duration: 1s;
  background-color: $main-black-color;
}

.menu-bar-mobile-burger-button-icon-closed::after {
  transform: translateY(-10px) rotate(0) translateZ(0);
  transition: transform 1s;
}

.menu-bar-mobile-burger-button-icon-closed::before {
  transform: translateY(10px) rotate(0) translateZ(0);
  transition: transform 1s;
}

.menu-bar-mobile-burger-button-icon-opened {
  background-color: transparent;

  transition-duration: 1s;
}

.menu-bar-mobile-burger-button-icon-opened::after {
  transform: translateY(0) rotate(45deg);
  transition: transform 1s;
}

.menu-bar-mobile-burger-button-icon-opened::before {
  transform: translateY(0) rotate(-45deg);
  transition: transform 1s;
}

@include mobile-md() {
  .menu-bar-title {
    font-size: $quote-mobile-font-size;
  }
}

@include tablet-md() {
  .menu-bar-title {
    font-size: $quote-tablet-font-size;
  }
}

@include desktop-md() {
  .menu-bar-title {
    font-size: $quote-desktop-font-size;
  }
}

@include largeDesktop-md() {
  .menu-bar-title {
    font-size: $quote-large-desktop-font-size;
  }
}
</style>
