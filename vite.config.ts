import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        // target: 'http://192.168.123.142:80',
        // target: 'http://172.20.10.7:80',
        //arget: 'http://10.111.127.83:80',
        target: 'http://localhost:8101',
        // target: 'http://152.136.247.219:8101',
        changeOrigin: true,
        ws: true, // 允许websocket代理
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/image': {
        target: 'https://sm.ms/api/v2/upload',
        changeOrigin: true,
        ws: true, // 允许websocket代理
        rewrite: (path) => path.replace(/^\/image/, '')
      }
    }
  }
})
