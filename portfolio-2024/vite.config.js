import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "@/styles/globalVariables.scss";
        @import "@/styles/globalFonts.scss";
        @import "@/styles/globalMixins.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
