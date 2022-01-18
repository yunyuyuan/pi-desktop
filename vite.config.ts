import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.ELECTRON=="true" ? './' : ".",
  plugins: [vue()],
  resolve: {
    alias: {
      "socket.io-client": "socket.io-client/dist/socket.io.js",
    },
  }
})
