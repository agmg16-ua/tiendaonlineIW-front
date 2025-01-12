<template>
  <ion-content>
    <div v-if="productos.length > 0" class="carrito-container">
      <HeaderCarrito />
      <ion-grid>
        <ProductosCarrito :productos="productos" />
        <CosteTotalCarrito :total="totalCarrito" />
      </ion-grid>
    </div>
  
    <div v-else class="no-productos">
      <p>No hay productos en el carrito.</p>
    </div>
  </ion-content>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue'; // Importando los componentes de Ionic
import HeaderCarrito from '@/components/HeaderCarrito.vue';
import CosteTotalCarrito from '@/components/CosteTotalCarrito.vue';
import ProductosCarrito from '@/components/ProductosCarrito.vue';

// Obtener productos desde el localStorage
const productos = ref<any[]>([]);

onMounted(() => {
  // Obtener carrito de localStorage
  const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
  productos.value = carrito;
});

// Calcular el total del carrito
const totalCarrito = computed(() => {
  return productos.value.reduce((total, producto) => {
    return total + producto.precio * producto.cantidad;
  }, 0);
});
</script>

<style scoped>
/* Estilos generales del carrito */
.carrito-container {
  padding: 20px;
  margin-top: 20px;
}

/* Título del carrito */
.titulo-carrito {
  text-align: center;
  margin-bottom: 20px;
}

.titulo-carrito h1 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #9e9b9b;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 0;
}

.total-carrito {
  margin-top: 20px;
  text-align: right;
  font-weight: bold;
}

/* Mensaje si no hay productos */
.no-productos {
  text-align: center;
  margin-top: 20px;
}

/* Media Queries - Ajustes responsivos */
@media (max-width: 768px) {
  .titulo-carrito h1 {
    font-size: 1.8rem;
    flex-direction: column;
    text-align: center;
  }
}
</style>