<template>
  <div class="row justify-center q-col-gutter-lg">
    <div class="col-auto">
      <q-card class="my-card">
        <q-img :src="product.imageUrl">
          <div class="absolute-bottom">
            <div class="text-h6">{{ product.name }}</div>
            <div class="text-subtitle2">{{ product.description }}</div>
            <div class="text-subtitle2">{{ product.price }} 元</div>
          </div>
        </q-img>

        <q-card-actions>
          <q-btn flat @click="buyNow">立即購買</q-btn>
          <q-btn flat @click="addToCart">加到購物車</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
defineOptions({
  name: 'ProductItem', // Change to a multi-word name
});
// Define the product prop without assigning it to a variable
defineProps<{
  product: {
    imageUrl: string;
    name: string;
    description: string;
    price: number;
  };
}>();

// Button action methods
function buyNow() {
  console.log('Buying product');
}

function addToCart() {
  console.log('Adding product to cart');
}
</script>

<style scoped>
.my-card {
  width: 250px;
  max-width: 350px; /* For better responsiveness */
}
</style>
