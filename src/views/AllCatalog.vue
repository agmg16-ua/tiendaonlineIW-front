<template>
    <div>
      <!-- Mostrar un mensaje o spinner mientras se cargan los productos -->
      <div v-if="loading">Cargando productos...</div>
      <div v-else>
        <Catalogo :listaProductos="productos" />
      </div>
    </div>
  </template>
    
  <script setup lang="ts">
  import Catalogo from '@/views/CatalogPage.vue';
  import { ref, onMounted } from 'vue';
  import { useProductStore } from '@/stores/productStore';
  
  // Variables reactivas
  const productos = ref([]);
  const loading = ref(true); // Nueva bandera de carga
  const productStore = useProductStore();
  
  // Función para cargar los productos
  const fetchProductos = async () => {
    try {
      await productStore.fetchProducts(); // Cargar los productos desde la store
      productos.value = productStore.allProducts;
    } catch (error) {
      console.error('Error al obtener productos de hombre', error);
    } finally {
      loading.value = false; // Indicar que la carga ha terminado
    }
  };
  
  // Ejecutar la carga al montar el componente
  onMounted(fetchProductos);
  </script>
  