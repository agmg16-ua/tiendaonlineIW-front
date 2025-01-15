<script setup lang="ts">
import { reactive } from "vue";
import { useUserStore } from "@/stores/userStore";

const userStore = useUserStore();

const emit = defineEmits(["save"]);

const direccion = reactive({
    calle: "",
    numero: "",
    piso: "",
    puerta: "",
    ciudad: "",
    provincia: "",
    cp: "",
    pais: ""
});

function isANumber(value: string) {
    if (value === undefined || value === '') {
        return true
    }
    return !isNaN(Number(value))
}

const saveDirection = () => {


    if (!isANumber(direccion.numero) || !isANumber(direccion.piso) || !isANumber(direccion.cp)) {
        alert("Datos incorrectos: Asegurate de que has introducido bien los números")
        return
    }

    emit("save", direccion)
    closeModal();
};

const cancel = () => {
    closeModal();
};

const closeModal = () => {
    const modal = document.querySelector("ion-modal");
    if (modal) modal.dismiss();
};
</script>

<template>
    <ion-content>
        <ion-header>
            <ion-toolbar>
                <ion-title>Añadir Dirección</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
            <form @submit.prevent="saveDirection">
                <ion-grid>
                    <ion-row>
                        <ion-col size="12">
                            <ion-input v-model="direccion.calle" label="Calle" label-placement="stacked" fill="outline"
                                placeholder="C/ Gran Vía" required></ion-input>
                        </ion-col>
                    </ion-row>

                    <ion-row>
                        <ion-col size="4">
                            <ion-input v-model="direccion.numero" label="Num" label-placement="stacked" fill="outline"
                                placeholder="12" required></ion-input>
                        </ion-col>
                        <ion-col size="4">
                            <ion-input v-model="direccion.piso" label="Piso" label-placement="stacked" fill="outline"
                                placeholder="1"></ion-input>
                        </ion-col>
                        <ion-col size="4">
                            <ion-input v-model="direccion.puerta" label="Puerta" label-placement="stacked"
                                fill="outline" placeholder="B"></ion-input>
                        </ion-col>
                    </ion-row>

                    <ion-row>
                        <ion-col>
                            <ion-input v-model="direccion.ciudad" label="Ciudad" label-placement="stacked"
                                fill="outline" placeholder="Madrid" required></ion-input>
                        </ion-col>
                        <ion-col>
                            <ion-input v-model="direccion.provincia" label="Provincia" label-placement="stacked"
                                fill="outline" placeholder="Madrid" required></ion-input>
                        </ion-col>
                    </ion-row>

                    <ion-row>
                        <ion-col>
                            <ion-input v-model="direccion.cp" label="Código Postal" label-placement="stacked"
                                fill="outline" placeholder="45675" required></ion-input>
                        </ion-col>
                        <ion-col>
                            <ion-input v-model="direccion.pais" label="Pais" label-placement="stacked" fill="outline"
                                placeholder="España" required></ion-input>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col>
                            <ion-button expand="block" type="button" color="danger"
                                @click="cancel">Cancelar</ion-button>
                        </ion-col>
                        <ion-col>
                            <ion-button expand="block" type="submit">Siguiente</ion-button>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </form>
        </ion-content>
    </ion-content>
</template>