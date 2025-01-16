<script setup lang="ts">

import { ref, onMounted } from 'vue'
import { useAdminStore } from '@/stores/store'

const adminStore = useAdminStore()

const showDetalles = ref<boolean[]>([])
const usuarios = ref([])

onMounted(async () => {

    const response = await adminStore.fetchAllUsuarios()

    if (response.status === 200) {
        usuarios.value = response.data

        console.log(usuarios.value)
    }

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
                            <h2><strong>{{ usuario.id }}:</strong> {{ usuario.email }}</h2>
                            <p>{{ usuario.nombre }} {{ usuario.apellidos }}</p>
                        </ion-label>
                        <ion-icon slot="end" :name="showDetalles[index] ? 'chevron-up' : 'chevron-down'"></ion-icon>
                    </ion-item>
                    <ion-item v-if="showDetalles[index]" lines="full">
                        <ion-label>
                            <p>Nombre de Usuario: {{ usuario.nombreUsuario }}</p>
                            <p>Fecha Nacimiento: {{ usuario.fechaNacimiento }}</p>
                            <p>Sexo: {{ usuario.genero }}</p>
                            <p>Fecha de Alta: {{ usuario.fechaRegistro }}</p>
                            <p>Telefono: {{ usuario.telefono }}</p>
                            <p>Roles:
                                <span v-for="rol in usuario.rolesList">{{ rol }},</span>
                            </p>
                            <p>Direcciones: </p>
                            <ion-item v-for="direccion in usuario.direccionesData" :key="direccion.id" lines="full">
                                <ion-label>
                                    <p>- {{ direccion.calle }} {{ direccion.numero }} {{ direccion.cp }}, {{
                                        direccion.provincia }}</p>
                                </ion-label>

                            </ion-item>
                        </ion-label>
                    </ion-item>
                </ion-item-group>
            </ion-list>
        </ion-card-content>
    </ion-card>
</template>