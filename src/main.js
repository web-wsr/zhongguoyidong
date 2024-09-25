import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';
import { ConfigProvider } from 'ant-design-vue';
import zhCN from 'ant-design-vue/locale/zh_CN.js';

import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/reset.css';

import 'virtual:svg-icons-register';
import SvgIcon from '@/components/Common/SvgIcon.vue'; //导入自定义的SVG图标组件，通常位于项目的components目录下，用于在应用中展示SVG图标

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)
app.use(ConfigProvider, { locale: zhCN })
app.component('SvgIcon', SvgIcon); //注册全局的SvgIcon组件，使得在应用的任何地方都可以使用<SvgIcon>标签。
app.mount('#app')
