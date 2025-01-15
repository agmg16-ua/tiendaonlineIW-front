import { defineStore } from 'pinia';
import { comentarioEndpoints } from '@/router/endpoints';

export const useComentarioStore = defineStore('comentario', {
  state: () => ({
    comentarios: [] as Array<{ id: number; texto: string; estrellas: number; usuarioId: number; productoId: number }>,
  }),

  actions: {
    // Acción para obtener comentarios de un producto
    async fetchComentarios() {
      try {
        const response = await fetch(comentarioEndpoints.GETComentariosEndpoint, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (response.status === 200) {
          this.comentarios = data; // Guarda los comentarios en el estado
          return { status: response.status, message: 'Comentarios cargados exitosamente' };
        } else {
          console.error(`Error al obtener comentarios: ${data.message}`);
          return { status: response.status, message: data.message || 'Error desconocido' };
        }
      } catch (error) {
        console.error('Error en la petición de comentarios:', error);
        return { status: 500, message: 'Error del servidor al cargar comentarios' };
      }
    },

    // Acción para crear un nuevo comentario
    async crearComentario(comentario: { texto: string; estrellas: number; productoId: number }) {
      try {
        const response = await fetch(comentarioEndpoints.POSTComentarioEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('tokenJWT')}`,
          },
          body: JSON.stringify(comentario), // Convertimos los datos a JSON
        });

        const data = await response.json();

        if (response.status === 200) {
          this.comentarios.push(data); // Añadimos el nuevo comentario al estado
          return { status: response.status, message: 'Comentario creado con éxito' };
        } else {
          console.error(`Error al crear comentario: ${data.message}`);
          return { status: response.status, message: data.message || 'Error desconocido' };
        }
      } catch (error) {
        console.error('Error en la petición para crear comentario:', error);
        return { status: 500, message: 'Error del servidor al crear comentario' };
      }
    },
  },
});
