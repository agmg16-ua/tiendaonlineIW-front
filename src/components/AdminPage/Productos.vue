<script setup lang="ts">

import { ref, onMounted } from 'vue'
import AddProductoForm from './SubComponents/AddProductoForm.vue';
import { useAdminStore } from '@/stores/store'
import { useProductStore } from '@/stores/store';

const productStore = useProductStore()

const adminStore = useAdminStore()

const showAddProducto = ref(false)

const showDetalles = ref<boolean[]>([]);

onMounted(async () => {
    await productStore.fetchProducts()
})

const doSave = async () => {
    await productStore.fetchProducts()
    showAddProducto.value = false
}

</script>

<template>
    <ion-card>
        <ion-card-header>
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3 style="margin: 0;">Productos</h3>
                <ion-button size="small" @click="showAddProducto = true">
                    <ion-icon name="add-circle-outline"></ion-icon>
                </ion-button>
            </div>
        </ion-card-header>
        <ion-card-content>
            <ion-list>
                <ion-item-group v-for="(producto, index) in productStore.allProducts" :key="producto.id">
                    <ion-item button @click="showDetalles[index] = !showDetalles[index]">
                        <img :src="producto.foto_portada" alt="PICTURE" style="max-width: 50px; max-height: 50px;">
                        <ion-label style="padding-left: 10px">
                            <h2>{{ producto.nombre }}</h2>
                            <p>{{ producto.precio }}€</p>
                        </ion-label>
                        <ion-icon slot="end" :name="showDetalles[index] ? 'chevron-up' : 'chevron-down'"></ion-icon>
                    </ion-item>
                    <ion-item v-if="showDetalles[index]" lines="full">
                        <ion-label>
                            <p>Descripcion: {{ producto.descripcion }}</p>
                            <p>Color: {{ producto.color }}</p>
                            <p>Material: {{ producto.materialData.material }}</p>
                            <p>Coleccion/es:
                                <span v-for="coleccion in producto.coleccionesDatas" :key="coleccion.id">
                                    {{ coleccion.nombre }},
                                </span>
                            </p>
                            <p>Categoria: {{ producto.categoriaData.categoria }}</p>
                            <p>Subcategoria: {{ producto.subcategoriaData.subcategoria }}</p>
                            <p>Stock:
                            <p v-for="tallaData in producto.productosTallaData">{{ tallaData.talla.talla }}: {{
                                tallaData.stock }}</p>
                            </p>
                        </ion-label>
                    </ion-item>
                </ion-item-group>
            </ion-list>
        </ion-card-content>
    </ion-card>

    <ion-modal :is-open="showAddProducto" @ionModalDidDismiss="showAddProducto = false">
        <AddProductoForm @closePopup="showAddProducto = false" @save="doSave" />
    </ion-modal>
</template>