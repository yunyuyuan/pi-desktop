import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {dataToEsm} from "rollup-pluginutils";
import fs from "fs";

const rawSvgPlugin:Plugin = {
  name: 'raw-svg-file-loader',
  transform(svg: string, filepath: string) {
    if (filepath.slice(-4) !== '.svg') return null;
    const content = fs.readFileSync(filepath).toString()
    return {
      code: dataToEsm(content)
    }
  },
}

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.ELECTRON=="true" ? './' : ".",
  plugins: [vue(), rawSvgPlugin],
  resolve: {
    alias: {
      "socket.io-client": "socket.io-client/dist/socket.io.js",
    },
  }
})
