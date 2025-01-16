<template>
    <div v-if="carrito.length > 0" class="carrito-container">
      <HeaderCarrito />
      <ion-grid>
        <ProductosCarrito :carrito="carrito" @actualizarCarrito="obtenerCarrito" />
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

const carrito = ref<any[]>([]);

onMounted(async () => {
  await obtenerCarrito(); // Llama a la nueva función al montar el componente
});

// Función para obtener el carrito desde la base de datos o localStorage
const obtenerCarrito = async () => {
  if (localStorage.getItem('isAuthenticated') === 'true') {
    try {
      const response = await carritoStore.fetchCarrito();
      if (response.status === 200) {
        carrito.value = carritoStore.carrito.linCarritos;

        // Ordenar los productos por id
        carrito.value.sort((a, b) => a.id - b.id);
      }
    } catch (error) {
      console.error('Error al obtener el carrito:', error);
    }
  } else {
    const carritoAux = JSON.parse(localStorage.getItem('carrito') || '[]');
    carrito.value = carritoAux;

    // Ordenar los productos por id
    carrito.value.sort((a, b) => a.id - b.id);
  }
  console.log(carrito);
};



const totalCarrito = computed(() => {
  return carrito.value.reduce((total, producto) => {
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

/* Estilo general del botón */
.btn-proceder {
  background-color: #f66f08;
  width: 25%; /* Ancho en pantallas grandes */
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

/* Responsividad para pantallas móviles */
@media (max-width: 480px) {
  .btn-proceder {
    width: 100%; /* Ancho completo en pantallas pequeñas */
    padding: 12px 0; /* Aumentar el padding para mayor altura del botón */
    font-size: 1.5rem; /* Hacer el texto más grande */
  }
}
</style>
