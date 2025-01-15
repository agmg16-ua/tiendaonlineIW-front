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
import NinoCatalog from '@/views/NinoCatalog.vue';
import NinaCatalog from '@/views/NinaCatalog.vue';
import TramitarPedido from '@/views/TramitarPedido.vue';
import { useCarritoStore } from '@/stores/carritoStore';
import Carrito from '@/views/Carrito.vue';
import PaymentCallback from '@/views/PaymentCallback.vue';
import PerfilPage from '@/views/PerfilPage.vue';
import AdminPage from '@/views/AdminPage.vue';


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
    name: 'login',
    beforeEnter: (to) => {
      if (localStorage.getItem('isAuthenticated') === 'true') {
        return { name: 'home' }
      }
    }
  },
  {
    path: '/register',
    component: RegisterPage,
    name: 'register',
    beforeEnter: (to) => {
      if (localStorage.getItem('isAuthenticated') === 'true') {
        return { name: 'home' }
      }
    }
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
    path: '/carrito',
    component: Carrito,
    name: 'Carrito'
  },
  {
    path: '/tramitarPedido',
    component: TramitarPedido,
    name: 'tramitarPedido',
    meta: { requiresAuth: true }
  },
  {
    path: '/paymentCallback',
    component: PaymentCallback,
    name: 'paymentCallback',
    meta: { requiresAuth: true }
  },
  {
    path: '/perfil',
    component: PerfilPage,
    name: 'perfil',
    meta: { requiresAuth: true }
  },
  {
    path: '/panelAdmin',
    component: AdminPage,
    name: 'panelAdmin',
    meta: { requiresAuth: true, requiresAdmin: true }
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

  if (to.meta.requiresAuth && !isAuthenticated) {
    return next({
      name: 'login',
      query: { redirect: to.fullPath }
    })
  }

  if (to.meta.requiresAdmin && localStorage.getItem('role') !== 'ADMIN') {
    return next({
      name: 'home'
    })
  }

  if (to.path === '/tramitarPedido' && useCarritoStore().carrito.length === 0) {
    return next({
      name: 'Carrito'
    })
  }

  next()
})

export default router
