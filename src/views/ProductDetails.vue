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
            <!--<h2 class="talla">Talla: {{ producto.tallaData.talla }} </h2>-->
            <p class="precio">€{{ producto.precio.toFixed(2) }}</p>
            <p class="descripcion">{{ producto.descripcion }}</p>
            <!-- Componente de selección de talla -->
            <SeleccionTallas :tallasDisponibles="obtenerTallasDisponibles" @tallaSeleccionada="manejarTallaSeleccionada" />
            <!-- Botón Añadir al Carrito -->
            <ion-button class="boton-carrito" @click="añadirAlCarrito">
              Añadir al Carrito
            </ion-button>
            <ComentarioProducto :productoId="producto.id" />
          </ion-col>
          
        </ion-row>
        <ListadoComentarios :productoId="producto.id" />
      </ion-grid>
    </div>
    <div v-else>
      <ion-spinner name="crescent"></ion-spinner>
      <p>Cargando...</p>
    </div>
  </ion-content>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { IonContent, IonGrid, IonRow, IonCol, IonSpinner, IonButton } from '@ionic/vue';
import { useProductStore } from '@/stores/productStore';
import ImageCarousel from '@/components/ImageCarousel.vue';
import ComentarioProducto from '@/components/ComentarioProducto.vue';
import ListadoComentarios from '@/components/ListadoComentarios.vue';
import { useCarritoStore } from '@/stores/carritoStore';
import SeleccionTallas from '@/components/SeleccionTallas.vue';

const carritoStore = useCarritoStore(); 
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
  productosTallaData: { 
    id: number; 
    productoId: number; 
    talla: { 
      id: number; 
      talla: string; 
    }; 
    stock: number; 
  }[];
  materialData: { id: number; material: string };
  categoriaData: { id: number; categoria: string };
  subcategoriaData: { id: number; subcategoria: string };
  comentariosData: { id: number; texto: string; estrellas: number; usuarioId: number; productoId: number }[];
}

const producto = ref<Producto | null>(null); // Producto puede ser null inicialmente
const route = useRoute();
const productId = route.params.id;
const tallaSeleccionada = ref<string | null>(null);

// Obtener las tallas disponibles del producto (con stock > 0)
const obtenerTallasDisponibles = computed(() => {
  if (producto.value) {
    return producto.value.productosTallaData
      .filter(tallaData => tallaData.stock > 0) // Filtrar solo las tallas con stock > 0
      .map(tallaData => tallaData.talla); // Mapear para obtener las tallas
  }
  return [];
});


// Manejar la talla seleccionada
const manejarTallaSeleccionada = (talla: string) => {
  tallaSeleccionada.value = talla;
};

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

const añadirAlCarrito = async () => {
  if (producto.value) {
    // Obtener el carrito de localStorage o inicializarlo como vacío
    let carrito = JSON.parse(localStorage.getItem('carrito') || '[]');

    // Verificar si el producto ya está en el carrito
    const productoExistente = carrito.find((item: Producto & { cantidad: number; talla: string }) => 
      item.id === parseInt(productId as string, 10) && 
      item.talla === tallaSeleccionada.value
    );

    if (productoExistente) {
      if (tallaSeleccionada.value) {
        // Si el producto ya está en el carrito, incrementamos la cantidad
        productoExistente.cantidad += 1;
        console.log(`Producto actualizado en el carrito: ${productoExistente.nombre}, cantidad: ${productoExistente.cantidad}`);
        incrementarLineaCarrito();
        alert("Producto añadido al carrito");
      }else{
        alert("Por favor, selecciona una talla antes de añadir el producto al carrito.");
      }
     
    } else {

      if (tallaSeleccionada.value){
        // Si no está en el carrito, añadirlo con cantidad 1
        const productoConCantidad = { ...producto.value, cantidad: 1, talla: tallaSeleccionada.value }; // Asignamos cantidad = 1
        carrito.push(productoConCantidad);
        console.log(`Producto añadido al carrito: ${productoConCantidad.nombre}, cantidad: ${productoConCantidad.cantidad}`);
        añadirAlCarritoUsuarioAutenticado();
        alert("Producto añadido al carrito");
      }else{
        alert("Por favor, selecciona una talla antes de añadir el producto al carrito.");
      }
      
    }

    if (tallaSeleccionada.value){
      // Guardar de nuevo el carrito actualizado en localStorage
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }
    
  }
  console.log(localStorage.getItem('carrito'));
};

const carrito = ref<any[]>([]); // Donde se almacenarán las líneas del carrito

const incrementarLineaCarrito = async () => {

  if (producto.value) {

    // Si el usuario está autenticado, llamar al API para incrementar
    if (localStorage.getItem('isAuthenticated') === 'true') {

      try {
        const response = await carritoStore.fetchCarrito();
        if (response.status === 200) {
          carrito.value = carritoStore.carrito.linCarritos; // Asignar las líneas del carrito
        }
      } catch (error) {
        console.error('Error al obtener el carrito:', error);
      }

      const idProducto = producto.value.id; // ID del producto actual
      let idLineaCarrito = null;

      // Buscar la línea del carrito correspondiente al producto
      for (const linea of carrito.value) {
        if (linea.producto.id === idProducto) { // Comprobar coincidencia de IDs
          idLineaCarrito = linea.id; // ID de la línea de carrito
          break;
        }
      }

      if (!idLineaCarrito) {
        console.error('No se encontró una línea de carrito para este producto.');
        return;
      }

      try {
        const response = await carritoStore.incrementarLinCarrito(idLineaCarrito);
        if (response.status === 200) {
          console.log('Cantidad incrementada exitosamente.');
        } else {
          console.error('Error al incrementar la cantidad:', response.message);
        }
      } catch (error) {
        console.error('Error al ejecutar incrementarLinCarrito:', error);
      }
    }
  }
};


const añadirAlCarritoUsuarioAutenticado = async () => {
  if (producto.value) {
    // Verificar si se ha seleccionado una talla
    if (!tallaSeleccionada.value) {
      alert("Por favor, selecciona una talla antes de añadir el producto al carrito.");
      return; // Detener la ejecución si no hay talla seleccionada
    }

    // Si el usuario está autenticado, sincronizar con el backend
    if (localStorage.getItem('isAuthenticated') === 'true') {
      try {
        // Llamar al método del store para sincronizar con el backend
        const response = await carritoStore.addProductCarrito(
          producto.value.id,
          1, // Cantidad inicial
          tallaSeleccionada.value, // Talla seleccionada
          producto.value.precio // Precio del producto
        );

        if (response.status === 200) {
          console.log("Producto sincronizado con el backend");
        } else {
          console.error("Error al sincronizar con el backend:", response.message);
          alert(`Error: ${response.message}`);
        }
      } catch (error) {
        console.error("Error al realizar la sincronización con el backend:", error);
        alert("Hubo un error al sincronizar con el servidor.");
      }
    }
  }
};


onMounted(() => {
  console.log(localStorage.getItem('carrito'))
  obtenerProducto();
  //localStorage.removeItem('carrito');

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

.talla {
  font-size: 1.5rem;
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
