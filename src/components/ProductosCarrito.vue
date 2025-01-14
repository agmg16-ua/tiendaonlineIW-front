<template>
  <ion-row class="header-row">
      <ion-col size="3" class="producto-header">Producto</ion-col>
      <ion-col size="2" class="precio-header">Precio</ion-col>
      <ion-col size="2" class="cantidad-header">Cantidad</ion-col>
      <ion-col size="2" class="total-header">Total</ion-col>
      <ion-col size="1" class="eliminar-header"></ion-col>
  </ion-row>

  <div class="linea-horizontal"></div>

  <ion-row v-for="(producto, index) in props.carrito" :key="producto.id" class="producto-row">
      <!-- Producto -->
      <ion-col size="3" class="producto-col">
      <div class="producto-info">
          <img :src="producto.producto.foto_portada" alt="Imagen del producto" class="imagen-carrito" v-if="isAuthenticated"/>
          <img :src="producto.foto_portada" alt="Imagen del producto" class="imagen-carrito" v-else/>
          <p class="nombre-producto" v-if="isAuthenticated">
            {{ producto.producto.nombre }}
          </p>
          <p class="nombre-producto" v-else>
            {{ producto.nombre }}
          </p>
      </div>
      </ion-col>

      <!-- Precio -->
      <ion-col size="2" class="precio-col">
      €{{ producto.precio.toFixed(2) }}
      </ion-col>

      <!-- Cantidad -->
      <ion-col size="2" class="cantidad-col">
      <div class="cantidad-controls">
          <button @click="decrementarCantidad(producto, Number(index), Number(producto.producto.id))" class="cantidad-btn" v-if="isAuthenticated">-</button>
          <button @click="decrementarCantidad(producto, Number(index), Number(producto.id))" class="cantidad-btn" v-else>-</button>
          <span class="cantidad">{{ producto.cantidad }}</span>
          <button @click="incrementarCantidad(producto, producto.producto.id)" class="cantidad-btn" v-if="isAuthenticated">+</button>
          <button @click="incrementarCantidad(producto, producto.id)" class="cantidad-btn" v-else>+</button>
      </div>
      </ion-col>

      <!-- Total -->
      <ion-col size="2" class="total-col">
      €{{ (producto.precio * producto.cantidad).toFixed(2) }}
      </ion-col>

      <!-- Botón de eliminación -->
      <ion-col size="1" class="eliminar-col">
          <button @click="eliminarProducto(Number(index), Number(producto.producto.id))" class="eliminar-btn" v-if="isAuthenticated">✖</button>
          <button @click="eliminarProducto(Number(index), Number(producto.id))" class="eliminar-btn" v-else>✖</button>
      </ion-col>
  </ion-row>
</template>


<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/vue'; // Importando los componentes de Ionic
import { defineProps } from 'vue';
import { useCarritoStore } from '@/stores/carritoStore';

const carritoStore = useCarritoStore(); 
const emit = defineEmits(['actualizarCarrito']);
const isAuthenticated = computed(() => localStorage.getItem('isAuthenticated') === 'true');

const carrito = ref<any[]>([]); // Donde se almacenarán las líneas del carrito

const props = defineProps({
  carrito: {
    type: Object,
    required: true,
  },
});

const guardarCarrito = () => {
  localStorage.setItem('carrito', JSON.stringify(props.carrito));
};

const obtenerIdLineaCarrito = async (idProducto: Number) => {

  try {
    const response = await carritoStore.fetchCarrito();
    if (response.status === 200) {
      carrito.value = carritoStore.carrito.linCarritos; // Asignar las líneas del carrito
    }
  } catch (error) {
    console.error('Error al obtener el carrito:', error);
  }

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

    return idLineaCarrito;

}

// Función para incrementar la cantidad
const incrementarCantidad = async (producto: any, idProducto: Number) => {
  
  if(localStorage.getItem('isAuthenticated') === 'true'){

    const idLineaCarrito = await obtenerIdLineaCarrito(idProducto);

    try {
      const response = await carritoStore.incrementarLinCarrito(Number(idLineaCarrito));
      if (response.status === 200) {
          console.log('Cantidad incrementada exitosamente.');
          emit('actualizarCarrito');
      } else {
          console.error('Error al incrementar la cantidad:', response.message);
      }
    } catch (error) {
        console.error('Error al ejecutar incrementarLinCarrito:', error);
    }

  }else{
    if (producto.cantidad < 99) { // Limitar a 99 unidades por producto
      producto.cantidad += 1;
    }
    guardarCarrito();
  }
};

// Función para decrementar la cantidad
const decrementarCantidad = async (producto: any, index: Number, idProducto: Number) => {
  
  if(localStorage.getItem('isAuthenticated') === 'true'){

    if (producto.cantidad > 1){

      const idLineaCarrito = await obtenerIdLineaCarrito(idProducto);

      try {
          const response = await carritoStore.decrementarLinCarrito(idLineaCarrito);
          if (response.status === 200) {
              console.log('Cantidad decrementada exitosamente.');
              emit('actualizarCarrito');
          } else {
              console.error('Error al decrementar la cantidad:', response.message);
          }
      } catch (error) {
          console.error('Error al ejecutar decrementarLinCarrito:', error);
      }

    }else{
      await eliminarProducto(Number(index), idProducto);
    }

    

  }else{
    if (producto.cantidad > 1) { // No permitir menos de 1
      producto.cantidad -= 1;
    }else{
       await eliminarProducto(Number(index), idProducto);
    }
    guardarCarrito();
  }
  
};

// Función para eliminar un producto
const eliminarProducto = async (index: number, idProducto: Number) => {

  if(localStorage.getItem('isAuthenticated') === 'true'){

    const idLineaCarrito = await obtenerIdLineaCarrito(idProducto);

    try {
      const response = await carritoStore.deleteLinCarrito(idLineaCarrito);
      if (response.status === 200) {
          console.log('Linea eliminado correctamente.');
          emit('actualizarCarrito');
      } else {
          console.error('Error al eliminar linea:', response.message);
      }
    } catch (error) {
        console.error('Error al ejecutar deleteLinCarrito:', error);
    }

  }else{
    props.carrito.splice(index, 1); // Eliminar el producto del array
    guardarCarrito(); // Actualizar el localStorage
  }
  
};
</script>

<style scoped>
/* Cabecera */
.header-row {
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.linea-horizontal {
  border-top: 1px solid #dcdcdc;
  margin-bottom: 20px;
}

.producto-header, .precio-header, .cantidad-header, .total-header {
  text-align: center;
  font-size: 1.2rem;
}

.producto-col, .precio-col, .cantidad-col, .total-col, .eliminar-col {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
}

.producto-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.producto-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.imagen-carrito {
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
  margin-bottom: 10px; /* Espacio entre la imagen y el nombre */
}

.producto-row {
  margin-top: 15px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 10px;
}

.nombre-producto {
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
}

.precio-col, .cantidad-col, .total-col {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cantidad-controls {
  display: flex;
  align-items: center;
  justify-content: center;
}

.cantidad-btn {
  font-size: 1.2rem;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  border: 1px solid #ccc;
  background-color: #242323;
  border-radius: 5px;
  transition: background-color 0.2s;
}

.cantidad-btn:hover {
  background-color: black;
}

.cantidad {
  font-size: 1.2rem;
  width: 30px;
  text-align: center;
}

.eliminar-col {
  display: flex;
  align-items: center;
  justify-content: center;
}

.eliminar-btn {
  font-size: 1.2rem;
  color: #ff0000;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.2s ease;
}

.eliminar-btn:hover {
  color: #cc0000;
}

/* Responsividad */
@media (max-width: 768px) {
  /* Cambiar tamaño de la fuente en dispositivos pequeños */
  .producto-header, .precio-header, .cantidad-header, .total-header {
    font-size: 1rem;
  }

  /* Ajustar la visualización de las columnas */
  .producto-col, .precio-col, .cantidad-col, .total-col, .eliminar-col {
    flex: 1 1 100%;
    text-align: left;
    padding: 8px;
  }

  .producto-info {
    flex-direction: row;
    justify-content: flex-start;
  }

  .imagen-carrito {
    max-width: 80px;
    max-height: 80px;
  }

  .cantidad-controls {
    flex-direction: row;
    justify-content: flex-start;
  }

  .cantidad-btn {
    font-size: 1rem;
  }

  .nombre-producto {
    font-size: 1rem;
    margin-bottom: 10px;
  }
}

/* En pantallas más pequeñas */
@media (max-width: 480px) {
  .producto-header, .precio-header, .cantidad-header, .total-header {
    text-align: center;
    font-size: 0.8rem;
    margin-right: 8px;
  }

  .producto-col, .precio-col, .cantidad-col, .total-col, .eliminar-col {
    flex: 1 1 100%;
    padding: 5px;
    margin-right: 10px;
    font-size: 0.8rem;
  }

  .producto-info {
    flex-direction: column;
    align-items: center;
  }

  .cantidad-btn {
    font-size: 0.8rem;
    padding: 4px 8px;
    margin: 0 1px; /* Agregar un margen entre los botones de cantidad */
  }

  .cantidad {
    font-size: 0.8rem;
  }

  .imagen-carrito {
    max-width: 60px;
    max-height: 60px;
    margin-bottom: 10px;
  }

  /* Ajustar la separación entre los botones de cantidad y el precio / total */
  .cantidad-controls {
    margin-bottom: 10px; /* Añadir espacio debajo de los controles de cantidad */
  }

  .precio-col, .total-col {
    padding-right: 10px; /* Añadir algo de espacio a la derecha para evitar el solapamiento */
  }
}

</style>
