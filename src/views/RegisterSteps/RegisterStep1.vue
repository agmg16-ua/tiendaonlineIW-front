<script setup lang="ts">
import { reactive, ref, watch, onMounted } from 'vue';
import { IonGrid, IonRow, IonCol, IonInput, IonButton, IonSelect, IonSelectOption } from '@ionic/vue';
import RegisterRequest, { GeneroEnum } from '@/generated/src/model/RegisterRequest';

const props = defineProps({
    formData: Object
})

const emit = defineEmits(['nextStep'])

let localData = ref({
    name: '',
    lastName: '',
    birthDate: '',
    gender: ''
});

//Ignorar si muestra error indicando que GeneroEnum no esta definido. Funciona correctamente
const gender = RegisterRequest.GeneroEnum

onMounted(() => {
    let data = { ...props.formData };
    localData.value.name = data.name;
    localData.value.lastName = data.lastName;
    localData.value.birthDate = data.birthDate;
    localData.value.gender = data.gender;
});

watch(
    () => props.formData,
    (newData) => {
        let data = { ...newData };
        localData.value.name = data.name;
        localData.value.lastName = data.lastName;
        localData.value.birthDate = data.birthDate;
        localData.value.gender = data.gender;
    },
    { immediate: true }
);


function submitForm() {
    //console.log('Submitting form from childcomponent:', localData.value);
    if (localData.value.birthDate > new Date(new Date().setFullYear(new Date().getFullYear() - 18)).toISOString().split('T')[0]) {
        alert('Debes ser mayor de edad para registrarte');
        return;
    }

    emit('nextStep', localData.value);
}

</script>

<template>
    <h3>SECCIÓN 1: INFORMACIÓN PERSONAL</h3>
    <form @submit.prevent="submitForm">
        <ion-grid>
            <ion-row>
                <ion-col>
                    <ion-input v-model="localData.name" label="Nombre" label-placement="stacked" fill="outline"
                        placeholder="Enter your name" required></ion-input>
                </ion-col>
                </ion-row>
            <ion-row>
                <ion-col>
                    <ion-input v-model="localData.lastName" label="Apellidos" label-placement="stacked" fill="outline"
                        placeholder="Enter your last name" required></ion-input>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-input v-model="localData.birthDate" label="Fecha de Nacimiento" label-placement="stacked"
                        fill="outline" placeholder="Enter your birth date" type="date" required></ion-input>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-select v-model="localData.gender" label="Género" label-placement="stacked"
                        fill="outline" placeholder="Enter your gender" required>
                        <ion-select-option v-for="item in gender" :key="item" :value="item">{{ item }}</ion-select-option>
                    </ion-select>
                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col>
                    <ion-button expand="block" type="submit">Siguiente  ></ion-button>
                </ion-col>
            </ion-row>
        </ion-grid>
    </form>

</template>