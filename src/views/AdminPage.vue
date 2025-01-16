<script setup>
import { ref } from 'vue';

// Importar los subcomponentes
import Productos from '@/components/AdminPage/Productos.vue';
import Usuarios from '@/components/AdminPage/Usuarios.vue';
import Colecciones from '@/components/AdminPage/Colecciones.vue';

const selectedSegment = ref('productos');

</script>

<template>
    <ion-grid>
        <ion-row>
            <ion-col>
                <h1>Panel de Administración</h1>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col size="3">
                <ion-segment :value="selectedSegment" class="menu-style" swipe-gesture="false">
                    <ion-segment-button value="productos" content-id="productos">
                        <ion-label>Productos</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="usuarios" content-id="usuarios">
                        <ion-label>Usuarios</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="colecciones" content-id="colecciones">
                        <ion-label>Colecciones</ion-label>
                    </ion-segment-button>
                </ion-segment>
            </ion-col>
            <ion-col size="9">
                <ion-segment-view>
                    <ion-segment-content id="productos">
                        <Productos />
                    </ion-segment-content>
                    <ion-segment-content id="usuarios">
                        <Usuarios />
                    </ion-segment-content>
                    <ion-segment-content id="colecciones">
                        <Colecciones />
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
