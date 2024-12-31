<script setup lang="ts">
import { reactive, ref, watch, onMounted } from 'vue';
import { LoginRequest, RegisterRequest, AuthenticationControllerImplApi } from '@/generated/api';
import { IonGrid, IonRow, IonCol, IonInput, IonButton, IonInputPasswordToggle } from '@ionic/vue';

const props = defineProps({
    formData: Object
})

const emit = defineEmits(['nextStep'])

let localData = ref({
    username: '',
    password: '',
    confirmPassword: ''
    });

onMounted(() => {
    let data = { ...props.formData };
    localData.value.username = data.username;
    localData.value.password = data.password;
    localData.value.confirmPassword = data.password;
});

watch(
    () => props.formData,
    (newData) => {
        let data = { ...newData };
        localData.value.username = data.username;
        localData.value.password = data.password;
        localData.value.confirmPassword = data.password;
    },
    { immediate: true }
);


function submitForm() {
    console.log('Submitting form from childcomponent:', localData.value);
    emit('nextStep', localData.value);
}

</script>

<template>
    <h3>SECCIÓN 3: CREDENCIALES DE LA CUENTA</h3>
    <form @submit.prevent="submitForm">
        <ion-grid>
            <ion-row>
                <ion-col>
                    <ion-input v-model="localData.username" label="Nombre de Usuario" label-placement="stacked" fill="outline"
                        placeholder="Enter your username" required></ion-input>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-input v-model="localData.password" label="Contraseña" label-placement="stacked" fill="outline"
                        placeholder="Enter your password" type="password" required>
                        <ion-input-password-toggle slot="end"></ion-input-password-toggle>
                    </ion-input>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-input v-model="localData.confirmPassword" label="Confirma Contraseña" label-placement="stacked" fill="outline"
                        placeholder="Enter your password" type="password" required>
                        <ion-input-password-toggle slot="end"></ion-input-password-toggle>
                    </ion-input>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-button expand="block" type="submit">Siguiente</ion-button>
                </ion-col>
            </ion-row>
        </ion-grid>
    </form>

</template>