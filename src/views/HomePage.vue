<template>
  <!-- Carrusel utilizando Vue -->
  <div class="carousel">
    <div class="carousel-wrapper">
      <!-- Renderiza la imagen activa -->
      <img v-for="(image, index) in carouselImages" :key="index" :src="image.src" :alt="`Imagen ${index + 1}`"
        class="carousel-image" :class="{ active: index === activeIndex, hidden: index !== activeIndex }" />
      <p>L E W K I N</p>
      <button @click="router.push('/catalog')" class="carousel-button">Comprar</button>
    </div>
    <!-- Controles de navegación -->
    <div class="carousel-controls">
      <button @click="prevSlide">⬅️</button>
      <button @click="nextSlide">➡️</button>
    </div>
  </div>

  <!-- 2. Elementos destacados -->
  <ion-title class="section-title">Productos Destacados</ion-title>

  <!-- 3. Grid de elementos -->
  <ion-grid>
    <ion-row>
      <ion-col size="6" size-md="3" v-for="producto in destacados" :key="producto.id" class="product-card">
        <ion-card @click="router.push(`/productos/${producto.id}`)">
          <img :src="producto.foto_portada" alt="Imagen de producto" />
          <ion-card-content>
            <h3>{{ producto.nombre }}</h3>
            <p>{{ producto.precio }} €</p>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>

    <!-- 4. Fila de beneficios -->
    <ion-row>
      <ion-col size="6" size-md="3" v-for="(benefit, index) in benefits" :key="index">
        <ion-icon :name="benefit.icon" class="benefit-icon"></ion-icon>
        <h4>{{ benefit.title }}</h4>
        <p>{{ benefit.description }}</p>
      </ion-col>
    </ion-row>
  </ion-grid>

  <!-- 5. Tarjetas grandes -->
  <ion-grid>
    <ion-row>
      <ion-col size="6">
        <ion-card class="large-card">
          <ion-card-header>
            <ion-card-title>Tranquilidad</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-button @click="router.push('/catalog')" color="success">Comprar Ahora</ion-button>
          </ion-card-content>
        </ion-card>
      </ion-col>
      <ion-col size="6">
        <ion-card class="large-card">
          <ion-card-header>
            <ion-card-title>La mejor moda, aquí</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-button @click="router.push('/catalog')" color="success">Comprar Ahora</ion-button>
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useProductStore } from '@/stores/store'

const productStore = useProductStore();

const router = useRouter();

const destacados = computed(() => productStore.destacados)

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

onMounted(async () => {
  await productStore.fetchDestacados()
})

// Carrusel de imágenes
const carouselImages = [
  { src: 'src/assets/carouselHomePage/carousel1.jpg' },
  { src: 'src/assets/carouselHomePage/carousel2.jpg' },
  { src: 'src/assets/carouselHomePage/carousel3.jpg' },
];

const activeIndex = ref(0);

// Función para cambiar al siguiente slide
const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % carouselImages.length;
};

// Función para cambiar al slide anterior
const prevSlide = () => {
  activeIndex.value =
    (activeIndex.value - 1 + carouselImages.length) % carouselImages.length;
};

// Beneficios
const benefits: Benefit[] = [
  { icon: 'car-outline', title: 'Envío Gratis', description: 'En todas tus compras' },
  { icon: 'headset-outline', title: 'Soporte 24h', description: 'Siempre disponibles' },
  { icon: 'refresh-outline', title: '30 días de devolución', description: 'Sin preguntas' },
  { icon: 'lock-closed-outline', title: 'Pago 100% Seguro', description: 'Protección garantizada' },
];
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100vw;
  /* Ancho completo del viewport */
  margin: 0 auto;
  overflow: hidden;
}

.carousel-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 750px;
  /* Ajusta la altura según sea necesario */
  width: 100vw;
  /* Asegúrate de que ocupe todo el ancho del viewport */
}

.carousel-image {
  position: absolute;
  width: 100vw;
  /* Ocupa todo el ancho de la pantalla */
  height: 100%;
  /* Altura relativa al contenedor */

  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.carousel-image.active {
  opacity: 1;
}


.carousel-image.hidden {
  opacity: 0;
}

.carousel-button {
  position: absolute;
  bottom: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
}

.carousel-controls {
  position: absolute;
  /* Ubica los botones dentro de la imagen */
  top: 50%;
  /* Centra verticalmente */
  left: 0;
  /* Alinea el primer botón al borde izquierdo */
  right: 0;
  /* Alinea el segundo botón al borde derecho */
  display: flex;
  justify-content: space-between;
  /* Coloca los botones a los extremos */
  width: 100%;
  /* Asegura que los botones estén en los extremos del contenedor */
  transform: translateY(-50%);
  /* Ajusta para centrar correctamente */
  pointer-events: none;
  /* Permite que los eventos pasen a los botones */
}

.carousel-controls button {
  pointer-events: auto;
  /* Activa los eventos en los botones */
  color: white;
  /* Color del texto */
  background: transparent;
  /* Elimina cualquier fondo gris oscuro */
  border: none;
  /* Sin bordes */
  font-size: 2rem;
  /* Tamaño del ícono o texto */
  padding: 10px;
  /* Espaciado interno */
  cursor: pointer;
  /* Cambia el cursor a "mano" */
  z-index: 2;
  /* Asegura que los botones estén por encima de la imagen */
}

.carousel-controls button:first-of-type {
  position: absolute;
  left: 10px;
  /* Espaciado desde el borde izquierdo */
}

.carousel-controls button:last-of-type {
  position: absolute;
  right: 10px;
  /* Espaciado desde el borde derecho */
}


.section-title {
  text-align: center;
  margin: 40px 0 20px;
  font-weight: bold;
}

.product-card img {
  width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.benefit-icon {
  font-size: 3rem;
  margin-bottom: 10px;
}

.large-card {
  text-align: center;
}

.buy-now-button-container {
  text-align: center;
  margin: 20px 0;
}

.buy-now-button {
  width: auto;
  /* Ajusta automáticamente el tamaño según el contenido */
  padding: 0.5rem 1.5rem;
  /* Define un tamaño más compacto */
  font-size: 1rem;
  /* Ajusta el tamaño del texto */
  margin: 20px auto;
  /* Centra el botón horizontalmente */
  display: block;
  /* Asegura que el botón quede centrado */
  width: 15rem;
}
</style>