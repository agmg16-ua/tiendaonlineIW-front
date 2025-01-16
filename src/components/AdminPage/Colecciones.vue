<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAdminStore } from '@/stores/store'

import AddColeccionForm from './SubComponents/AddColeccionForm.vue'

const adminStore = useAdminStore()

const colecciones = ref([])

const showAddColeccion = ref(false)

onMounted(async () => {
    const response = await adminStore.fetchColecciones()

    if (response.status === 200) {
        colecciones.value = response.data
    } else {
        alert('Error al cargar las colecciones' + response.message)
    }
})

const created = async () => {
    const response = await adminStore.fetchColecciones()

    if (response.status === 200) {
        colecciones.value = response.data
    } else {
        alert('Error al cargar las colecciones' + response.message)
    }

    showAddColeccion.value = false
}


</script>

<template>
    <ion-card>
        <ion-card-header>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3 style="margin: 0;">Colecciones</h3>
                <ion-button size="small" @click="showAddColeccion = true">
                    <ion-icon name="add-circle-outline"></ion-icon>
                </ion-button>
            </div>
        </ion-card-header>
        <ion-card-content>
            <ion-list>
                <ion-item-group v-for="(coleccion, index) in colecciones" :key="coleccion.id">
                    <ion-item>
                        <ion-label style="padding-left: 10px">
                            <h2><strong>{{ coleccion.id }}:</strong> {{ coleccion.nombre }}</h2>
                        </ion-label>
                    </ion-item>
                </ion-item-group>
            </ion-list>
        </ion-card-content>
    </ion-card>

    <ion-modal :is-open="showAddColeccion" @ionModalDidDismiss="showAddColeccion = false">
        <AddColeccionForm @closePopup="showAddColeccion = false" @created="created" />
    </ion-modal>
</template>