import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { vuePixi, isCustomElement } from "vue3-pixi-components/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        // remove the unknown element warnings
        compilerOptions: { isCustomElement },
      },
    }),
    vueJsx(),
    vuePixi(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
