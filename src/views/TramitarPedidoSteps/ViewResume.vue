<script setup lang="ts">

    const emit = defineEmits(['next_step'])

    const do_pagar_tpv = () => {
        console.log('Pagar con TPV')
    }

</script>

<template>
    <ion-grid>
        <ion-row>
            <ion-col>
                <button @click="do_pagar_tpv">Pagar con TPV</button>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>