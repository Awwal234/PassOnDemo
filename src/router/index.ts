import { createRouter, createWebHistory } from 'vue-router';
//@ts-ignore
import HomeView from '../views/HomeView.vue';
//@ts-ignore
import HomeApp from '../views/app/HomeApp.vue'
//@ts-ignore
import FinanceApp from '../views/app/FinanceApp.vue'
//@ts-ignore
import MessageApp from '../views/app/MessageApp.vue'
//@ts-ignore
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //@ts-ignore
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/home_application',
      name: 'HomeApp',
      component:HomeApp
    },
    {
      path: '/finance',
      name: 'finance',
      component:FinanceApp
    },
    {
      path: '/message',
      name: 'message',
      component:MessageApp
    },
  ]
})

export default router
