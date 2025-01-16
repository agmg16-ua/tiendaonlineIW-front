<template>
    <div v-if="tallasDisponibles.length > 0" class="seleccion-talla">
      <label for="talla-selector">Tallas disponibles:</label>
      <ion-select id="talla-selector" v-model="tallaSeleccionada" @ionChange="enviarTallaSeleccionada">
        <ion-select-option v-for="talla in tallasDisponibles" :key="talla.id" :value="talla.talla">
          {{ talla.talla }}
        </ion-select-option>
      </ion-select>
    </div>
    <div v-else>
      <p>No hay tallas disponibles</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, defineEmits } from 'vue';
  import { IonSelect, IonSelectOption } from '@ionic/vue';
  
  interface Talla {
    id: number;
    talla: string;
  }
  
  const props = defineProps<{
    tallasDisponibles: Talla[];
  }>();
  
  const emit = defineEmits<{
    (event: 'tallaSeleccionada', talla: string): void;
  }>();
  
  const tallaSeleccionada = ref<string | null>(null);
  
  const enviarTallaSeleccionada = () => {
    if (tallaSeleccionada.value) {
      emit('tallaSeleccionada', tallaSeleccionada.value);
    }
  };
  </script>
  
  <style scoped>
  .seleccion-talla {
    margin-top: 40px;
  }
  
  ion-select {
  width: 15%; /* Asegura que ocupe todo el ancho disponible */
  background-color: #e4dfdf;
  border-radius: 12px; /* Bordes redondeados */
  padding: 10px; /* Espaciado dentro del selector */
  font-size: 16px; /* Ajuste de tamaño de fuente */
  color: #333; /* Texto oscuro para mayor legibilidad */
  border: 1px solid #ccc; /* Borde sutil */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); /* Sombra suave para un efecto de profundidad */
  transition: all 0.3s ease; /* Transición suave para interacciones */
  margin-top: 5px;
}

ion-select:hover {
  background-color: #a1a1a1; /* Cambia ligeramente el fondo cuando pasa el mouse */
  border-color: #888; /* Color del borde más oscuro al pasar el mouse */
}

ion-select:focus {
  outline: none; /* Elimina el borde de enfoque predeterminado */
  border-color: #007bff; /* Cambia el borde al color principal cuando está en foco */
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.3); /* Sombra para resaltar el enfoque */
}

  </style>
  