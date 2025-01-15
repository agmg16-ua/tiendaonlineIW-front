<script setup>
import { ref } from 'vue';

// Importar los subcomponentes
import Productos from '@/components/AdminPage/Productos.vue';

const selectedSegment = ref('productos');

</script>

<template>
    <ion-grid>
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
                    <ion-segment-button value="categorias" content-id="categorias">
                        <ion-label>Categorias</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="subcategorias" content-id="subcategorias">
                        <ion-label>Subcategorias</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="materiales" content-id="materiales">
                        <ion-label>Materiales</ion-label>
                    </ion-segment-button>
                </ion-segment>
            </ion-col>
            <ion-col size="9">
                <ion-segment-view>
                    <ion-segment-content id="productos">
                        <Productos />
                    </ion-segment-content>
                    <ion-segment-content id="usuarios">
                        <Productos />
                    </ion-segment-content>
                    <ion-segment-content id="colecciones">
                        <Productos />
                    </ion-segment-content>
                    <ion-segment-content id="categorias">
                        <Productos />
                    </ion-segment-content>
                    <ion-segment-content id="subcategorias">
                        <Productos />
                    </ion-segment-content>
                    <ion-segment-content id="materiales">
                        <Productos />
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
