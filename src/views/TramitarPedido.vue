<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import { useUserStore } from '@/stores/userStore'
import SelectDirection from './TramitarPedidoSteps/SelectDirection.vue'
import ViewResume from './TramitarPedidoSteps/ViewResume.vue'

const userStore = useUserStore();

const router = useRouter();

let direccionEnvio = ref()

const steps = [SelectDirection, ViewResume]

let currentStepIndex = ref(0)

const currentStepComponent = computed(() => steps[currentStepIndex.value]);

const showLoading = ref(false)

const do_pedido = async (data: any) => {
    console.log(data)
    if (currentStepIndex.value === 0) {
        direccionEnvio.value = data
    }

    if (currentStepIndex.value === 1) {
        showLoading.value = true
        const data = await userStore.newPedido(direccionEnvio.value)
        showLoading.value = false;
        if (data.status === 200) {
            window.location.href = data.url
        } else {
            alert('Error al tramitar el pedido: ' + data.message)
        }
    }

    currentStepIndex.value++
}

</script>

<template>
    <Component :is="currentStepComponent" @next_step="do_pedido" />
    <ion-loading :is-open="showLoading" message="Tramitando Pedido..."></ion-loading>
</template>