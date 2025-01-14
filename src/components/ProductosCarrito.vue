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
}

/* Línea horizontal encima del primer producto */
.linea-horizontal {
  border-top: 1px solid #dcdcdc; /* Línea de separación clara */
  margin-bottom: 20px; /* Espacio entre la línea y el primer producto */
}

/* Estilos para las celdas de la tabla */
.producto-header, .precio-header, .cantidad-header, .total-header {
  text-align: center;
  font-size: 1.2rem;
}

.producto-col {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.producto-info {
  display: flex;
  align-items: center;
  margin-left: 3rem;
}

.imagen-carrito {
  max-width: 100px;
  max-height: 100px;
  object-fit: cover;
  margin-right: 10px; /* Espacio entre la imagen y el nombre */
}

.producto-row {
  margin-top: 15px;
  border-bottom: 1px solid #e0e0e0; /* Línea horizontal más clara entre productos */
  padding-bottom: 10px; /* Espacio entre producto y línea */
}

.nombre-producto {
  font-size: 1.1rem;
  font-weight: bold;
}

.precio-col, .cantidad-col, .total-col {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Estilo para los controles de cantidad */
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

/* Botón de eliminación */
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
</style>