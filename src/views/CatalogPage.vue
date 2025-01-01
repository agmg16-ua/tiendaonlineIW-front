<template>
  <div>
    <!-- Filtro de precio -->
    <div class="filter-container">
      <IonButton @click="mostrarFiltro = !mostrarFiltro" size="small" class="filter-button">
        <IonIcon :icon="funnelOutline" slot="start" />
        Precio
      </IonButton>
      <div v-if="mostrarFiltro" class="range-container">
        <IonRange dualKnobs :min="0" :max="200" :step="1" color="primary" v-model="precioRango" @ionChange="filtrarPorPrecio">
          <div slot="start">€{{ precioRango.lower }}</div>
          <div slot="end">€{{ precioRango.upper }}</div>
        </IonRange>
      </div>
      <!-- Botón para ordenar por precio -->
      <div class="ordenar-container">
        <IonButton @click="mostrarOrden = !mostrarOrden" size="small" class="filter-button">
          Ordenar por Precio
        </IonButton>
        <!-- Opciones para ordenar -->
        <div v-if="mostrarOrden" class="order-options">
          <IonButton size="small" @click="ordenarPorPrecio('asc')" :class="['order-option-button', { 'active': ordenActual === 'asc' }]" color="transparent">
            Ascendente
          </IonButton>
          <IonButton size="small" @click="ordenarPorPrecio('desc')" :class="['order-option-button', { 'active': ordenActual === 'desc' }]" color="transparent">
            Descendente
          </IonButton>
          <!-- Botón para limpiar la ordenación -->
          <IonButton size="small" @click="limpiarOrdenacion" :class="['order-option-button', { 'active': ordenActual === null }]" color="transparent">
            Ninguno
          </IonButton>
        </div>
      </div>
    </div>
    <!-- Verifica si hay productos -->
    <IonGrid>
      <IonRow>
        <IonCol size="12" size-md="4" size-lg="2" v-for="producto in productosFiltrados" :key="producto.id">
          <IonCard class="product-card" @click="$router.push({ name: 'DetallesProducto', params: { id: producto.id } })">
            <!-- Imagen del producto en la parte superior -->
            <Img v-if="producto.foto_portada" :src="producto.foto_portada"  alt="Foto del producto" class="product-image-container"/>
            <!-- Imagen de ejemplo si no hay foto disponible -->
            <IonImg v-else src="https://via.placeholder.com/80x80?text=Producto" alt="Foto de ejemplo" class="product-image"/>
            <IonCardContent>
              <!-- Nombre del producto debajo de la imagen -->
              <IonText>
                <p class="product-name">{{ producto.nombre }}</p>
              </IonText>
              <!-- Precio debajo del nombre -->
              <IonText>
                <p><strong>Precio:</strong> €{{ producto.precio.toFixed(2) }}</p>
              </IonText>
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
    <!-- Mostrar mensaje si no hay productos -->
    <div v-if="productosFiltrados.length === 0">
      <p>No se encontraron productos en el rango seleccionado.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import { IonCard, IonCardContent, IonText, IonGrid, IonRow, IonCol, IonImg, IonRange, IonButton, IonIcon } from '@ionic/vue';
import { funnelOutline } from 'ionicons/icons';

// Definir la interfaz del producto
interface ProductoData {
  id: number;
  nombre: string;
  descripcion: string;
  fecha_alta: string | null;
  precio: number;
  color: string;
  foto_portada: string | null;
  idTalla: number;
  idMaterial: number;
  idLinPedido: number | null;
  idLinCarrito: number | null;
}

// Variables reactivas
const productosHotel = ref<ProductoData[]>([]);
const productosFiltrados = ref<ProductoData[]>([]);
const mostrarFiltro = ref(false);
const mostrarOrden = ref(false);
const precioRango = ref<{ lower: number; upper: number }>({ lower: 0, upper: 200 });
const ordenActual = ref<'asc' | 'desc' | null>(null); // Almacena el orden actual

// Función para obtener los productos
const fetchProductosHotel = async () => {
  try {
    const response = await axios.get<ProductoData[]>('http://localhost:8080/lewkin/api/productos');
    productosHotel.value = response.data;

    // Aplicar los filtros y ordenación después de cargar los productos
    aplicarFiltrosYOrdenacion(); 
  } catch (error) {
    console.error('Error al obtener los productos del hotel:', error);
  }
};

// Función para aplicar el filtro de precio
const filtrarPorPrecio = () => {
  productosFiltrados.value = productosHotel.value.filter(
    (producto) => producto.precio >= precioRango.value.lower && producto.precio <= precioRango.value.upper
  );
  const savedOrdenActual = localStorage.getItem('ordenActual');
  
  if (savedOrdenActual) {
    if (savedOrdenActual === 'null') {
      ordenActual.value = null; // Si el valor es 'null', se debe restablecer a 'ninguno'
    } else {
      ordenActual.value = savedOrdenActual as 'asc' | 'desc'; // Aplicar orden guardado
    }
    // Ejecutar la ordenación de acuerdo con el valor de ordenActual
    if (ordenActual.value) {
      ordenarPorPrecio(ordenActual.value);
    }
  }

};

// Función para ordenar los productos por precio
const ordenarPorPrecio = (orden: 'asc' | 'desc') => {
  ordenActual.value = orden; // Guardar el orden actual
  productosFiltrados.value.sort((a, b) => {
    return orden === 'asc' ? a.precio - b.precio : b.precio - a.precio;
  });
};

// Función para limpiar la ordenación (poner 'Ninguno')
const limpiarOrdenacion = () => {
  ordenActual.value = null; // Restablecer la ordenación a 'ninguno'
  productosFiltrados.value = [...productosHotel.value]; // Recargar los productos sin ordenar
  localStorage.setItem('ordenActual', 'null');
  filtrarPorPrecio();
};

// Función para aplicar los filtros y ordenación guardados
const aplicarFiltrosYOrdenacion = () => {
  // Recuperar el rango de precio y orden guardados en localStorage
  const savedPrecioRango = localStorage.getItem('precioRango');

  if (savedPrecioRango) {
    precioRango.value = JSON.parse(savedPrecioRango); // Aplicar rango de precio guardado
    filtrarPorPrecio();
  } else {
    productosFiltrados.value = [...productosHotel.value]; // Copiar todos los productos
  }
};

// Guardar el estado de los filtros y ordenación en localStorage
watch(precioRango, (newVal) => {
  localStorage.setItem('precioRango', JSON.stringify(newVal));
  filtrarPorPrecio();
});

watch(ordenActual, (newVal) => {
  if (newVal === null) {
    localStorage.setItem('ordenActual', 'null'); // Guardar 'null' cuando no hay orden
  } else {
    localStorage.setItem('ordenActual', newVal); // Guardar 'asc' o 'desc'
  }
});

// Ejecutar la función cuando el componente se monta
onMounted(() => {
  fetchProductosHotel();
});
</script>

<style scoped>
.filter-container {
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: left;
  padding-left: 10px;
}

.filter-button {
  display: inline-block;
  width: auto;
  min-width: unset;
  padding: 0 10px;
  font-size: 14px;
  text-transform: none;
  margin-bottom: 10px;
}

.range-container {
  margin: 10px 0;
  width: 25%;
  min-width: 200px;
  max-width: 400px;
}

.ordenar-container {
  position: relative;
  display: inline-block;
}

.order-options {
  position: absolute;
  top: 40px;
  left: 0;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  width: auto;
  padding: 5px;
  border-radius: 5px;
}

.order-option-button {
  display: inline-block;
  width: 100%;
  margin: 5px 0;
  padding: 5px 10px;
  background-color: white;
  border: 1px solid #ddd;
  font-size: 14px;
  text-transform: none;
  cursor: pointer;
  text-align: center;
  color: black;
}

.order-option-button:hover {
  background-color: #f1f1f1;
}

.order-option-button.active {
  background-color: #add8e6; /* Azul claro */
  color: white;
}

.product-card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.product-image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 350px;
  background-color: rgb(52, 50, 50);
  overflow: hidden;
}

.product-image-container img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.product-name {
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
}
</style>
