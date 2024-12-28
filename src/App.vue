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
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button>Carrito</ion-button>
          <ion-button>Iniciar Sesión</ion-button>
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

<script setup lang="ts">
  import { IonApp } from '@ionic/vue';
</script>
