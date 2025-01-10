<script setup lang="ts">
  import { IonApp, IonToolbar, IonTitle, IonFooter, IonHeader, IonButton, IonButtons, IonContent } from '@ionic/vue';
  import { useUserStore } from '@/stores/store'
  import { computed } from 'vue'

  const userStore = useUserStore()

  userStore.initialize()
  
  const isAuthenticated = computed(() => userStore.isAuthenticated)

  const do_logout = (async () => {
    await userStore.logout()
  })

</script>

<template>
  <ion-app>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-title>L E W K I N</ion-title>
          <h2>{{ userStore.isAuthenticated }}</h2>
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
          <ion-button>Carrito</ion-button>

          <!--Botones para sesion cerrada-->
          <ion-button v-if="!isAuthenticated" href="/login">Iniciar Sesión</ion-button>

          <!--Botones para sesion iniciada-->
          <ion-button v-if="isAuthenticated" @click="do_logout">Cerrar Sesión</ion-button>
          <ion-button v-if="isAuthenticated" href="/account">Cuenta</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
      

    <ion-content>
      <RouterView/>

    <ion-footer>
      <ion-toolbar>
        <ion-title>© 2021 L E W K I N</ion-title>
      </ion-toolbar>
    </ion-footer>


    </ion-content>
  </ion-app>
</template>
