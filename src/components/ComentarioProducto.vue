<template>
    <ion-row class="ff">
      <ion-col size="12">
        <div class="comentario-container">
          <h3>Añade un comentario</h3>
          
          <!-- Estrellas para puntuar -->
          <div class="estrellas">
            <ion-icon v-for="star in 5" :key="star" :name="star <= puntuacion ? 'star' : 'star-outline'" class="icono-estrella" @click="setPuntuacion(star)"></ion-icon>
          </div>
  
          <!-- Campo de comentario -->
          <ion-input class="text-input" v-model="comentario" placeholder="Escribe tu comentario aquí..." :clearInput="true"></ion-input>
  
          <!-- Botón para enviar -->
          <ion-button class="btn-enviar" @click="enviarComentario">
            Enviar Comentario
          </ion-button>
        </div>
      </ion-col>
    </ion-row>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import { IonGrid, IonRow, IonCol, IonInput, IonButton, IonIcon } from "@ionic/vue";
  import { useComentarioStore } from "@/stores/comentarioStore"; // Importamos el store
  import { useRouter } from 'vue-router';

  const router = useRouter();
  
  // Definimos las props
  const props = defineProps({
    productoId: {
      type: Number,
      required: true,
    },
  });
  
  // Referencias para el comentario y la puntuación
  const comentario = ref<string>(""); // Almacena el comentario del usuario
  const puntuacion = ref<number>(0); // Almacena la puntuación seleccionada por el usuario
  
  // Referencia al store de comentarios
  const comentarioStore = useComentarioStore();
  
  // Función para establecer la puntuación
  const setPuntuacion = (stars: number) => {
    // Si el usuario hace clic en la misma estrella, desmarcamos la puntuación (ponemos en 0)
    puntuacion.value = puntuacion.value === stars ? 0 : stars;
  };
  
  // Función para enviar el comentario
  const enviarComentario = async () => {

    if((localStorage.getItem('isAuthenticated') === 'true')){

       // Verificamos si el comentario está vacío
       if (!comentario.value.trim()) {
        alert("El comentario no puede estar vacío.");
        return;
      }
    
      // Verificamos si el usuario ha seleccionado una puntuación
      if (puntuacion.value === 0) {
        alert("Debes seleccionar una puntuación.");
        return;
      }
    
      // Estructuramos los datos del comentario
      const nuevoComentario = {
        texto: comentario.value,
        estrellas: puntuacion.value,
        productoId: props.productoId,
      };
    
      try {
        // Llamamos a la acción del store para crear el comentario
        const response = await comentarioStore.crearComentario(nuevoComentario);
    
        // Si la respuesta es exitosa
        if (response.status === 200) {
          alert("Comentario enviado con éxito.");
          comentario.value = ""; // Limpiamos el comentario después de enviarlo
          puntuacion.value = 0; // Limpiamos la puntuación después de enviarlo
        } else {
          alert(response.message); // Si ocurre un error, mostramos el mensaje de error
        }
      } catch (error) {
        console.error("Error al enviar el comentario:", error);
        alert("Hubo un problema al enviar tu comentario.");
      }

    }else{
      router.push('/login');
    }
     
  };
  </script>
  
  
  <style scoped>
  .ff {
    width: 100%;
    justify-content: left;
    margin-top: 5%;
  }
  
  .comentario-container {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #cdc6c6;
    height: auto;
  }
  
  /* Título */
  h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: #1c1b1b;
  }
  
  /* Estilo para el input */
  .text-input {
    width: 100%;
    margin-bottom: 20px;
    color: rgb(53, 52, 52);
    font-size: 1rem;
    height: 20px;
    line-height: 40px;
    white-space: nowrap; /* Evita que el texto se envuelva */
    overflow: hidden; /* Oculta el contenido que exceda el ancho */
    text-overflow: ellipsis; /* Añade puntos suspensivos al final si el texto es largo */
    display: block;
    padding: 0 10px; /* Espaciado interno */
    box-sizing: border-box;
  }
  
  /* Botón */
  .btn-enviar {
    color: white;
    width: 100%;
    font-size: 1rem;
    font-weight: bold;
    padding: 10px;
    border-radius: 5px;
    text-transform: uppercase;
  }
  
  /* Estilo de las estrellas */
  .estrellas {
    display: flex;
    margin-bottom: 10px;
  }
  
  .icono-estrella {
    font-size: 1.5rem;
    color: #ffc107; /* Color de las estrellas */
    cursor: pointer;
    margin-right: 5px;
  }
  
  /* Estilo responsivo: Pantallas pequeñas (móviles) */
  @media (max-width: 600px) {
    .ff {
      width: 90%;
    }
  }
  </style>
  