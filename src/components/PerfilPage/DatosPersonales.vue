<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/stores/store'
import RegisterRequest from '@/generated/src/model/RegisterRequest'

const userStore = useUserStore()

const userData = ref({})

const editData = ref({})

const gender = RegisterRequest.GeneroEnum

const showDirecciones = ref(false)

const editando = ref(false)

onMounted(async () => {
    const data = await userStore.getCurrentUserData()

    if (data.status === 200) {
        userData.value = data.data
        editData.value = userData.value
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

const updateUser = async () => {
    const data = await userStore.updateCurrentUserData(editData.value)

    if (data.status === 200) {
        userData.value = data.data
        editData.value = userData.value
    }

    console.log(userData.value)

    editando.value = false
}
</script>

<template>
    <ion-card>
        <ion-card-header>
            <ion-card-title>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <h3 style="margin: 0;">Datos Personales</h3>
                    <ion-button v-if="!editando" fill="outline" size="small"
                        @click="editando = true">Update</ion-button>
                    <div v-if="editando">
                        <ion-button fill="outline" size="small" color="danger"
                            @click="editando = false">Cancel</ion-button>
                        <ion-button fill="outline" size="small" @click="updateUser">Save</ion-button>
                    </div>
                </div>
            </ion-card-title>
        </ion-card-header>
        <ion-card-content>
            <div v-if="!editando">
                <p><strong>Nombre de Usuario</strong> {{ userData.nombreUsuario }}</p>
                <p><strong>Nombre:</strong> {{ userData.nombre }}</p>
                <p><strong>Apellidos:</strong> {{ userData.apellidos }}</p>
                <p><strong>Email:</strong> {{ userData.email }}</p>
                <p><strong>Teléfono:</strong> {{ userData.telefono }}</p>
                <p><strong>Fecha de Nacimiento:</strong> {{ formatDate(userData.fechaNacimiento) }}</p>
                <p><strong>Fecha de Registro:</strong> {{ formatDate(userData.fechaRegistro) }}</p>
                <p><strong>Género:</strong> {{ userData.genero }}</p>
            </div>
            <div v-if="editando">
                <!--Completa aqui-->
                <ion-label>Al pulsar "Save" se guardarán los siguientes valores.</ion-label>
                <ion-item>
                    <ion-label position="stacked"><strong>Nombre de Usuario:</strong></ion-label>
                    <ion-input v-model="editData.nombreUsuario"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked"><strong>Nombre:</strong></ion-label>
                    <ion-input v-model="editData.nombre"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked"><strong>Apellidos:</strong></ion-label>
                    <ion-input v-model="editData.apellidos"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked"><strong>Teléfono:</strong></ion-label>
                    <ion-input v-model="editData.telefono" type="tel"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked"><strong>Fecha de Nacimiento:</strong></ion-label>
                    <ion-input v-model="editData.fechaNacimiento" type="date"></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="stacked"><strong>Género:</strong></ion-label>
                    <ion-select v-model="editData.genero">
                        <ion-select-option v-for="item in gender" :key="item" :value="item">{{ item
                            }}</ion-select-option>
                    </ion-select>
                </ion-item>
            </div>
            <div v-if="!editando">
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