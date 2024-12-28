<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonText, IonGrid, IonRow, IonCol, IonImg } from '@ionic/vue';

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

// Variable reactiva para almacenar los productos
const productosHotel = ref<ProductoData[]>([]);

// Función para obtener los productos
const fetchProductosHotel = async () => {
  try {
    const response = await axios.get<ProductoData[]>('http://localhost:8080/lewkin/api/productos');
    productosHotel.value = response.data;
    //productosHotel.value = productosHotel.value.filter(producto => producto.precio < 80);
  } catch (error) {
    console.error('Error al obtener los productos del hotel:', error);
  }
};

// Ejecutar la función cuando el componente se monta
onMounted(() => {
  fetchProductosHotel();
});
</script>

<template>
  <div>


    <!-- Verifica si hay productos -->
    <IonGrid>
      <IonRow>
        
        <IonCol size="12" size-md="4" size-lg="2" v-for="producto in productosHotel" :key="producto.id">
          <IonCard class="product-card">
            <!-- Imagen del producto en la parte superior -->
            <IonImg 
              v-if="producto.foto_portada" 
              :src="producto.foto_portada" 
              alt="Foto del producto" 
              class="product-image" 
            />
            <!-- Imagen de ejemplo si no hay foto disponible -->
            <IonImg 
              v-else 
              src="https://via.placeholder.com/80x80?text=Producto"
              alt="Foto de ejemplo" 
              class="product-image" 
            />

            <IonCardContent>
              <!-- Nombre del producto debajo de la imagen -->
              <IonText>
                <p>{{ producto.nombre }}</p>
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
    <div v-if="productosHotel.length === 0">
      <p>No se encontraron productos para el hotel.</p>
    </div>
  </div>
</template>


<style scoped>
.product-card {
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  display: flex;
  flex-direction: column;
  align-items: stretch; 
  padding: 10px;
}

.product-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 10px;
}

.product-card ion-card-content {
  text-align: left; 
  width: 100%;
  padding: 0; 
}

.product-card ion-card-title {
  font-size: 1rem; 
  font-weight: bold;
  margin-bottom: 5px; 
}

.product-card p {
  margin: 0; 
}
</style>

