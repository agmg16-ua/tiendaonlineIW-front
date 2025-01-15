<script setup lang="ts">
import { ref } from 'vue'
import { useAdminStore } from '@/stores/store'

const emit = defineEmits(["closePopup"]);
const adminStore = useAdminStore()

const pedidos = ref([])


const saveProducto = async () => {
    console.log('Guardando dirección')

    emit("closePopup")
}

const cancel = () => {
    emit("closePopup")
};

</script>

<template>
    <ion-content>
        <ion-header>
            <ion-toolbar>
                <ion-title>Añadir Producto</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <form @submit.prevent="saveProducto">
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <ion-button expand="block" type="button" color="danger"
                                @click="cancel">Cancelar</ion-button>
                        </ion-col>
                        <ion-col>
                            <ion-button expand="block" type="submit">Guardar</ion-button>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </form>
        </ion-content>
    </ion-content>
</template>