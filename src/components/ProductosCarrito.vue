<template>
    <ion-row class="header-row">
        <ion-col size="3" class="producto-header">Producto</ion-col>
        <ion-col size="2" class="precio-header">Precio</ion-col>
        <ion-col size="2" class="cantidad-header">Cantidad</ion-col>
        <ion-col size="2" class="total-header">Total</ion-col>
    </ion-row>

    <div class="linea-horizontal"></div>

    <ion-row v-for="(producto, index) in props.productos" :key="producto.id" class="producto-row">
        <!-- Producto -->
        <ion-col size="3" class="producto-col">
        <div class="producto-info">
            <img :src="producto.foto_portada" alt="Imagen del producto" class="imagen-carrito" />
            <p class="nombre-producto">{{ producto.nombre }}</p>
        </div>
        </ion-col>

        <!-- Precio -->
        <ion-col size="2" class="precio-col">
        €{{ producto.precio.toFixed(2) }}
        </ion-col>

        <!-- Cantidad -->
        <ion-col size="2" class="cantidad-col">
        {{ producto.cantidad }}
        </ion-col>

        <!-- Total -->
        <ion-col size="2" class="total-col">
        €{{ (producto.precio * producto.cantidad).toFixed(2) }}
        </ion-col>
    </ion-row>
</template>


<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue'; // Importando los componentes de Ionic

import { defineProps } from 'vue';

const props = defineProps({
  productos: {
    type: Object,
    required: true,
  },
});

</script>

<style scoped>
/* Cabecera */
.header-row {
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

/* Línea horizontal encima del primer producto */
.linea-horizontal {
  border-top: 1px solid #dcdcdc; /* Línea de separación clara */
  margin-bottom: 20px; /* Espacio entre la línea y el primer producto */
}

/* Estilos para las celdas de la tabla */
.producto-header, .precio-header, .cantidad-header, .total-header {
  text-align: center;
  font-size: 1.2rem;
}

.producto-col {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.producto-info {
  display: flex;
  align-items: center;
  margin-left: 3rem;
}

.imagen-carrito {
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
  margin-right: 10px; /* Espacio entre la imagen y el nombre */
}

.producto-row {
  margin-top: 15px;
  border-bottom: 1px solid #e0e0e0; /* Línea horizontal más clara entre productos */
  padding-bottom: 10px; /* Espacio entre producto y línea */
}

.nombre-producto {
  font-size: 1.1rem;
  font-weight: bold;
}

.precio-col, .cantidad-col, .total-col {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>