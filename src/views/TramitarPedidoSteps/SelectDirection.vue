<script setup lang="ts">

    import { ref, computed } from 'vue'
    import { useUserStore } from '@/stores/store'

    const emit = defineEmits(['next_step'])

    const userStore = useUserStore()

    const addresses = computed(() => userStore.direcciones)

    const direccion = ref({
        id: '',
        street: '',
        number: '',
        city: '',
        province: '',
        postalCode: '',
        country: '',
        building: '',
        stair: '',
        floor: '',
        door: '',
    });

    const selectAddress = (address: number) => {
        const selectedAddress = addresses.value[address]
        if (selectedAddress) {
            direccion.value.id = selectedAddress.id.toString() || ""
            direccion.value.street = selectedAddress.calle || ""
            direccion.value.number = selectedAddress.numero || ""
            direccion.value.city = selectedAddress.localidad || ""
            direccion.value.province = selectedAddress.provincia || ""
            direccion.value.postalCode = selectedAddress.codigoPostal || ""
        }
    }

    const siguientePaso = () => {
        if (direccion.value.id === '') {
            alert('Por favor, seleccione una dirección')
            return
        }
        
        emit('next_step', direccion.value)
    }
</script>

<template>
    <div class="flex-row-center height-100">
        <ion-grid>
            <ion-row>
                <ion-col size="6">
                    <label>Selección de Dirección de Envio</label> <br>
                    <select class="styled-select" id="address-select" @change="selectAddress(Number($event.target.value))">
                        <option value="" disabled selected>Seleccionar Direccion</option>
                        <option v-for="(address, index) in addresses" :value="index">{{ address.calle }}, {{ address.numero }}</option>
                    </select>
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
                    <ion-col size="10">
                        <ion-item>
                            <ion-label class="ion-text-nowrap">Calle: {{ direccion.street }}</ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="2">
                        <ion-item>
                            <ion-label class="ion-text-nowrap">Número: {{ direccion.number }}</ion-label>
                        </ion-item>
                    </ion-col>
                </ion-row>

                <ion-row>
                    <ion-col size="3">
                        <ion-item>
                            <ion-label class="ion-text-nowrap">Bloque: {{ direccion.building }}</ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="3">
                        <ion-item>
                            <ion-label class="ion-text-nowrap">Escalera: {{ direccion.stair }}</ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="3">
                        <ion-item>
                            <ion-label class="ion-text-nowrap">Piso: {{ direccion.floor }}</ion-label>
                        </ion-item>
                    </ion-col>
                    <ion-col size="3">
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
</template>

<style scoped>
.styled-select { 
    width: 240px; 
        height: 34px; overflow: hidden; background: url(new_arrow.png) no-repeat right #1e1e1e; border: 1px solid #1e1e1e; }

 

.sidebar-box select{
display:block;
padding: 5px 10px;
height:42px;
margin:10px auto;
min-width: 225px;
-webkit-appearance: none;
height: 34px;
/* background-color: #ffffff; */
background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, #000000 0%,#000000 100%);
  background-repeat: no-repeat, repeat;
  background-position: right .7em top 50%, 0 0;
  background-size: .65em auto, 100%;}
</style>