import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import UI from './libs/'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/css/reset.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// import SlideNav from './components/SlideNav.vue'

createApp(App).use(router).use(UI).use(ElementPlus, {  locale: zhCn }).mount('#app')
