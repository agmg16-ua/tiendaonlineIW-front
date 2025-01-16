<script setup lang="ts">

import { ref, onMounted, reactive } from 'vue'
import AddProductoForm from './SubComponents/AddProductoForm.vue';
import { useAdminStore } from '@/stores/store'
import { useProductStore } from '@/stores/store';

const productStore = useProductStore()

const adminStore = useAdminStore()

const showAddProducto = ref(false)

const showDetalles = ref<boolean[]>([]);

const reponerData = reactive<Record<number, Record<number, number>>>({}); // Para manejar los valores del input.

onMounted(async () => {
    await productStore.fetchProducts()
})

const doSave = async () => {
    await productStore.fetchProducts()
    showAddProducto.value = false
}

// Función para manejar la reposición del stock.
const reponerStock = async (idProducto: number, idTalla: number, tallaString: string, stockAñadir: number) => {
    console.log(`Reponiendo stock para Producto: ${idProducto}, Talla: ${tallaString} (${idTalla}), Añadir: ${stockAñadir}`);

    //Preparar los datos
    const dataToBack = {
        "productoId": idProducto,
        "talla": {
            "id": idTalla,
            "talla": tallaString
        },
        "stock": stockAñadir
    }


    // Mandar los datos al backend.
    const response = await adminStore.reponerStock(dataToBack);

    // Actualizar el stock en el front.
    if (response.status === 200) {
        const responseProductos = await productStore.fetchProducts();
    } else {
        alert("Error al reponer el stock.");
    }

    // Ocultar el input de reponer stock.
    reponerData[idProducto][idTalla] = undefined;
};

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
                            <div v-for="tallaData in producto.productosTallaData" :key="tallaData.talla.id"
                                style="margin-bottom: 10px;">
                                <div style="display: flex; align-items: center;">
                                    <p style="margin: 0; flex: 1;">
                                        {{ tallaData.talla.talla }}: {{ tallaData.stock }}
                                    </p>
                                    <ion-button size="small"
                                        @click="reponerData[producto.id] = reponerData[producto.id] || {}; reponerData[producto.id][tallaData.talla.id] = 0">
                                        Reponer
                                    </ion-button>
                                </div>
                                <div v-if="reponerData[producto.id] && reponerData[producto.id][tallaData.talla.id] !== undefined"
                                    style="display: flex; align-items: center; gap: 10px;">
                                    <ion-icon name="add-circle-outline"></ion-icon>
                                    <ion-input type="number"
                                        v-model.number="reponerData[producto.id][tallaData.talla.id]"
                                        placeholder="Cantidad"></ion-input>
                                    <ion-button size="small"
                                        @click="reponerStock(producto.id, tallaData.talla.id, tallaData.talla.talla, reponerData[producto.id][tallaData.talla.id])">
                                        Confirmar
                                    </ion-button>
                                    <ion-button size="small" color="danger"
                                        @click="reponerData[producto.id][tallaData.talla.id] = undefined">
                                        Cancelar
                                    </ion-button>
                                </div>
                            </div>
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