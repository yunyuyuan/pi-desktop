import { createApp } from 'vue';
import App from './App.vue';
import './assets/style/main.scss';
import IconSvg from "./assets/svg/IconSvg.vue";

createApp(App)
  .component('svg-icon', IconSvg)
  .mount('#app')
