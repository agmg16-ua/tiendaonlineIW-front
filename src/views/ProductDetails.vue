<template>
  <ion-content>
    <div v-if="producto" class="producto-detalle">
      <ion-grid>
        <ion-row>
          <!-- Imagen del producto -->
          <ion-col size="4" size-md="3" class="imagen-col">
            <img class="imagen-producto" :src="producto.foto_portada" alt="Foto del producto" />
          </ion-col>
          <!-- Detalles del producto (nombre, precio, descripción) -->
          <ion-col size="4" size-md="6" class="datos-col">
            <h1 class="titulo">{{ producto.nombre }}</h1>
            <p class="precio">€{{ producto.precio.toFixed(2) }}</p>
            <p class="descripcion">{{ producto.descripcion }}</p>
            <!-- Botón Añadir al Carrito -->
            <ion-button class="boton-carrito" @click="añadirAlCarrito">
              Añadir al Carrito
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
    <div v-else>
      <ion-spinner name="crescent"></ion-spinner>
      <p>Cargando...</p>
    </div>
  </ion-content>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import { IonContent, IonGrid, IonRow, IonCol, IonSpinner, IonButton } from '@ionic/vue';

// Definir la interfaz para Producto
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  color: string;
  foto_portada: string;
}

const producto = ref<Producto | null>(null); // Producto puede ser null inicialmente
const route = useRoute();
const productId = route.params.id;

// Función para obtener el producto desde la API
const obtenerProducto = async () => {
  try {
    const response = await axios.get(`http://localhost:8080/lewkin/api/productos/${productId}`);
    producto.value = response.data; // Aquí se asigna el objeto producto
  } catch (error) {
    console.error('Error al obtener el producto:', error);
  }
};

// Función para añadir el producto al carrito
const añadirAlCarrito = async () => {
  
};

onMounted(() => {
  obtenerProducto();
});
</script>

<style scoped>
/* Clase para la columna de la imagen */
.imagen-col {
  padding-left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
  margin-right: 10px;
  margin-left: 50px;
  margin-top: 50px;
}

/* Clase para la imagen del producto */
.imagen-producto {
  width: 100%;
  height: auto;
  object-fit: contain;
  margin: 0;
  border-radius: 8px;
}

/* Clase para los detalles del producto */
.datos-col {
  margin-top: 50px;
  margin-left: 50px;
}

/* Título del producto */
.titulo {
  font-size: 3rem;
  font-weight: bold;
  margin: 0;
  color: #b0a7a7;
  margin-bottom: 20px;
}

/* Precio del producto */
.precio {
  font-size: 1.4rem;
  font-weight: 400;
  color: #468ac6;
  margin: 8px 0;
  margin-bottom: 20px;
}

/* Descripción del producto */
.descripcion {
  font-size: 1rem;
  color: #b0a7a7;
  margin: 0;
}

/* Estilo del botón */
.boton-carrito {
  margin-top: 20px;
  max-width: 200px; /* Limitar el ancho */
  width: 100%; /* Que el ancho sea flexible dentro del límite */
}

/* Estilo responsivo: Pantallas pequeñas (móviles) */
@media (max-width: 600px) {
  .imagen-col {
    width: 100% !important;
    margin-left: 0;
    margin-top: 20px;
  }

  .datos-col {
    width: 100% !important;
    margin-top: 20px;
    margin-left: 0;
  }

  .titulo {
    font-size: 1rem;
  }

  .precio {
    font-size: 0.9rem;
  }

  .descripcion {
    font-size: 0.6rem;
  }

  .boton-carrito {
    max-width: 100%; /* Asegurarse de que se ajuste bien en móviles */
  }
}
</style>
