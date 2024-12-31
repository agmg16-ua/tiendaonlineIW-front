import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import CatalogPage from '@/views/CatalogPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HomePage,
    name: 'home'
  },
  {
    path: '/about',
    component: AboutPage,
    name: 'about'
  },
  {
    path: '/contact',
    component: ContactPage,
    name: 'contact'
  },
  {
    path: '/login',
    component: () => LoginPage,
    name: 'login'
  },
  {
    path: '/register',
    component: () => RegisterPage,
    name: 'register'
  },
  {
    path: '/catalog',
    component: CatalogPage,
    name: 'catalog'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tab1Page.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
