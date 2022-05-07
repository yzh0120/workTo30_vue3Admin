
// import Vue from 'vue'
// import Vuex from 'vuex'
import { createStore } from "vuex";
/*
引入 模块化文件
 */

// 顶部导航栏和其他所有的组件通信
import baseData from '/@/vuex/modules/baseData'


// Vue.use(Vuex)

// const state = {

// }
// const mutations = {

// }
// const actions = {

// }
// const getters = {

// }
export const store = createStore(
	{
	 //  state,
		// mutations,
		// actions,
		// getters,
	//注册vuex模块
		modules:{
	    baseData
	  }
	}
)

// export default new Vuex.Store({
//  //  state,
// 	// mutations,
// 	// actions,
// 	// getters,
// //注册vuex模块
// 	modules:{
//     baseData
//   }
// })
