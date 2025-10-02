import { fileURLToPath, URL } from 'node:url'
import { defineConfig, } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // visualizer({
    //   open: true
    // })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@blocks' : fileURLToPath(new URL('./src/blocks', import.meta.url)),
      '@components' : fileURLToPath(new URL('./src/components', import.meta.url)),
      '@images' : fileURLToPath(new URL('./src/assets/images', import.meta.url)),
      '@scss' : fileURLToPath(new URL('./src/assets/scss', import.meta.url)),
    }
  },
  css: {
    devSourcemap: true,  // CSS 소스맵 활성화
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["legacy-js-api"],
        additionalData: `@use "@/assets/scss/common/_mixin" as *;`,
      },
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss : {
  //       additionaData: `
  //         @import "./src/assets/scss/_function.scss";
  //         @import "./src/assets/scss/_mixin.scss";
  //       `
  //     }
  //   }
  // },      
  // ssr: {
  //   // SSR 설정
  //   noExternal: ['vue-router']
  // }
})
