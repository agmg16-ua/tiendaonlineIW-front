<script setup lang="ts">

import { ref, onMounted } from 'vue'
import { useAdminStore } from '@/stores/store'

const adminStore = useAdminStore()

const showDetalles = ref<boolean[]>([])
const usuarios = ref([])

onMounted(async () => {
    /*
    const response = await adminStore.fetchAllUsuarios()

    console.log(response)
    */
})


</script>

<template>
    <ion-card>
        <ion-card-header>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3 style="margin: 0;">Usuarios</h3>
            </div>
        </ion-card-header>
        <ion-card-content>
            <ion-list>
                <ion-item-group v-for="(usuario, index) in usuarios" :key="usuario.id">
                    <ion-item button @click="showDetalles[index] = !showDetalles[index]">
                        <ion-label style="padding-left: 10px">
                            <h2>{{ usuario.email }}</h2>
                            <p>{{ usuario.nombre }} {{ usuario.apellidos }}</p>
                        </ion-label>
                        <ion-icon slot="end" :name="showDetalles[index] ? 'chevron-up' : 'chevron-down'"></ion-icon>
                    </ion-item>
                    <ion-item v-if="showDetalles[index]" lines="full">
                        <ion-label>
                            <!--MORE USUARIO DATA-->
                        </ion-label>
                    </ion-item>
                </ion-item-group>
            </ion-list>
        </ion-card-content>
    </ion-card>
</template>