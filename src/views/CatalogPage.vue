<template>
 
  <!-- Contenedor de filtros -->
  <IonGrid class="filter-grid">
    <IonRow class="filter-row">
      <!-- Filtro de precio -->
      <IonCol size="auto" class="filter-col">
        <div>
          <IonButton @click="mostrarFiltro = !mostrarFiltro" size="small" class="filter-button">
            <IonIcon :icon="funnelOutline" slot="start" />
            Precio
          </IonButton>
          <div v-if="mostrarFiltro" class="range-container">
            <IonRange dualKnobs :min="0" :max="200" :step="1" color="primary" v-model="precioRango">
              <div slot="start">€{{ precioRango.lower }}</div>
              <div slot="end">€{{ precioRango.upper }}</div>
            </IonRange>
          </div>
        </div>
      </IonCol>
      <!-- Filtro de material -->
      <IonCol size="auto" class="filter-col">
        <div>
          <IonButton @click="mostrarMaterialFiltro = !mostrarMaterialFiltro" size="small" class="filter-button">
            <IonIcon :icon="funnelOutline" slot="start" />
            Material
          </IonButton>
          <div v-if="mostrarMaterialFiltro" class="filter-options">
            <IonButton v-for="material in materialesDisponibles" :key="material.id" size="small" @click="filtrarPorMaterial(material.id)" :class="['filter-option-button', { 'active': materialSeleccionado === material.id }]" color="transparent">
              {{ material.nombre }}
            </IonButton>
            <IonButton size="small" @click="limpiarFiltroMaterial" :class="['filter-option-button', { 'active': materialSeleccionado === null }]" color="transparent">
              Ninguno
            </IonButton>
          </div>
        </div>
      </IonCol>

      <!-- Ordenar por precio -->
      <IonCol size="auto" class="filter-col">
        <div>
          <IonButton @click="mostrarOrden = !mostrarOrden" size="small" class="filter-button">
            Ordenar por Precio
          </IonButton>
          <div v-if="mostrarOrden" class="filter-options">
            <IonButton size="small" @click="ordenarPorPrecio('asc')" :class="['filter-option-button', { 'active': ordenActual === 'asc' }]" color="transparent">
              Ascendente
            </IonButton>
            <IonButton size="small" @click="ordenarPorPrecio('desc')" :class="['filter-option-button', { 'active': ordenActual === 'desc' }]" color="transparent">
              Descendente
            </IonButton>
            <IonButton size="small" @click="limpiarOrdenacion" :class="['filter-option-button', { 'active': ordenActual === null }]" color="transparent">
              Ninguno
            </IonButton>
          </div>
        </div>
      </IonCol>
    </IonRow>
  </IonGrid>
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
const ordenActual = ref<'asc' | 'desc' | null>(null);
const mostrarMaterialFiltro = ref(false);
const materialesDisponibles = ref([
  { id: 1, nombre: 'Algodón' },
  { id: 2, nombre: 'Lana' },
  { id: 3, nombre: 'Seda' },
  { id: 4, nombre: 'Poliéster' },
]);
const materialSeleccionado = ref<number | null>(null);

// Función para obtener los productos
const fetchProductos = async () => {
  try {
    const response = await axios.get<ProductoData[]>('http://localhost:8080/lewkin/api/productos');
    productosHotel.value = response.data;
    aplicarFiltros(); // Aplicar los filtros después de cargar los productos
  } catch (error) {
    console.error('Error al obtener los productos del hotel:', error);
  }
};

// Función para aplicar todos los filtros acumulativamente
const aplicarFiltros = () => {
  let productos = [...productosHotel.value];

  // Aplicar filtro de material si está seleccionado
  if (materialSeleccionado.value !== null) {
    productos = productos.filter(producto => producto.idMaterial === materialSeleccionado.value);
  }

  // Aplicar filtro de precio
  productos = productos.filter(producto => 
    producto.precio >= precioRango.value.lower && producto.precio <= precioRango.value.upper
  );

  // Aplicar ordenación si está seleccionada
  if (ordenActual.value) {
    productos.sort((a, b) => ordenActual.value === 'asc' ? a.precio - b.precio : b.precio - a.precio);
  }

  productosFiltrados.value = productos;
};

// Función para filtrar por material
const filtrarPorMaterial = (idMaterial: number) => {
  materialSeleccionado.value = idMaterial;
  localStorage.setItem('materialSeleccionado', idMaterial.toString()); // Guardar en localStorage
  aplicarFiltros(); // Aplicar filtros acumulativos
};

// Función para limpiar el filtro de material
const limpiarFiltroMaterial = () => {
  materialSeleccionado.value = null;
  localStorage.setItem('materialSeleccionado', 'null'); // Guardar en localStorage
  aplicarFiltros(); // Aplicar filtros acumulativos
};

// Función para ordenar los productos por precio
const ordenarPorPrecio = (orden: 'asc' | 'desc') => {
  ordenActual.value = orden;
  localStorage.setItem('ordenActual', orden); // Guardar en localStorage
  aplicarFiltros(); // Aplicar filtros acumulativos
};

// Función para limpiar la ordenación
const limpiarOrdenacion = () => {
  ordenActual.value = null;
  localStorage.setItem('ordenActual', 'null'); // Guardar en localStorage
  aplicarFiltros(); // Aplicar filtros acumulativos
};

// Función para inicializar filtros desde localStorage
const aplicarFiltrosDesdeLocalStorage = () => {
  const savedPrecioRango = localStorage.getItem('precioRango');
  if (savedPrecioRango) {
    precioRango.value = JSON.parse(savedPrecioRango);
  }

  const savedOrdenActual = localStorage.getItem('ordenActual');
  if (savedOrdenActual) {
    ordenActual.value = savedOrdenActual === 'null' ? null : savedOrdenActual as 'asc' | 'desc';
  }

  const savedMaterialSeleccionado = localStorage.getItem('materialSeleccionado');
  if (savedMaterialSeleccionado) {
    materialSeleccionado.value = savedMaterialSeleccionado === 'null' ? null : parseInt(savedMaterialSeleccionado, 10);
  }

  aplicarFiltros(); // Aplicar todos los filtros acumulativamente
};

// Guardar el rango de precios en localStorage y aplicar filtros
watch(precioRango, () => {
  localStorage.setItem('precioRango', JSON.stringify(precioRango.value));
  aplicarFiltros();
});

// Ejecutar la función al montar el componente
onMounted(() => {
  fetchProductos();
  aplicarFiltrosDesdeLocalStorage();
});
</script>


<style scoped>
.filter-grid {
  margin-bottom: 20px;
  margin-left: 10px;
}

.filter-row {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
}

.filter-col {
  flex: 0 0 auto;
}

.filter-button {
  white-space: nowrap;
}

.range-container {
  margin: 10px 0;
  width: 25%;
  min-width: 200px;
  max-width: 400px;
}

.filter-options {
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

.filter-option-button {
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

.filter-option-button:hover {
  background-color: #f1f1f1;
}

.filter-option-button.active {
  background-color: #add8e6; /* Azul claro */
  color: white;
}

.product-card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.product-card:hover{
  cursor: pointer;
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
