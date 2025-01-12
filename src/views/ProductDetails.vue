<template>
  <ion-content>
    <div v-if="producto" class="producto-detalle">
      <ion-grid>
        <ion-row>
          <!-- Carousel del producto -->
          <ion-col size="4" size-md="3" class="imagen-col">
            <!-- Usar el componente ImageCarousel -->
            <ImageCarousel :imagenes="[producto.foto_portada, ...producto.fotos]" />
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
import { useRoute } from 'vue-router';
import { IonContent, IonGrid, IonRow, IonCol, IonSpinner, IonButton } from '@ionic/vue';
import { useProductStore } from '@/stores/productStore';
import ImageCarousel from '@/components/ImageCarousel.vue'; // Importar el componente

const productStore = useProductStore();

// Definir la interfaz para Producto
interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  color: string;
  foto_portada: string;
  fotos: string[];
  coleccionesDatas: { id: number; nombre: string }[];
  tallaData: { id: number; talla: string; cantidad: number };
  materialData: { id: number; material: string };
  categoriaData: { id: number; categoria: string };
  subcategoriaData: { id: number; subcategoria: string };
  comentariosData: { id: number; texto: string; estrellas: number; usuarioId: number; productoId: number }[];
}

const producto = ref<Producto | null>(null); // Producto puede ser null inicialmente
const route = useRoute();
const productId = route.params.id;

// Índice para controlar la imagen activa en el carrusel
const indiceImagen = ref(0);

// Función para obtener el producto desde la API
const obtenerProducto = async () => {
  try {
    const id = parseInt(productId as string, 10); // Convertir el ID a número
    if (isNaN(id)) {
      throw new Error('El ID del producto no es un número válido.');
    }

    // Llamar al método del store con el ID
    await productStore.fetchSingleProduct(id);
    producto.value = productStore.singleProduct;
  } catch (error) {
    console.error('Error al obtener el producto:', error);
  }
};

// Función para añadir el producto al carrito
const añadirAlCarrito = async () => {
  console.log('Añadiendo al carrito:', producto.value);
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
