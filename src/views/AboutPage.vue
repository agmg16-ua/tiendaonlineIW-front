<template>
    <!-- Imagen superior que ocupa todo el ancho de la página -->
    <ion-content>
      <div class="top-image">
        <ion-img src="https://via.placeholder.com/1920x500?text=Imagen+Principal" alt="Imagen Principal" />
      </div>
    
      <!-- Sección de imágenes horizontales con márgenes -->
      <ion-grid>
        <ion-row>
          <ion-col size="6" class="horizontal-image-col">
            <ion-img src="https://via.placeholder.com/850x300?text=Imagen+1" alt="Imagen 1" />
          </ion-col>
          <ion-col size="6" class="horizontal-image-col">
            <ion-img src="https://via.placeholder.com/850x300?text=Imagen+2" alt="Imagen 2" />
          </ion-col>
        </ion-row>
      </ion-grid>
    
      <!-- Sección "Los Fundadores" -->
      <div class="founders-section">
        <h2>Los Fundadores</h2>
        <ion-grid>
          <ion-row>
            <ion-col size="6" size-md="3" class="founder">
              <ion-img src="https://via.placeholder.com/400x300?text=Fundador+1" alt="Fundador 1" />
              <ion-text><p>Fundador 1</p></ion-text>
            </ion-col>
            <ion-col size="6" size-md="3" class="founder">
              <ion-img src="https://via.placeholder.com/400x300?text=Fundador+2" alt="Fundador 2" />
              <ion-text><p>Fundador 2</p></ion-text>
            </ion-col>
            <ion-col size="6" size-md="3" class="founder">
              <ion-img src="https://via.placeholder.com/400x300?text=Fundador+3" alt="Fundador 3" />
              <ion-text><p>Fundador 3</p></ion-text>
            </ion-col>
            <ion-col size="6" size-md="3" class="founder">
              <ion-img src="https://via.placeholder.com/400x300?text=Fundador+4" alt="Fundador 4" />
              <ion-text><p>Fundador 4</p></ion-text>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
  
      <!-- Sección Testimonios -->
      <div class="testimonials-section">
        <h2>Testimonios</h2>
        <div class="testimonial">
          <div class="testimonial-content">
            <div class="testimonial-img">
              <ion-img src="https://via.placeholder.com/80x80?text=Perfil+1" alt="Perfil 1" />
            </div>
            <div class="testimonial-text">
              <p>"Una vez que pedimos algunos accesorios y recibimos los productos en nuestra puerta, el servicio de atención al cliente fue muy servicial y respondieron a todas mis consultas."</p>
              <ion-text><p>- Juan Pérez</p></ion-text>
            </div>
          </div>
        </div>
        
        <div class="testimonial">
          <div class="testimonial-content">
            <div class="testimonial-img">
              <ion-img src="https://via.placeholder.com/80x80?text=Perfil+2" alt="Perfil 2" />
            </div>
            <div class="testimonial-text">
              <p>"Les pedí 5 camisetas y las recibí en poco tiempo. ¡La atención al cliente fue increíble!"</p>
              <ion-text><p>- María Gómez</p></ion-text>
            </div>
          </div>
        </div>

        <div class="testimonial">
          <div class="testimonial-content">
            <div class="testimonial-img">
              <ion-img src="https://via.placeholder.com/80x80?text=Perfil+3" alt="Perfil 3" />
            </div>
            <div class="testimonial-text">
              <p>"Me equivoqué de camiseta, así que me puse en contacto con ellos y felizmente me ofrecieron un reembolso. Seguramente volveré a comprarles a ellos."</p>
              <ion-text><p>- David Sanchez</p></ion-text>
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </template>
  
  <script setup lang="ts">
  /* No necesitas lógica para esta página en este momento */
  </script>
  
  <style scoped>
  /* Imagen superior que ocupa todo el ancho */
  .top-image ion-img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  /* Sección de imágenes horizontales con márgenes */
  .horizontal-image-col {
    padding: 0 20px;
    margin-top: 50px;
    display: flex; /* Flexbox para centrar */
    justify-content: center; /* Centrar las imágenes horizontalmente */
  }

  .horizontal-image-col ion-img {
    width: 90%;
    height: 600px;
    object-fit: cover;
  }

  ion-grid {
    width: 90%; /* El grid ocupa el 80% del ancho */
    margin: 0 auto; /* Centrar horizontalmente */
  }

  
  /* Sección de los fundadores */
  .founders-section {
    text-align: center;
    margin: 40px 0;
  }
  
  .founders-section h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
  
  /* Estilos para cada imagen de fundador */
  .founder {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .founder ion-img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .founder ion-text p {
    margin-top: 10px;
    font-weight: bold;
    font-size: 1.1rem;
  }
  
  /* Estilos para la sección de testimonios */
  .testimonials-section {
    text-align: center;
    margin: 40px 0;
  }
  
  .testimonials-section h2 {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
  
  /* Estilos del contenedor del testimonio */
  .testimonial {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }
  
  .testimonial-content {
    display: flex;
    align-items: center;
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 100px;
  }
  
  /* Imagen circular de perfil */
  .testimonial-img {
    margin-right: 20px;
  }
  
  .testimonial-img ion-img {
    border-radius: 80%;
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
  
  /* Estilo del texto del testimonio */
  .testimonial-text {
    text-align: left;
    max-width: 700px;
  }
  
  .testimonial-text p {
    font-size: 1.4rem;
    line-height: 1.5;
  }
  
  .testimonial-text ion-text p {
    margin-top: 10px;
    font-weight: bold;
    font-size: 1.1rem;
  }
  </style>
  