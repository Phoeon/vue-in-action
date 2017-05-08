// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
router.beforeEach((to,from,next)=>{
	let auth=sessionStorage.getItem("session_id")
	if(to.path=="/login"&&auth){
		return next({
			path:"/dashboard"
		})
	}else{
		return next()
	} 
})

/* eslint-disable no-new */
new Vue({
  el: '#frame',
  router,
  template: '<App/>',
  components: { App }
})
