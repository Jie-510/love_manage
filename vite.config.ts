import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// element-puls
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // svg使用
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), './src/assets/icons')],
      symbolId: '[name]'
    }),
    // element-puls
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // 路径别名
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src')
    }
  }
})
