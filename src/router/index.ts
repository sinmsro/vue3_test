import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import layout from '../layout/index.vue'
import { useMenus } from '@/store/menus';
import { loadMenu } from '@/api/user'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/index.vue')
  }

]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//路由守卫
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    loadAsyncMenu()
    return next();
  }

  if (!chckLogin) return next({ name: 'login', query: { redirect: to.path } })

  next()
})




function chckLogin() {
  //验证token有效性
  return window.sessionStorage.getItem('token')
}

function asyncRouteHandler(routes: any) {
  //同步路由对象
  return routes.map((route: any) => {

    if (route.component === 'layout') { route.component = layout }
    else {
      const comPath = route.component;
      route.component = () => import(`../views/${comPath}.vue`)
    }
    if (route.children && route.children.length > 0) {
      route.children = asyncRouteHandler(route.children)
    }
    return route;
  })
}

async function loadAsyncMenu() {
  const menus = useMenus()
  const res = await loadMenu()
  const asyncRoutes = asyncRouteHandler(res.data.data)

  menus.setMenu(res.data.data)

  // asyncRoutes.array.forEach(element => {

  // })
  asyncRoutes.forEach((r: any) => {
    router.addRoute(r)
  })

}

export default router