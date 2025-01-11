<script setup lang="ts">
    import { useRouter } from 'vue-router';

    const router = useRouter();

</script>

<template>
    <ion-content>
        <ion-button @click="router.push('/tramitarPedido')">Tramitar Pedido</ion-button>
    </ion-content>
</template>