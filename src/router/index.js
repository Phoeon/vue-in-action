import Vue from 'vue'
import Router from 'vue-router'
// import Frame from '@/components/frame'
// import Dashborad from '@/views/dashboard'
// import Login from '@/views/auth/login'
// import NotFound from '@/views/notfound'

Vue.use(Router)

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
  ]
})
