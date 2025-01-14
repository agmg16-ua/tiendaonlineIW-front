<script setup lang="ts">

    import { computed, onMounted } from 'vue'  
    import { useCarritoStore } from '@/stores/store'

    defineEmits(['next_step'])

    const carritoStore = useCarritoStore()

    const carrito = computed(() => carritoStore.carrito)

</script>

<template>
    <ion-grid>
        <ion-row>
            <ion-col>
                <h3>RESUMEN DE PEDIDO</h3>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col size="8">
                <ion-list>
                    <ion-item>
                        <ion-label>Productos</ion-label>
                        <ion-label>Cantidad</ion-label>
                        <ion-label>Total</ion-label>
                    </ion-item>
                    <ion-item v-for="linea in carrito.linCarritos" :key="linea.id">
                        <ion-label>- {{ linea.producto.nombre }}</ion-label>
                        <ion-label>{{ linea.cantidad }}</ion-label>
                        <ion-label>{{ linea.precio }}€</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-label>Subtotal</ion-label>
                        <ion-label></ion-label>
                        <ion-label>{{ carrito.total }}€</ion-label>
                    </ion-item>
                </ion-list>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <ion-button @click="$emit('next_step')">Proceder al Pago</ion-button>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>