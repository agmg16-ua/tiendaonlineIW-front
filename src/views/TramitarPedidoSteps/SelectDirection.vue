<script setup lang="ts">

import { ref, computed, onMounted } from 'vue'
import { useUserStore } from '@/stores/store'
import AddDireccionForm from '@/components/AddDireccionForm.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const emit = defineEmits(['next_step'])

const userStore = useUserStore()

const addresses = computed(() => userStore.direcciones)

const showAddDireccion = ref(false)


onMounted(async () => {
    await userStore.fetchDirecciones()
})

const direccion = ref({
    id: '',
    street: '',
    number: '',
    city: '',
    province: '',
    postalCode: '',
    country: '',
    floor: '',
    door: '',
});

const selectAddress = (event: CustomEvent) => {
    const selectedAddressId = Number(event.detail.value)
    const selectedAddress = addresses.value.find(address => address.id === selectedAddressId)
    if (selectedAddress) {
        direccion.value.id = selectedAddress.id.toString() || ""
        direccion.value.street = selectedAddress.calle || ""
        direccion.value.number = selectedAddress.numero || ""
        direccion.value.floor = selectedAddress.piso || ""
        direccion.value.door = selectedAddress.puerta || ""
        direccion.value.city = selectedAddress.ciudad || ""
        direccion.value.province = selectedAddress.provincia || ""
        direccion.value.postalCode = selectedAddress.cp || ""
        direccion.value.country = selectedAddress.pais || ""
    }
}

const siguientePaso = () => {
    if (direccion.value.id === '') {
        alert('Por favor, seleccione una dirección')
        return
    }

    emit('next_step', direccion.value.id)
}

const saveDireccion = async (direccionData: any) => {
    const response = await userStore.postNewUserDirection(direccionData)

    if (response.status === 200) {
        await userStore.fetchDirecciones()
    } else {
        alert('Error al guardar la dirección: ' + response.message)
        router.push('/tramitarPedido')
    }
}

</script>

<template>
    <div class="flex-row-center height-100">
        <ion-grid>
            <ion-row>
                <ion-col size="6">
                    <ion-label>Selección de Dirección de Envio</ion-label>
                    <ion-select placeholder="Selecciona una direccion" @ionChange="selectAddress">
                        <ion-select-option v-for="address in addresses" :key="address.id" :value="address.id">{{
                            address.calle }}, {{ address.numero }}</ion-select-option>
                    </ion-select>
                    <ion-button size="big" fill="clear" @click="showAddDireccion = true">
                        <ion-icon name="add-circle-outline"></ion-icon>
                        Añadir Dirección
                    </ion-button>

                </ion-col>
            </ion-row>
            <ion-row>
                <ion-col size="8">
                    <ion-row>
                        <ion-col size="12">
                            <h3>Dirección de Envío y Facturación</h3>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col size="12">
                            <ion-item>
                                <ion-label class="ion-text-nowrap">Calle: {{ direccion.street }}</ion-label>
                            </ion-item>
                        </ion-col>
                    </ion-row>

                    <ion-row>
                        <ion-col size="4">
                            <ion-item>
                                <ion-label class="ion-text-nowrap">Número: {{ direccion.number }}</ion-label>
                            </ion-item>
                        </ion-col>
                        <ion-col size="4">
                            <ion-item>
                                <ion-label class="ion-text-nowrap">Piso: {{ direccion.floor }}</ion-label>
                            </ion-item>
                        </ion-col>
                        <ion-col size="4">
                            <ion-item>
                                <ion-label class="ion-text-nowrap">Puerta: {{ direccion.door }}</ion-label>
                            </ion-item>
                        </ion-col>
                    </ion-row>

                    <ion-row>
                        <ion-col>
                            <ion-item>
                                <ion-label class="ion-text-nowrap">Ciudad: {{ direccion.city }}</ion-label>
                            </ion-item>
                        </ion-col>
                        <ion-col>
                            <ion-item>
                                <ion-label class="ion-text-nowrap">Provincia: {{ direccion.province }}</ion-label>
                            </ion-item>
                        </ion-col>
                    </ion-row>

                    <ion-row>
                        <ion-col>
                            <ion-item>
                                <ion-label class="ion-text-nowrap">Codigo Postal: {{ direccion.postalCode }}</ion-label>
                            </ion-item>
                        </ion-col>
                        <ion-col>
                            <ion-item>
                                <ion-label class="ion-text-nowrap">Pais: {{ direccion.country }}</ion-label>
                            </ion-item>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <ion-button @click="siguientePaso">Ver Resumen de Pedido ></ion-button>
                        </ion-col>
                    </ion-row>
                </ion-col>
            </ion-row>
        </ion-grid>
    </div>
    <ion-modal :is-open="showAddDireccion" @ionModalDidDismiss="showAddDireccion = false">
        <AddDireccionForm @close="showAddDireccion = false" @save="saveDireccion" />
    </ion-modal>
</template>