<template>
    <ion-content>
      <!-- 1. Carrusel -->
      <ion-slides>
        <ion-slide v-for="(image, index) in carouselImages" :key="index">
          <div class="carousel-container">
            <img :src="image.src" :alt="`Imagen ${index + 1}`" class="carousel-image" />
            <ion-button class="carousel-button" color="primary">Comprar</ion-button>
          </div>
        </ion-slide>
      </ion-slides>
  
      <!-- 2. Elementos destacados -->
      <ion-title class="section-title">Elementos Destacados</ion-title>
  
      <!-- 3. Grid de elementos -->
      <ion-grid>
        <ion-row>
          <ion-col
            size="6"
            size-md="3"
            v-for="product in products"
            :key="product.id"
            class="product-card"
          >
            <ion-card>
              <img :src="product.image" alt="Imagen de {{ product.name }}" />
              <ion-card-content>
                <h3>{{ product.name }}</h3>
                <p>{{ product.price }} €</p>
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
                <ion-button color="success">Comprar Ahora</ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
          <ion-col size="6">
            <ion-card class="large-card">
              <ion-card-header>
                <ion-card-title>Compre 2, Llévese 1 Gratis</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <ion-button color="success">Comprar Ahora</ion-button>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
  
      <!-- 6. Cartel "Los más vendidos" -->
      <ion-title class="section-title">Los Más Vendidos</ion-title>
  
      <!-- 7. Fila con productos más vendidos -->
      <ion-grid>
        <ion-row>
          <ion-col
            size="6"
            size-md="3"
            v-for="product in bestSellers"
            :key="product.id"
            class="product-card"
          >
            <ion-card>
              <img :src="product.image" alt="Imagen de {{ product.name }}" />
              <ion-card-content>
                <h3>{{ product.name }}</h3>
                <p>{{ product.price }} €</p>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
  
      <!-- 8. Botón "Comprar YA" -->
      <div class="buy-now-button-container">
        <ion-button color="danger" class="buy-now-button">Comprar YA</ion-button>
      </div>
    </ion-content>
  </template>
  
  <script setup lang="ts">
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
  
  // Carrusel de imágenes
  const carouselImages = [
    { src: 'https://via.placeholder.com/800x400?text=Imagen+1' }
  ];
  
  // Productos destacados y más vendidos
  const products: Product[] = [
    { id: 1, name: 'Producto 1', price: 25, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Producto 2', price: 50, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Producto 3', price: 75, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Producto 4', price: 100, image: 'https://via.placeholder.com/150' },
  ];
  
  const bestSellers: Product[] = [
    { id: 5, name: 'Producto 5', price: 30, image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Producto 6', price: 60, image: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Producto 7', price: 90, image: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Producto 8', price: 120, image: 'https://via.placeholder.com/150' },
  ];
  
  // Beneficios
  const benefits: Benefit[] = [
    { icon: 'car-outline', title: 'Envío Gratis', description: 'En todas tus compras' },
    { icon: 'headset-outline', title: 'Soporte 24h', description: 'Siempre disponibles' },
    { icon: 'refresh-outline', title: '30 días de devolución', description: 'Sin preguntas' },
    { icon: 'lock-closed-outline', title: 'Pago 100% Seguro', description: 'Protección garantizada' },
  ];
  </script>
  
  <style scoped>
  .carousel-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 350px;
    margin-bottom: 250px; /* Espaciado para evitar solapamiento */
  }
  
  .carousel-image {
    width: 100%;
    height: auto;
  }
  
  .carousel-button {
    position: absolute;
    bottom: 20px;
    z-index: 10;
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
    width: auto; /* Ajusta automáticamente el tamaño según el contenido */
    padding: 0.5rem 1.5rem; /* Define un tamaño más compacto */
    font-size: 1rem; /* Ajusta el tamaño del texto */
    margin: 20px auto; /* Centra el botón horizontalmente */
    display: block; /* Asegura que el botón quede centrado */
    width: 15rem;
  }
  </style>
  