<template>
    <ion-row>
      <ion-card class="comentarios-container">
        <ion-card-header>
          <ion-card-title class="title-comentarios">Comentarios</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <div v-if="comentarios.length">
            <ion-list class="lista-comentarios">
              <ion-item v-for="comentario in comentarios" :key="comentario.id" lines="none">
                <ion-label class="comentario-contenedor">
                  <!-- Guion (marca de listado) alineado a la izquierda -->
                  <div class="comentario-item">
                    <ion-icon name="remove-outline" class="marca-listado"></ion-icon>
  
                    <!-- Estrellas alineadas junto al guion -->
                    <div class="estrellas">
                      <ion-icon
                        v-for="star in 5"
                        :key="star"
                        :name="star <= comentario.estrellas ? 'star' : 'star-outline'"
                        class="icono-estrella"
                      ></ion-icon>
                    </div>
                  </div>
                  
                  <!-- Comentario alineado debajo de las estrellas -->
                  <p class="texto-comentario">{{ comentario.texto }}</p>
                </ion-label>
              </ion-item>
            </ion-list>
          </div>
          <div v-else>
            <p>No hay comentarios para este producto.</p>
          </div>
        </ion-card-content>
      </ion-card>
    </ion-row>
  </template>
  
  <script setup lang="ts">
  import { ref, computed, onMounted } from "vue";
  import { useComentarioStore } from "@/stores/comentarioStore";
  import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, IonIcon, IonRow } from "@ionic/vue";
  
  const props = defineProps({
    productoId: {
      type: Number,
      required: true,
    },
  });
  
  const comentarioStore = useComentarioStore();
  const cargando = ref(true);
  
  const comentarios = computed(() =>
    comentarioStore.comentarios.filter(
      (comentario) => comentario.productoId === props.productoId
    )
  );
  
  const cargarComentarios = async () => {
    cargando.value = true;
    const response = await comentarioStore.fetchComentarios();
    cargando.value = false;
  
    if (response.status !== 200) {
      console.error(response.message);
    }
  };
  
  onMounted(() => {
    cargarComentarios();
  });
  </script>
  
  <style scoped>
  .comentarios-container {
    width: 91%;
    max-width: 90%;
    margin-top: 20px;
    margin-left: 50px;
    padding: 20px;
    background-color: #2f2f30;
    color: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .lista-comentarios{
    border-radius: 5px;
  }
  .title-comentarios {
    font-size: 1.2rem;
    font-weight: bold;
    color: #d4d4d0;
  }
  
  .texto-comentario {
    margin: 10px 0;
    font-size: 1rem;
    color: #bbb;
    text-align: left; /* Alinea el comentario a la izquierda */
    margin-left: 40px;
  }
  
  /* Alineación de las estrellas */
  .estrellas {
    display: flex;
    margin-left: 10px; /* Separación entre las estrellas y el guion */
  }
  
  .icono-estrella {
    font-size: 1rem;
    color: #ffc107;
  }
  
  /* Alineación del guion (marca de listado) a la izquierda */
  .marca-listado {
    font-size: 1.2rem;
    color: #ffc107; /* Color del guion */
    margin-right: 10px; /* Separación entre el guion y las estrellas */
    display: inline-block; /* Asegura que se alinee junto al texto */
  }
  
  /* Contenedor de la fila del guion y las estrellas */
  .comentario-item {
    display: flex;
    align-items: center; /* Alineación vertical centrada */
    margin-bottom: 5px; /* Separación entre el guion, las estrellas y el comentario */
  }
  
  p {
    text-align: left; /* Alinea el texto a la izquierda */
    font-size: 1rem;
    color: #bbb;
  }
  </style>
  