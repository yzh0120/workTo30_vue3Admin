import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
//createApp的函数就是App根组件
const Vue = createApp(App) 

//1-引入路由目录 , 目录中引入了router包
import router from '/@/router'
//2-引入vuex
import { store } from "/@/vuex/store";

Vue
    .use(router)
    .use(store)
    .mount('#app')
