import Vue from 'vue'
import Router from 'vue-router'
import menus from './menu.js'
// import Frame from '@/components/frame'
// import Dashborad from '@/views/dashboard'
// import Login from '@/views/auth/login'
// import NotFound from '@/views/notfound'

Vue.use(Router)
let _routes = menus.map((item,i)=>{
  return {
    path:"/"+item,
    name : "name"+i,
    component: require('@/views/test')
  }
})
console.log(_routes)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: require('@/views/hello')
    },{
    	path : "/dashboard",
    	name : "Dashborad",
    	component : (resolve)=>require(['@/views/dashboard'],resolve)
    },{
      path : "/login",
      component : (resolve)=>require(['@/views/auth/login'],resolve)
    }
    ,{
      path : "*",
      component : (resolve)=>require(['@/views/notfound'],resolve)
    }
    ,..._routes
  ]
})
