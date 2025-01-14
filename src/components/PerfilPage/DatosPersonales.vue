<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/stores/store'

const userStore = useUserStore()

const userData = ref({})

const showDirecciones = ref(false)

onMounted(async () => {
    const data = await userStore.getCurrentUserData()

    if (data.status === 200) {
        userData.value = data.data
    }
})

const toggleDirecciones = () => {
    showDirecciones.value = !showDirecciones.value;
};

const formatDate = (date: string | null) => {
    if (!date) return 'N/A';
    const formattedDate = new Date(date);
    return formattedDate.toLocaleDateString();
};
</script>

<template>
    <ion-card>
        <ion-card-header>
            <ion-card-title>
                <h3>Datos Personales</h3>
            </ion-card-title>
        </ion-card-header>
        <ion-card-content>
            <div>
                <p><strong>Nombre de Usuario</strong> {{ userData.nombreUsuario }}</p>
                <p><strong>Nombre:</strong> {{ userData.nombre }}</p>
                <p><strong>Apellidos:</strong> {{ userData.apellidos }}</p>
                <p><strong>Email:</strong> {{ userData.email }}</p>
                <p><strong>Teléfono:</strong> {{ userData.telefono }}</p>
                <p><strong>Fecha de Nacimiento:</strong> {{ formatDate(userData.fechaNacimiento) }}</p>
                <p><strong>Fecha de Registro:</strong> {{ formatDate(userData.fechaRegistro) }}</p>
                <p><strong>Género:</strong> {{ userData.genero }}</p>
            </div>
            <div>
                <ion-item button @click="toggleDirecciones">
                    <ion-label>Direcciones</ion-label>
                    <ion-icon :name="showDirecciones ? 'chevron-up' : 'chevron-down'" slot="end"></ion-icon>
                </ion-item>

                <ion-list v-if="showDirecciones">
                    <ion-item-group v-for="(direccion, index) in userData.direccionesData" :key="direccion.id">
                        <ion-item>
                            <ion-label>
                                <h2>{{ direccion.calle }}, {{ direccion.numero }}</h2>
                                <p>{{ direccion.ciudad }}, {{ direccion.provincia }} - {{ direccion.cp }}</p>
                                <p>{{ direccion.pais }}</p>
                            </ion-label>
                        </ion-item>
                    </ion-item-group>
                </ion-list>
            </div>
        </ion-card-content>
    </ion-card>
</template>