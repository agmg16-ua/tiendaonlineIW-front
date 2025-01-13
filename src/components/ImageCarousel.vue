<template>
    <div class="carousel">
      <!-- Contenedor de las imágenes -->
      <div class="carousel-imagenes" :style="{ transform: `translateX(-${indiceImagen * 100}%)` }">
        <!-- Renderizar todas las imágenes -->
        <div v-for="(foto, index) in imagenes" :key="index" class="carousel-item">
          <img :src="foto" alt="Imagen del producto" class="carousel-img" />
        </div>
      </div>
      <!-- Botones de navegación -->
      <button class="carousel-boton izquierdo" @click="anteriorImagen">
        &#8249;
      </button>
      <button class="carousel-boton derecho" @click="siguienteImagen">
        &#8250;
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // Props para recibir las imágenes desde el componente padre
  const props = defineProps({
    imagenes: {
      type: Array as () => string[],
      required: true,
    },
  });
  
  // Índice para controlar la imagen activa en el carrusel
  const indiceImagen = ref(0);
  
  // Función para ir a la siguiente imagen
  const siguienteImagen = () => {
    indiceImagen.value = (indiceImagen.value + 1) % props.imagenes.length; // Navegación circular
  };
  
  // Función para ir a la imagen anterior
  const anteriorImagen = () => {
    indiceImagen.value = (indiceImagen.value - 1 + props.imagenes.length) % props.imagenes.length; // Navegación circular
  };
  </script>
  
  <style scoped>
  /* Contenedor del carousel */
  .carousel {
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
    border-radius: 8px;
  }
  
  /* Contenedor de las imágenes (desplazable) */
  .carousel-imagenes {
    display: flex;
    transition: transform 0.4s ease-in-out;
  }
  
  /* Cada imagen en el carousel */
  .carousel-item {
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .carousel-img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  
  /* Botones del carousel */
  .carousel-boton {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.8);
    border: none;
    color: white;
    font-size: 2rem;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    z-index: 1;
  }
  
  .carousel-boton.izquierdo {
    left: 10px;
  }
  
  .carousel-boton.derecho {
    right: 10px;
  }
  
  .carousel-boton:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  /* Estilo responsivo: Pantallas pequeñas (móviles) */
@media (max-width: 600px) {
  /* Botones del carousel */
  .carousel-boton {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    font-size: 1rem !important;
    padding: 10px;
    cursor: pointer;
    border-radius: 50%;
    z-index: 1;
  }
}
  </style>
  