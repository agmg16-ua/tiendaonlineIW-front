<script setup lang="ts">
import { IonApp, IonToolbar, IonTitle, IonFooter, IonHeader, IonButton, IonButtons, IonContent, IonPopover, IonList, IonItem, IonIcon } from '@ionic/vue';
import { useUserStore } from '@/stores/store'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const userStore = useUserStore()

userStore.initialize()

const isAuthenticated = computed(() => userStore.isAuthenticated)

const goToPage = (page: String) => {
  router.push(`/${page}`)
}

const do_logout = (async () => {
  await userStore.logout()

  router.push('/')
})

</script>

<template>
  <ion-app>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-title>L E W K I N</ion-title>
          <ion-button>
            <Router-Link to="/">Inicio</Router-Link>
          </ion-button>
          <ion-button>
            <Router-Link to="/about">Nosotros</Router-Link>
          </ion-button>
          <ion-button>
            <Router-Link to="/contact">Contacta con Nosotros</Router-Link>
          </ion-button>
          <ion-button>
            <Router-Link to="/catalog">Catálogo</Router-Link>
          </ion-button>
          <ion-button>
            <Router-Link to="/catalog/hombre">Hombre</Router-Link>
          </ion-button>
          <ion-button>
            <Router-Link to="/catalog/mujer">Mujer</Router-Link>
          </ion-button>
          <ion-button>
            <Router-Link to="/catalog/nino">Niño</Router-Link>
          </ion-button>
          <ion-button>
            <Router-Link to="/catalog/nina">Niña</Router-Link>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button @click="router.push('/carrito')">
            <ion-icon name="cart-outline"></ion-icon>
          </ion-button>


          <!--Botones para sesion cerrada-->
          <ion-button v-if="!isAuthenticated" @click="router.push('/login')">Iniciar Sesión</ion-button>

          <!--Botones para sesion iniciada-->
          <ion-button v-if="isAuthenticated" id="popover-button">Cuenta</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>


    <ion-content>
      <RouterView />

      <ion-footer>
        <ion-toolbar>
          <ion-title>© 2021 L E W K I N</ion-title>
        </ion-toolbar>
      </ion-footer>
    </ion-content>

    <ion-popover v-if="isAuthenticated" trigger="popover-button" :dismiss-on-select="true">
      <ion-list>
        <ion-item :button="true" :detail="false" @click="goToPage('perfil')">Perfil</ion-item>
        <ion-item :button="true" @click="do_logout">Cerrar Sesión</ion-item>
      </ion-list>

    </ion-popover>
  </ion-app>
</template>
