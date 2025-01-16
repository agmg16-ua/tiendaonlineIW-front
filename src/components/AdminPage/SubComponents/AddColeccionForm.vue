<script setup lang="ts">

import { ref, onMounted } from 'vue'
import { useAdminStore } from '@/stores/store'

const adminStore = useAdminStore()

const emit = defineEmits(["closePopup", "created"]);


const coleccionData = ref({
    nombre: ''
})

const saveColeccion = async () => {

    const response = await adminStore.saveNewColeccion(coleccionData.value)

    if (response.status === 200) {
        emit('created')
    }

}


const cancel = () => {
    emit('closePopup')
}

</script>

<template>
    <ion-content>
        <form @submit.prevent="saveColeccion">
            <ion-grid>
                <ion-row>
                    <ion-col>
                        <h2>Añadir Coleccion</h2>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="12">
                        <ion-input v-model="coleccionData.nombre" label="Nombre" label-placement="stacked"
                            fill="outline" placeholder="Otoño 2015" required></ion-input>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-button expand="block" type="button" color="danger" @click="cancel">Cancelar</ion-button>
                    </ion-col>
                    <ion-col>
                        <ion-button expand="block" type="submit">Guardar</ion-button>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </form>
    </ion-content>
</template>