<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/stores/store'
import { useRouter } from 'vue-router'

const router = useRouter()

const pedidoRef = ref()
const userStore = useUserStore()
/*
onMounted(async () => {

    if (localStorage.getItem('pedidoRedirect') === null) {
        router.push({ path: '/carrito' })
    }

    pedidoRef.value = localStorage.getItem('pedidoRedirect')

    await userStore.sendPaymentCallback(pedidoRef.value)
})
*/

</script>

<template>
    <ion-header>
        <ion-toolbar color="success">
            <ion-title>Pago Completado: {{ pedidoRef }}</ion-title>
        </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
        <div class="payment-success">
            <ion-icon name="checkmark-circle" size="large" color="success"></ion-icon>
            <h2>¡Gracias por tu compra!</h2>
            <p>El pago se ha realizado correctamente.</p>
            <p>Puedes ver todos tus pedidos en:</p>
            <ion-button expand="block" router-link="/perfil" color="primary">
                Mi Cuenta
            </ion-button>
        </div>
    </ion-content>
</template>