<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import RegisterRequest from '@/generated/src/model/RegisterRequest';
import { IonGrid, IonRow, IonCol, IonInput, IonButton } from '@ionic/vue';
import RegisterStep1 from './RegisterSteps/RegisterStep1.vue';
import RegisterStep2 from './RegisterSteps/RegisterStep2.vue';
import RegisterStep3 from './RegisterSteps/RegisterStep3.vue';
import RegisterStep4 from './RegisterSteps/RegisterStep4.vue';
import { useUserStore } from '@/stores/store'

// Store
const userStore = useUserStore();

// Router
const router = useRouter();

// Definir las propiedades del formulario usando ref
let registerStep1Data = ref({})
let registerStep2Data = ref({})
let registerStep3Data = ref({})
let registerStep4Data = ref({})

const forms = [RegisterStep1, RegisterStep2, RegisterStep3, RegisterStep4];
const formDataMap = [registerStep1Data, registerStep2Data, registerStep3Data, registerStep4Data];

let currentFormIndex = ref(0);
const currentFormComponent = computed(() => forms[currentFormIndex.value]);
const currentFormData = computed(() => formDataMap[currentFormIndex.value].value);

function mapDataToRegisterData() {
    return {
        "nombre": formDataMap[0].value.name,
        "apellidos": formDataMap[0].value.lastName,
        "fechaNacimiento": formDataMap[0].value.birthDate,
        "genero": formDataMap[0].value.gender,
        "email": formDataMap[1].value.email,
        "telefonoCodPais": 34,
        "telefono": Number(formDataMap[1].value.phone),
        "nombreUsuario": formDataMap[2].value.username,
        "password": formDataMap[2].value.password,
        "calle": formDataMap[3].value.street,
        "numero": Number(formDataMap[3].value.number),
        "piso": Number(formDataMap[3].value.floor),
        "puerta": formDataMap[3].value.door,
        "ciudad": formDataMap[3].value.city,
        "provincia": formDataMap[3].value.province,
        "cp": Number(formDataMap[3].value.postalCode),
        "pais": formDataMap[3].value.country,
    }
}

const previousForm = () => {
    if (currentFormIndex.value > 0) {
        currentFormIndex.value--;
    }
};

const handleRegister = async (data: any) => {

    formDataMap[currentFormIndex.value].value = data;

    console.log('Form Data Filled:', currentFormIndex.value + 1);

    if (currentFormIndex.value < forms.length - 1) {
        currentFormIndex.value++;
    }
    else {
        try {
            const registerRequest = mapDataToRegisterData();

            const response = await userStore.register(registerRequest);

            if (response.status === 200) {
                router.push('/')
            } else {
                alert('Error al registrar el usuario: ' + response.message)
            }

        } catch (error) {
            console.error("ERROR:", error)
        }
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
                    <Component :is="currentFormComponent" @nextStep="handleRegister" :formData="currentFormData" />
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
