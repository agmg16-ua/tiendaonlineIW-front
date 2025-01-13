<template>
  <ion-row>
    <ion-col size="12" class="total-carrito">
      <div class="total-container">
        <h2 class="total-title">
          Total <span class="iva-text">(IVA incluido)</span>
          <span class="total-amount">€{{ total.toFixed(2) }}</span>
        </h2>
      </div>
    </ion-col>
  </ion-row>
</template>

<script setup>
import { defineProps } from 'vue';
import { IonRow, IonCol } from '@ionic/vue';

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
});
</script>

<style scoped>
.total-carrito {
  margin-top: 20px;
  text-align: left;
}

.total-container {
  display: flex;
  flex-direction: column;
  padding: 10px 0;
}

.total-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.iva-text {
  font-size: 0.9rem;
  font-weight: 400;
  color: #d3d3d3;
  margin-left: 5px;
}

.total-amount {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-left: 150px;
}
</style>
