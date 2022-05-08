import { createRouter, createWebHistory ,createWebHashHistory} from 'vue-router'
// import Home from '../views/Home.vue'

/* 引入 各种单个路由配置 */
import route1 from '/@/router/routes/route1'
const routes = [
	...route1
	
		
	
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHashHistory(),
  routes
})

export default router
