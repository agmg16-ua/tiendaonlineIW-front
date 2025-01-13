<script setup lang="ts">
    import { onMounted, ref } from 'vue'
    import { useRouter } from 'vue-router';
    import { useCarritoStore } from '@/stores/store'

    const carritoStore = useCarritoStore()

    const router = useRouter();

    const carrito = ref()

    onMounted(async () => {
        const response = await carritoStore.fetchCarrito()

        if (response.status === 200) {
            carrito.value = carritoStore.carrito
        }
    })

</script>

<template>
    <ion-content>
        <ion-button @click="router.push('/tramitarPedido')">Tramitar Pedido</ion-button>
        <span v-text="carrito"></span>
    </ion-content>
</template>