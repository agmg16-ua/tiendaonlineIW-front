<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/store';

const userStore = useUserStore();

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: number;
}

interface LineaPedido {
  id: number;
  cantidad: number;
  pedidoId: number;
  productoData: Producto;
}

interface Pedido {
  id: number;
  referencia: string;
  facturaData: {
    id: number;
    importe: number;
    created_at: string;
  };
  estado: string;
  lineasPedidoData: LineaPedido[];
  direccionData: {
    calle: string;
    numero: number;
    ciudad: string;
    provincia: string;
  };
}

const pedidosData = ref<Pedido[]>([]);
const showLineas = ref<boolean[]>([]);

const formatDate = (date: string | null): string => {
  if (!date) return 'N/A';
  const formattedDate = new Date(date);
  return formattedDate.toLocaleDateString();
};

onMounted(async () => {
  const data = await userStore.getCurrentUserPedidos();

  if (data.status === 200) {
    pedidosData.value = data.data;
  }
});

const togglePedido = (index: number) => {
  showLineas.value[index] = !showLineas.value[index];
};

</script>

<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>
        <h3>Mis Pedidos</h3>
      </ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-list>
        <ion-item-group v-for="(pedido, index) in pedidosData" :key="pedido.id">
          <ion-item button @click="togglePedido(index)">
            <ion-label>
              <h2>Referencia: {{ pedido.referencia }}</h2>
              <p>Fecha: {{ formatDate(pedido.facturaData.created_at) }}</p>
              <p>Importe: {{ pedido.facturaData.importe }}€</p>
            </ion-label>
            <ion-icon :name="showLineas[index] ? 'chevron-up' : 'chevron-down'" slot="end"></ion-icon>
          </ion-item>

          <ion-item>
            hola
          </ion-item>
        </ion-item-group>
      </ion-list>
    </ion-card-content>
  </ion-card>
</template>