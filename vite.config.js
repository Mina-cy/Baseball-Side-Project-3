import { fileURLToPath, URL } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import { DevUiResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => {
  return {
    base: command === 'build' ? '/Baseball-Side-Project-3/' : '/',

    plugins: [
      vue(),
      Components({
        resolvers: [DevUiResolver()]
      }),
      vueDevTools(),
      tailwindcss()
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      open: true
    }
  }
})
