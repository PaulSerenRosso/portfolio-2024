import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: ['@/toGenerated'], // Exclude specific folder from the build
    },
  },
  plugins: [vue(), vueDevTools()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @use "@/styles/globalVariables.scss" as *;
        @use "@/styles/globalFonts.scss" as *;
        @use "@/styles/globalMixins.scss" as *;`,
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
