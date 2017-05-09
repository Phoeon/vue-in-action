import Vue from 'vue'
import Router from 'vue-router'
import menus from './menu.js'
// import Frame from '@/components/frame'
// import Dashborad from '@/views/dashboard'
// import Login from '@/views/auth/login'
// import NotFound from '@/views/notfound'

Vue.use(Router)
let _routes = menus.map((item,i)=>{
  let r =item.split("/")[1];
  var route = {
    path:r,
    meta:{
      path : item
    },
    component: require('@/views/test')
  };
  if(r=="dashboard"){ 
    route.component = require('@/views/dashboard');
  }
  return route;
})
_routes.push({
  path:'',
  redirect:'dashboard'
})
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: require('@/views/hello')
    },{
    // 	path : "/dashboard",
    // 	name : "Dashborad",
    // 	component : (resolve)=>require(['@/views/dashboard'],resolve)
    // },{
      path : "/login",
      component : (resolve)=>require(['@/views/auth/login'],resolve)
    },
    {
      path : "/dashboard/",
      component : (resolve)=>require(['@/components/frame'],resolve),
      children:[..._routes]
    },
    {
      path : "/saas/",
      component : (resolve)=>require(['@/components/frame'],resolve),
      children:[..._routes]
    }
    ,{
      path : "*",
      component : (resolve)=>require(['@/views/notfound'],resolve)
    }
  ]
})
