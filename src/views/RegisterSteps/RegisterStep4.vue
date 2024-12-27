<script setup lang="ts">
import { reactive, ref, watch, onMounted } from 'vue';
import { LoginRequest, RegisterRequest, AuthenticationControllerImplApi } from '@/generated/api';
import { IonGrid, IonRow, IonCol, IonInput, IonButton, IonLabel } from '@ionic/vue';

const props = defineProps({
    formData: Object
})

const emit = defineEmits(['nextStep'])

const question = {
    number1: Math.floor(Math.random() * 10),
    number2: Math.floor(Math.random() * 10)
}

const correctAnswer = question.number1 + question.number2;

let localData = ref({
    street: '',
    number: '',
    city: '',
    province: '',
    postalCode: '',
    country: '',
    captcha: undefined
});

onMounted(() => {
    let data = { ...props.formData };
    localData.value.street = data.street;
    localData.value.number = data.number;
    localData.value.city = data.city;
    localData.value.province = data.province;
    localData.value.postalCode = data.postalCode;
    localData.value.country = data.country;
});

watch(
    () => props.formData,
    (newData) => {
        let data = { ...newData };
        localData.value.street = data.street;
        localData.value.number = data.number;
        localData.value.city = data.city;
        localData.value.province = data.province;
        localData.value.postalCode = data.postalCode;
        localData.value.country = data.country;
    },
    { immediate: true }
);


function submitForm() {
    if (localData.value.captcha == correctAnswer) {
        console.log('Submitting form from childcomponent:', localData.value);
        emit('nextStep', localData.value);
    }
    else {
        console.log(correctAnswer)
        console.log(localData.value.captcha)
        console.log('Captcha incorrecto');
    }
}

</script>

<template>
    <h3>SECCIÓN 4: DIRECCION DE ENVIO</h3>
    <form @submit.prevent="submitForm">
        <ion-grid>
            <ion-row>
                <ion-col size="10">
                    <ion-input v-model="localData.street" label="Street" label-placement="floating" fill="outline"
                        placeholder="C/ Gran Vía" required></ion-input>
                </ion-col>
                <ion-col size="2">
                    <ion-input v-model="localData.number" label="Num" label-placement="floating" fill="outline"
                        placeholder="12" required></ion-input>
                </ion-col>
            </ion-row>
        
            <ion-row>
                <ion-col>
                    <ion-input v-model="localData.city" label="Ciudad" label-placement="floating" fill="outline"
                        placeholder="Madrid" required></ion-input>
                </ion-col>
                <ion-col>
                    <ion-input v-model="localData.province" label="Provincia" label-placement="floating" fill="outline"
                        placeholder="Madrid" required></ion-input>
                </ion-col>
            </ion-row>
            
            <ion-row>
                <ion-col>
                    <ion-input v-model="localData.postalCode" label="Código Postal" label-placement="floating" fill="outline"
                        placeholder="45675" required></ion-input>
                </ion-col>
                <ion-col>
                    <ion-input v-model="localData.country" label="Pais" label-placement="floating" fill="outline"
                        placeholder="España" required></ion-input>
                </ion-col>
            </ion-row>

            <!--CAPTCHA-->
            <ion-row>
                <ion-col>
                    <ion-label>¿Cuanto es {{ question.number1 }} + {{ question.number2 }}?</ion-label>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-input v-model="localData.captcha" label="Respuesta" label-placement="floating" fill="outline"
                        placeholder="12" type="number" required></ion-input>
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