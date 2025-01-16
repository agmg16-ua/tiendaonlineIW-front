<template>
  <!-- Imagen superior que ocupa todo el ancho de la página -->
  <div class="top-image">
    <img style="width: 100%; " src="../assets/AboutPage/titleImage.png" alt="Imagen Principal" />
  </div>

  <!-- Sección "Los Fundadores" -->
  <div class="founders-section">
    <h2>Los Fundadores</h2>
    <ion-grid>
      <ion-row>
        <ion-col size="3" class="founder">
          <img class="founder-image" src="../assets/AboutPage/luna.jpg" alt="Fundador 1" />
          <ion-text>
            <p>Luna S. Willems</p>
          </ion-text>
        </ion-col>
        <ion-col size="3" class="founder">
          <img class="founder-image" src="../assets/AboutPage/victor.jpg" alt="Fundador 2" />
          <ion-text>
            <p>Victor Padrón García</p>
          </ion-text>
        </ion-col>
        <ion-col size="3" class="founder">
          <img class="founder-image" src="../assets/AboutPage/alejandro.png" alt="Fundador 3" />
          <ion-text>
            <p>Alejandro Guillén Merino</p>
          </ion-text>
        </ion-col>
        <ion-col size="3" class="founder">
          <img class="founder-image" src="../assets/AboutPage/vahe.jpg" alt="Fundador 4" />
          <ion-text>
            <p>Vahe Maranyan Arakelyan</p>
          </ion-text>
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>

  <!-- Sección Testimonios -->
  <ion-card>
    <div class="testimonials-section">
      <h2>Testimonios</h2>
      <div class="testimonial">
        <div class="testimonial-content">
          <div class="testimonial-img">
            <img src="../assets/AboutPage/testimonial1.png" alt="Perfil 1" />
          </div>
          <div class="testimonial-text">
            <p>"Una vez que pedimos algunos accesorios y recibimos los productos en nuestra puerta, el servicio de
              atención al cliente fue muy servicial y respondieron a todas mis consultas."</p>
            <ion-text>
              <p>- Stacy</p>
            </ion-text>
          </div>
        </div>
      </div>

      <div class="testimonial">
        <div class="testimonial-content">
          <div class="testimonial-img">
            <img src="../assets/AboutPage/testimonial2.png" alt="Perfil 2" />
          </div>
          <div class="testimonial-text">
            <p>"Les pedí 5 camisetas y las recibí en poco tiempo. ¡La atención al cliente fue increíble!"</p>
            <ion-text>
              <p>- María Gómez</p>
            </ion-text>
          </div>
        </div>
      </div>

      <div class="testimonial">
        <div class="testimonial-content">
          <div class="testimonial-img">
            <img src="../assets/AboutPage/testimonial3.png" alt="Perfil 3" />
          </div>
          <div class="testimonial-text">
            <p>"Me equivoqué de camiseta, así que me puse en contacto con ellos y felizmente me ofrecieron un reembolso.
              Seguramente volveré a comprarles a ellos."</p>
            <ion-text>
              <p>- James</p>
            </ion-text>
          </div>
        </div>
      </div>
    </div>
  </ion-card>
</template>

<script setup lang="ts">
import { IonContent, IonGrid, IonRow, IonCol, IonImg, IonText } from '@ionic/vue';

const titleImage = '../assets/AboutPage/titleImage.png';

</script>


<style scoped>
.founder-image {
  width: 150px;
  /* Ajusta el tamaño deseado */
  height: 150px;
  /* Debe coincidir con el ancho para mantener la forma circular */
  object-fit: cover;
  /* Ajusta la imagen dentro del contenedor sin deformarla */
  border-radius: 50%;
  /* Hace que las imágenes sean circulares */
  border: 2px solid #ccc;
}

/* Imagen superior que ocupa todo el ancho */
.top-image ion-img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

/* Sección de imágenes horizontales con márgenes */
.horizontal-image-col {
  padding: 0 10px;
  margin-top: 20px;
  display: flex;
  /* Flexbox para centrar */
  justify-content: center;
  /* Centrar las imágenes horizontalmente */
}

.horizontal-image-col ion-img {
  width: 100%;
  height: 300px;
  /* Ajusta la altura para pantallas pequeñas */
  object-fit: cover;
}

ion-grid {
  width: 90%;
  margin: 0 auto;
  /* Centrar horizontalmente */
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

/* Sección Testimonios */
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
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 100px;
}

/* Imagen circular de perfil */
.testimonial-img {
  margin-right: 20px;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 50%;
  /* Asegura que sea circular */
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Ajustes en la imagen dentro del contenedor */
.testimonial-img ion-img {
  width: 100%;
  height: 100%;
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

/* Responsivo: imagen arriba y centrada en pantallas pequeñas */
@media (max-width: 768px) {
  .testimonial-content {
    flex-direction: column;
    /* Cambiar de fila a columna en móviles */
    align-items: center;
    /* Alineación centrada para imagen y texto */
    justify-content: center;
    /* Centrar contenido verticalmente */
  }

  .testimonial-img {
    width: 120px;
    /* Ajustar tamaño de la imagen */
    height: 120px;
    /* Ajustar tamaño de la imagen */
    display: flex;
    /* Flexbox en la imagen */
    justify-content: center;
    /* Centrar la imagen dentro de su contenedor */
    align-items: center;
    /* Centrar la imagen dentro de su contenedor */
  }

  .testimonial-img ion-img {
    width: 100%;
    /* La imagen ocupa todo el contenedor */
    height: 100%;
    /* La imagen ocupa todo el contenedor */
    object-fit: cover;
    /* Mantener la proporción */
  }

  .testimonial-text {
    text-align: center;
    /* Centrar el texto del testimonio */
  }
}
</style>
