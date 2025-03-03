import { defineStore } from 'pinia'

export const useCSSStore = defineStore('cssStore', {
  state: () => ({
    TabletMinBreakpoint: 768,
    DesktopMinBreakpoint: 1024,
    LargeDesktopMinBreakpoint: 1280,
  }),
})
