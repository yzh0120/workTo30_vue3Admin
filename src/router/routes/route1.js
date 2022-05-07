export default [
	{
	  path: '/',
	  name: 'home',
		component: () => import('/@views/home.vue'),
	children: [
	  	{
	  	  path: 'aa',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
	  	  name: 'aa',
	  	  component: ()=>import('/@views/a.vue')
	  	},
	  	{
	  	  path: 'bb',
	  	  name: 'bb',
	  	  component: ()=>import('/@views/b.vue')
	  	}
	  ]
	},
	// {
	//   path: '/two',
	//   name: 'two',
	//   component: () => import('/@views/two.vue'),
	//   children: [
	//   	{
	//   	  path: 'aaa',//以“/”开头的嵌套路径会被当作根路径，所以子路由上不用加“/”;在生成路由时，主路由上的path会被自动添加到子路由之前，所以子路由上的path不用在重新声明主路由上的path了。
	//   	  name: 'aaa',
	//   	  component: ()=>import('/@coms/aaa.vue')
	//   	},
	//   	{
	//   	  path: 'bbb',
	//   	  name: 'bbb',
	//   	  component: ()=>import('/@coms/bbb.vue')
	//   	},
	// 	{
	// 	  path: 'ccc',
	// 	  name: 'ccc',
	// 	  component: ()=>import('/@coms/ccc.vue')
	// 	}
	//   ]
	// },
	// {
	//   path: '/three',
	//   name: 'three',
	//   component: () => import('/@views/three.vue')
	// }
]