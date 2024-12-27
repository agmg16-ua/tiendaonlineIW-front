<script setup lang="ts">
import { reactive, ref, watch, onMounted } from 'vue';
import { LoginRequest, RegisterRequest, AuthenticationControllerImplApi } from '@/generated/api';
import { IonGrid, IonRow, IonCol, IonInput, IonButton } from '@ionic/vue';

const props = defineProps({
    formData: Object
})

const emit = defineEmits(['nextStep'])

let localData = ref({
    email: '',
    phone: ''
    });

onMounted(() => {
    let data = { ...props.formData };
    localData.value.email = data.email;
    localData.value.phone = data.phone;
});

watch(
    () => props.formData,
    (newData) => {
        let data = { ...newData };
        localData.value.email = data.email;
        localData.value.phone = data.phone;
    },
    { immediate: true }
);


function submitForm() {
    console.log('Submitting form from childcomponent:', localData.value);
    emit('nextStep', localData.value);
}

</script>

<template>
    <h3>SECCIÓN 2: INFORMACIÓN DE CONTACTO</h3>
    <form @submit.prevent="submitForm">
        <ion-input v-model="localData.email" label="Email" label-placement="floating" fill="outline"
            placeholder="Enter your email" type="email" required></ion-input>

        <ion-input v-model="localData.phone" label="Teléfono" label-placement="floating" fill="outline"
            placeholder="Enter your phone number" required></ion-input>

        <ion-row>
            <ion-col>
                <ion-button expand="block" type="submit">Siguiente</ion-button>
            </ion-col>
        </ion-row>
    </form>

</template>