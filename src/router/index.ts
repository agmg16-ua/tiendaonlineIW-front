import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import ContactPage from '../views/ContactPage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import CatalogPage from '@/views/CatalogPage.vue';
import ProductDetails from '@/views/ProductDetails.vue';
import MenCatalog from '@/views/MenCatalog.vue';
import WomenCatalog from '@/views/WomenCatalog.vue';
import AllCatalog from '@/views/AllCatalog.vue';
import NinoCatalog from '@/views/NinaCatalog.vue';
import NinaCatalog from '@/views/NinaCatalog.vue';

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
    component: LoginPage,
    name: 'login'
  },
  {
    path: '/register',
    component: RegisterPage,
    name: 'register'
  },
  {
    path: '/catalog',
    component: AllCatalog,
    name: 'Catalog'
  },
  {
    path: '/catalog/mujer',
    component: WomenCatalog,
    name: 'womenCatalog'
  },
  {
    path: '/catalog/hombre',
    component: MenCatalog,
    name: 'menCatalog'
  },
  {
    path: '/catalog/nino',
    component: NinoCatalog,
    name: 'ninoCatalog'
  },
  {
    path: '/catalog/nina',
    component: NinaCatalog,
    name: 'ninaCatalog'
  },
  {
    path: '/productos/:id',
    component: ProductDetails,
    name: 'DetallesProducto'
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

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'

  if ((to.path === '/login' || to.path === '/register') && isAuthenticated) {
    return next({ name: 'home'})
  }

  next()
})

export default router
