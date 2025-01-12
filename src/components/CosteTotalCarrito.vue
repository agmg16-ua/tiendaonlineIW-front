<template>
    <ion-row>
      <ion-col size="12" class="total-carrito">
        <h2>Total Carrito: €{{ total.toFixed(2) }}</h2>
      </ion-col>
    </ion-row>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import { IonRow, IonCol } from '@ionic/vue';
  
  const props = defineProps({
    total: {
      type: Number,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  .total-carrito {
    margin-top: 20px;
    text-align: right;
    font-weight: bold;
  }
  </style>
  