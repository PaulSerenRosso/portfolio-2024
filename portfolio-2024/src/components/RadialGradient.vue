<script>
import { defineComponent } from 'vue'
import { useCSSStore } from '@/store/CSSStore.js'

export default defineComponent({
  name: 'RadialGradient',
  data() {
    return {
      Colors: {
        red: '#ffc2c2',
        yellow: '#fffec2',
        darkenBlue: '#c6c2ff',
        blue: '#c2d3ff',
        green: '#c5ffc2',
        lightGreen: '#c2ffd8',
        violet: '#e2c2ff',
        pink: '#ffc2f7',
        cyan: '#c2feff',
        orange: '#ffdfc2',
        white: '#fff',
      },
      bounds: 100,
      styleObject: {
        top: this.top - 50 + '%',
        left: this.left - 50 + '%',
      },
      currentBlurDeviation: 50,
      currentResizeObserver: 0,
    }
  },
  props: {
    radius: Number,
    color: Number,
    top: Number,
    left: Number,
  },
  setup() {
    const cssStore = useCSSStore()
    return { cssStore: cssStore }
  },
  created() {
    window.addEventListener('resize', this.updateBlurDeviation)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateBlurDeviation)
  },
  mounted() {
    this.updateBlurDeviation()
  },

  methods: {
    updateBlurDeviation() {
      if (window.innerWidth >= this.cssStore.LargeDesktopMinBreakpoint) {
        this.currentBlurDeviation = 70
      } else if (window.innerWidth >= this.cssStore.DesktopMinBreakpoint) {
        this.currentBlurDeviation = 50
      } else if (window.innerWidth >= this.cssStore.TabletMinBreakpoint) {
        this.currentBlurDeviation = 50
      } else {
        this.currentBlurDeviation = 50
      }
    },
  },
})
</script>

<template>
  <div ref="container" class="background-radial-gradient" :style="this.styleObject">
    <svg overflow="visible" width="100%" height="100%" fill="none">
      <defs>
        <filter
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          overflow="visible"
          id="filter0_f_301_3"
          color-interpolation-filters="sRGB"
        >
          <feGaussianBlur
            :stdDeviation="this.currentBlurDeviation"
            result="effect1_foregroundBlur_301_3"
          />
        </filter>
      </defs>
      <g filter="url(#filter0_f_301_3)">
        <ellipse
          cx="50%"
          cy="50%"
          :rx="this.radius + '%'"
          :ry="this.radius + '%'"
          :fill="this.Colors[this.color]"
        />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.background-radial-gradient {
  position: absolute;
  /* Ensure the height does not exceed 100% of its container */
  z-index: -1;
  pointer-events: none;

  width: 100%; /* Allow dynamic width */
  height: 100%; /* Allow dynamic height */
}
</style>
