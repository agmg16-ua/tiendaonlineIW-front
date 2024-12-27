<script setup lang="ts">
import { reactive, ref } from 'vue';
import { LoginRequest, RegisterRequest, AuthenticationControllerImplApi } from '@/generated/api';
import { IonGrid, IonRow, IonCol, IonInput, IonButton, IonLabel } from '@ionic/vue';

// Definir las propiedades del formulario usando ref
let register = reactive<RegisterRequest>({
    name: '',
    email: '',
    password: '',
    username: ''
});

let login = reactive<LoginRequest>({
    email: '',
    password: ''
});

const authApi = new AuthenticationControllerImplApi();

// Función para manejar el registro
const handleRegister = () => {
    console.log('Registering user:', register);
    // Aquí puedes hacer la lógica de registro, como llamar a un API
    authApi.register(register).then(response => {
        console.log('User registered:', response);
    })

/*
    api.register(register).then((response: any) => {
        console.log('User registered:', response);
    })*/
};

const handleLogin = () => {
    console.log('Login user:', register);
    // Aquí puedes hacer la lógica de login, como llamar a un API
}
</script>

<template>
    <div class="flex-row-center height-100">
        <ion-grid>
            <ion-row class="flex-row-space-around">
                <ion-col sizeSm="4">
                    <h2>Iniciar Sesión</h2>
                    <form @submit.prevent="handleLogin" class="ion-padding">
                        <ion-input v-model="login.email" label="Email" label-placement="floating" fill="outline"
                            placeholder="Enter your email" type="email" required></ion-input>

                        <ion-input v-model="login.password" label="Password" label-placement="floating" fill="outline"
                            placeholder="Enter your password" type="password" required></ion-input>

                        <RouterLink to="/login">He olvidado mi contraseña</RouterLink>

                        <ion-button type="submit" expand="full">Inciar Sesión</ion-button>

                        <ion-label>
                            ¿No tienes cuenta? <RouterLink to="/register">Regístrate</RouterLink>
                        </ion-label>
                    </form>
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
