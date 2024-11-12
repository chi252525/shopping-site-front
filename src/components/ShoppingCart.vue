<template>
  <div>
    <h1>您的購物車</h1>
    <div v-for="item in cart.items" :key="item.id">
      <p>{{ item.name }} - {{ item.quantity }} x {{ item.salePrice }}</p>
      <button @click="cart.removeFromCart(item.id)">移除</button>
    </div>
    <p>總數: {{ cart.itemCount }}</p>
    <p>總價格: {{ cart.totalPrice }}</p>
    <button @click="cart.clearCart">清空購物車</button>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore';

export default {
  name: 'ShoppingCart',
  setup() {
    const cart = useCartStore();
    return { cart };
  },
};
</script>
