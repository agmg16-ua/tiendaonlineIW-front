<script setup lang="ts">
import { IonApp, IonToolbar, IonTitle, IonFooter, IonHeader, IonButton, IonButtons, IonContent, IonPopover, IonList, IonItem, IonIcon } from '@ionic/vue';
import { useUserStore } from '@/stores/store'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const userStore = useUserStore()

userStore.initialize()

const isAuthenticated = computed(() => userStore.isAuthenticated)

const isAdmin = computed(() => userStore.role === 'ADMIN')

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
          <ion-button @click="router.push('/')">Inicio</ion-button>
          <ion-button @click="router.push('/catalog')">Catálogo</ion-button>
          <ion-button @click="router.push('/catalog/hombre')">Hombre</ion-button>
          <ion-button @click="router.push('/catalog/mujer')">Mujer</ion-button>
          <ion-button @click="router.push('/catalog/nino')">Niño</ion-button>
          <ion-button @click="router.push('/catalog/nina')">Niña</ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button @click="router.push('/about')">Nosotros</ion-button>
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
          <ion-title>© 2025 L E W K I N - UA</ion-title>
        </ion-toolbar>
      </ion-footer>
    </ion-content>

    <ion-popover v-if="isAuthenticated" trigger="popover-button" :dismiss-on-select="true">
      <ion-list>
        <ion-item :button="true" :detail="false" @click="goToPage('perfil')">Perfil</ion-item>
        <ion-item v-if="isAdmin" :button="true" :detal="false" @click="goToPage('panelAdmin')">Panel de
          Administración</ion-item>
        <ion-item :button="true" @click="do_logout">Cerrar Sesión</ion-item>
      </ion-list>

    </ion-popover>
  </ion-app>
</template>
