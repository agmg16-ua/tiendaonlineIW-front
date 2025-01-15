<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useAdminStore } from '@/stores/store'

const emit = defineEmits(["closePopup"]);
const adminStore = useAdminStore()

interface ParTallaStock {
    talla: string
    stock: number
}

const productoData = ref({
    nombre: '',
    descripcion: '',
    precio: null,
    sku: '',
    color: '',
    materialId: 0,
    colecciones: [],
    categoriaId: 0,
    subcategoriaId: 0,
    tallaStocks: <ParTallaStock[]>([]),
})

const materiales = ref([])
const categorias = ref([])
const subcategorias = ref([])
const colecciones = ref([])
const paresTallaStock = ref<ParTallaStock[]>([])

const agregarPar = () => {
    paresTallaStock.value.push({ talla: '', stock: 0 })
}

const eliminarPar = (index: number) => {
    paresTallaStock.value.splice(index, 1)
}


onMounted(async () => {
    const responseMateriales = await adminStore.fetchMateriales()

    if (responseMateriales.status === 200) {
        materiales.value = responseMateriales.data
    } else {
        alert('Error al cargar los materiales: ' + responseMateriales.message)
    }

    const responseCategorias = await adminStore.fetchCategorias()

    if (responseCategorias.status === 200) {
        categorias.value = responseCategorias.data
    } else {
        alert('Error al cargar las categorias: ' + responseCategorias.message)
    }

    const responseSubcategorias = await adminStore.fetchSubcategorias()

    if (responseSubcategorias.status === 200) {
        subcategorias.value = responseSubcategorias.data
    } else {
        alert('Error al cargar las subcategorias: ' + responseSubcategorias.message)
    }

    const responseColecciones = await adminStore.fetchColecciones()

    if (responseColecciones.status === 200) {
        colecciones.value = responseColecciones.data
    } else {
        alert('Error al cargar las colecciones: ' + responseColecciones.message)
    }
})


const saveProducto = async () => {
    console.log('Guardando producto')
    productoData.value.tallaStocks = paresTallaStock.value

    productoData.value.tallaStocks = productoData.value.tallaStocks.map((par) => ({
        ...par,
        stock: Number(par.stock)
    }))

    const response = await adminStore.saveProducto(productoData.value)

    if (response.status === 200) {
        alert('Producto guardado correctamente')
        emit("closePopup")
    } else {
        alert('Error al guardar el producto: ' + response.message)
    }
}

const cancel = () => {
    emit("closePopup")
};

</script>

<template>
    <ion-content>
        <ion-content>
            <form @submit.prevent="saveProducto">
                <ion-grid>
                    <ion-row>
                        <ion-col>
                            <h2>Añadir Producto</h2>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col size="10">
                            <ion-input v-model="productoData.nombre" label="Nombre" label-placement="stacked"
                                fill="outline" placeholder="Camisa de Lino" required></ion-input>
                        </ion-col>
                        <ion-col size="2">
                            <ion-input v-model="productoData.precio" label="Precio" label-placement="stacked"
                                fill="outline" placeholder="12.99" required></ion-input>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <ion-input v-model="productoData.descripcion" label="Descripción" label-placement="stacked"
                                fill="outline" placeholder="Descripcion del producto..." required></ion-input>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col size="6">
                            <ion-input v-model="productoData.sku" label="SKU" label-placement="stacked" fill="outline"
                                placeholder="00000"></ion-input>
                        </ion-col>
                        <ion-col size="6">
                            <ion-input v-model="productoData.color" label="Color" label-placement="stacked"
                                fill="outline" placeholder="Blanco"></ion-input>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <ion-select v-model="productoData.materialId" label="Material" label-placement="stacked"
                                fill="outline" placeholder="Selecciona un material">
                                <ion-select-option v-for="material in materiales" :key="material.id"
                                    :value="material.id">{{ material.material }}</ion-select-option>
                            </ion-select>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col size="6">
                            <ion-select v-model="productoData.categoriaId" label="Categoria" label-placement="stacked"
                                fill="outline" placeholder="Selecciona una categoría">
                                <ion-select-option v-for="categoria in categorias" :key="categoria.id"
                                    :value="categoria.id">{{ categoria.categoria }}</ion-select-option>
                            </ion-select>
                        </ion-col>
                        <ion-col size="6">
                            <ion-select v-model="productoData.subcategoriaId" label="Subcategoria"
                                label-placement="stacked" fill="outline" placeholder="Selecciona una subcategoría">
                                <ion-select-option v-for="subcategoria in subcategorias" :key="subcategoria.id"
                                    :value="subcategoria.id">{{ subcategoria.subcategoria }}</ion-select-option>
                            </ion-select>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col size="12">
                            <ion-select v-model="productoData.colecciones" label="Colecciones" label-placement="stacked"
                                fill="outline" placeholder="Selecciona la/s coleccion/es" multiple="true" required>
                                <ion-select-option v-for="coleccion in colecciones" :key="coleccion.id"
                                    :value="coleccion.id">{{ coleccion.nombre }}</ion-select-option>
                            </ion-select>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <div v-for="(par, index) in paresTallaStock" :key="index">
                                <ion-row>
                                    <ion-col size="5">
                                        <ion-item>
                                            <ion-input v-model="par.talla" fill="outline"
                                                placeholder="Talla"></ion-input>
                                        </ion-item>
                                    </ion-col>
                                    <ion-col size="5">
                                        <ion-item>
                                            <ion-input v-model="par.stock" fill="outline" placeholder="Stock"
                                                type="number"></ion-input>
                                        </ion-item>
                                    </ion-col>
                                    <ion-col size="2">
                                        <ion-button color="danger" @click="eliminarPar(index)">
                                            <ion-icon name="trash"></ion-icon>
                                        </ion-button>
                                    </ion-col>
                                </ion-row>
                            </div>
                            <ion-button color="success" @click="agregarPar">
                                <ion-icon name="add-circle-outline"></ion-icon>
                            </ion-button>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <ion-button expand="block" type="button" color="danger"
                                @click="cancel">Cancelar</ion-button>
                        </ion-col>
                        <ion-col>
                            <ion-button expand="block" type="submit">Guardar</ion-button>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </form>
        </ion-content>
    </ion-content>
</template>