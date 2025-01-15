<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/store';

const userStore = useUserStore();

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  foto_portada: string;
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
  importe: number;
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
              <p v-if="pedido.facturaData">Fecha: {{ formatDate(pedido.facturaData.created_at) }}</p>
              <p>Estado: {{ pedido.estado }}</p>
              <p>Importe: {{ pedido.importe }}€</p>
            </ion-label>
            <ion-icon :name="showLineas[index] ? 'chevron-up' : 'chevron-down'" slot="end"></ion-icon>
          </ion-item>

          <ion-item v-if="showLineas[index]" lines="full">
            <ion-label>
              <h3>Dirección de Envio:</h3>
              <p>{{ pedido.direccionData.calle }} {{ pedido.direccionData.numero }}, {{ pedido.direccionData.ciudad }}
                {{ pedido.direccionData.provincia }}</p>
            </ion-label>
          </ion-item>

          <ion-list v-if="showLineas[index]">
            <ion-item-group v-for="linea in pedido.lineasPedidoData" :key="linea.id">
              <ion-item>
                <ion-avatar slot="start">
                  <img :src="linea.productoData.foto_portada" alt="Producto">
                </ion-avatar>
                <ion-label>
                  <h2>{{ linea.productoData.nombre }}</h2>
                  <p>{{ linea.productoData.descripcion }}</p>
                  <p>Cantidad: {{ linea.cantidad }}</p>
                  <p>Precio: {{ linea.productoData.precio }}€/unidad</p>
                </ion-label>
              </ion-item>
            </ion-item-group>
          </ion-list>

        </ion-item-group>
      </ion-list>
    </ion-card-content>
  </ion-card>
</template>