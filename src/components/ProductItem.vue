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

<script lang="ts">
import { defineOptions, defineComponent, PropType } from 'vue';
defineOptions({
  name: 'ProductItem', // Change to a multi-word name
});
export default defineComponent({
  name: 'ProductItem',
  props: {
    product: {
      type: Object as PropType<{
        name: string;
        description: string;
        price: number;
        imageUrl: string;
      }>,
      required: true,
    },
  },
  methods: {
    buyNow() {
      console.log('Buying product');
    },
    addToCart() {
      console.log('Adding product to cart');
    },
  },
});
</script>

<style scoped>
.my-card {
  width: 250px;
  max-width: 350px; /* For better responsiveness */
}
</style>
