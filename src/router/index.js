import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'

/* 引入 各种单个路由配置 */
import route1 from '/@/router/routes/route1'
const routes = [
	...route1
	
		
	
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
