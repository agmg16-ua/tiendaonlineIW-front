<script setup lang="ts">
import { reactive, ref, computed } from 'vue';
import { LoginRequest, RegisterRequest, AuthenticationControllerImplApi } from '@/generated/api';
import { IonGrid, IonRow, IonCol, IonInput, IonButton } from '@ionic/vue';
import RegisterStep1 from './RegisterSteps/RegisterStep1.vue';
import RegisterStep2 from './RegisterSteps/RegisterStep2.vue';
import RegisterStep3 from './RegisterSteps/RegisterStep3.vue';
import RegisterStep4 from './RegisterSteps/RegisterStep4.vue';

// Definir las propiedades del formulario usando ref
let registerStep1Data = ref({})
let registerStep2Data = ref({})
let registerStep3Data = ref({})
let registerStep4Data = ref({})

const authApi = new AuthenticationControllerImplApi();

const forms = [ RegisterStep1, RegisterStep2, RegisterStep3, RegisterStep4];
const formDataMap = [registerStep1Data, registerStep2Data, registerStep3Data, registerStep4Data];

let currentFormIndex = ref(0);
const currentFormComponent = computed(() => forms[currentFormIndex.value]);
const currentFormData = computed(() => formDataMap[currentFormIndex.value].value);

const previousForm = () => {
    if (currentFormIndex.value > 0) {
        currentFormIndex.value--;
    }
};

const handleRegister = (data) => {

    formDataMap[currentFormIndex.value].value = data;

    console.log('Current form data:', currentFormData.value);

    if (currentFormIndex.value < forms.length - 1) {
        currentFormIndex.value++;
    }
    else {
        console.log('Registering user with data:', formDataMap);
    }
};

</script>

<template>
    <div class="flex-row-center height-100">
        <ion-grid>
            <ion-row class="flex-row-space-around">
                <ion-col sizeSm="4">
                    <h2>Formulario de Registro</h2>
                    <ion-row>
                        <ion-col>
                            <ion-button v-if="currentFormIndex > 0" @click="previousForm">⬅️</ion-button>
                        </ion-col>
                    </ion-row>
                    <Component 
                        :is="currentFormComponent"
                        @nextStep="handleRegister"
                        :formData="currentFormData"
                    />
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>
</template>

<style scoped>
.flex-row-space-around {
    display: flex;
    justify-content: space-around;
}
</style>
