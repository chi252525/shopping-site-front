<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="width: 500px">
      <q-card>
        <q-card-section>
          <div class="text-h6">Shopping Cart</div>
        </q-card-section>

        <q-card-section>
          <q-list bordered>
            <q-item v-for="(item, index) in cartItems" :key="item.id">
              <q-item-section>
                <div class="q-gutter-xs">
                  <div class="text-subtitle2">{{ item.name }}</div>
                  <div class="text-caption">Price: ${{ item.price }}</div>
                </div>
              </q-item-section>

              <q-item-section side>
                <q-input
                  v-model="cartItems[index].quantity"
                  type="number"
                  min="1"
                  max="10"
                  dense
                  label="Quantity"
                  @input="updateTotalPrice"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>

        <q-card-section>
          <div class="text-h6">Total: ${{ totalPrice }}</div>
        </q-card-section>

        <q-card-actions>
          <q-btn label="Checkout" color="primary" @click="checkout" />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      // Sample cart items
      cartItems: [
        { id: 1, name: 'Product 1', price: 30, quantity: 1 },
        { id: 2, name: 'Product 2', price: 45, quantity: 1 },
        { id: 3, name: 'Product 3', price: 20, quantity: 1 },
      ],
      totalPrice: 0,
    };
  },
  methods: {
    updateTotalPrice() {
      this.totalPrice = this.cartItems.reduce((sum, item) => {
        return sum + item.price * item.quantity;
      }, 0);
    },
    checkout() {
      // Simulate a checkout process
      this.$q.notify({
        type: 'positive',
        message: 'Checkout successful!',
      });
      this.cartItems = []; // Clear cart after checkout
      this.totalPrice = 0; // Reset total
    },
  },
  mounted() {
    this.updateTotalPrice();
  },
};
</script>

<style scoped>
.q-page {
  padding: 20px;
}

.q-card {
  max-width: 400px;
  margin: 0 auto;
}
</style>
