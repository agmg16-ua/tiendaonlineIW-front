<script setup lang="ts">
import { reactive, ref } from 'vue';
import LoginRequest from '@/generated/src/model/LoginRequest';
import { IonGrid, IonRow, IonCol, IonInput, IonButton, IonLabel, IonInputPasswordToggle } from '@ionic/vue';
import { useUserStore } from '@/stores/userStore';
import { useProductStore } from '@/stores/productStore';  

const userStore = useUserStore();

// Definir las propiedades del formulario usando ref
let login = ref({
    email: '',
    password: ''
});

function mapDataToLoginRequest() {
    return new LoginRequest(
        login.value.email, 
        login.value.password
    );
}

const handleLogin = () => {
    console.log('Login user:', login.value);
    // Aquí puedes hacer la lógica de login, como llamar a un API

    const loginRequest = mapDataToLoginRequest();

    userStore.login(loginRequest)
}

const doaction = async () => {
    const productStore = useProductStore();
    const response = await productStore.fetchProducts();
}

</script>

<template>
    <div class="flex-row-center height-100">
        <ion-grid>
            <ion-row class="flex-row-space-around">
                <ion-col sizeSm="4">
                    <h2>Iniciar Sesión</h2>
                    <form @submit.prevent="handleLogin" class="ion-padding">
                        <ion-row>
                            <ion-col>
                                <ion-input v-model="login.email" label="Email" label-placement="stacked" fill="outline"
                                    placeholder="Enter your email" type="email" required></ion-input>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <ion-input v-model="login.password" label="Password" label-placement="stacked" fill="outline"
                                    placeholder="Enter your password" type="password" required>
                                    <ion-input-password-toggle slot="end"></ion-input-password-toggle>
                                </ion-input>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <RouterLink to="/login">He olvidado mi contraseña</RouterLink>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <ion-button type="submit" expand="full">Inciar Sesión</ion-button>
                            </ion-col>
                        </ion-row>
                    </form>
                    <ion-row>
                            <ion-col>
                                <ion-label>
                                    ¿No tienes cuenta? <RouterLink to="/register">Regístrate</RouterLink>
                                </ion-label>
                            </ion-col>
                        </ion-row>
                    <ion-button :onclick="doaction">
                        Hola
                    </ion-button>
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
