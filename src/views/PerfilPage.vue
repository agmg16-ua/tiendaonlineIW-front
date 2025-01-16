<script setup>
import { ref } from 'vue';

// Importar los subcomponentes
import DatosPersonales from '@/components/PerfilPage/DatosPersonales.vue';
import MisPedidos from '@/components/PerfilPage/MisPedidos.vue';

const selectedSegment = ref('misDatos');

</script>

<template>
    <ion-grid>
        <ion-row>
            <ion-col size="2">
                <ion-segment :value="selectedSegment" class="menu-style" swipe-gesture="false">
                    <ion-segment-button value="misDatos" content-id="misDatos">
                        <ion-label>Mis Datos</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="misPedidos" content-id="misPedidos">
                        <ion-label>Mis Pedidos</ion-label>
                    </ion-segment-button>
                </ion-segment>
            </ion-col>
            <ion-col>
                <ion-segment-view>
                    <ion-segment-content id="misDatos">
                        <DatosPersonales />
                    </ion-segment-content>
                    <ion-segment-content id="misPedidos">
                        <MisPedidos />
                    </ion-segment-content>
                </ion-segment-view>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<style scoped>
.menu-style {
    display: flex;
    flex-direction: column;
}

ion-grid {
    --ion-grid-padding: 50px;
}
</style>
