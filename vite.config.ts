import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // svg使用
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), './src/assets/icons')],
      symbolId: '[name]'
    })
  ],
  // 路径别名
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src')
    }
  }
})
