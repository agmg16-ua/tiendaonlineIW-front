<template>
  <ion-content>
    <div v-if="productos.length > 0" class="carrito-container">
      <HeaderCarrito />
      <ion-grid>
        <ProductosCarrito :productos="productos" />
        <CosteTotalCarrito :total="totalCarrito" />
        <ion-row class="pago-row">
          <ion-col size="12" class="pago-col">
            <button @click="procederPago" class="btn-proceder">Proceder al Pago</button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
  
    <div v-else class="no-productos">
      <p>No hay productos en el carrito.</p>
    </div>
  </ion-content>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue';
import HeaderCarrito from '@/components/HeaderCarrito.vue';
import CosteTotalCarrito from '@/components/CosteTotalCarrito.vue';
import ProductosCarrito from '@/components/ProductosCarrito.vue';
import { useRouter } from 'vue-router';
import { useCarritoStore } from '@/stores/store';

const carritoStore = useCarritoStore();

const router = useRouter();

const productos = ref<any[]>([]);

onMounted(async () => {
  const carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
  productos.value = carrito;
 
  if(localStorage.getItem('isAuthenticated') === 'true') {
    const response = await carritoStore.fetchCarrito()

    if (response.status === 200) {
      productos.value = carritoStore.carrito.linCarritos //o carritoStore.carrito.linCarritos
    }
  }
});

const totalCarrito = computed(() => {
  return productos.value.reduce((total, producto) => {
    return total + producto.precio * producto.cantidad;
  }, 0);
});

// Función para proceder al pago
const procederPago = () => {
  router.push('/tramitarPedido')
};
</script>

<style scoped>
.carrito-container {
  padding: 20px;
  margin-top: 20px;
}

.no-productos {
  text-align: center;
  margin-top: 20px;
}

.pago-row {
  margin-top: 20px;
  text-align: center;
}

.pago-col {
  display: flex;
  justify-content: left;
}

.btn-proceder {
  background-color: #f66f08;
  width: 25%;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-proceder:hover {
  background-color: #c64c00;
}

.btn-proceder:active {
  background-color: #c64c00;
}
</style>
