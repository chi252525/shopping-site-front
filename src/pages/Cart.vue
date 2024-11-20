<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="width: 500px">
      <q-card>
        <q-card-section>
          <div class="text-h6">我的購物車</div>
        </q-card-section>

        <!-- Cart Items List Section -->
        <q-card-section>
          <!-- Cart Items -->
          <div class="col-12 col-lg-8">
            <q-list bordered separator>
              <q-item
                v-for="(item, index) in cartItems"
                :key="index"
                class="q-py-md"
              >
                <q-item-section avatar>
                  <q-img
                    :src="item.image"
                    style="width: 100px; height: 100px"
                  />
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-subtitle1">{{
                    item.name
                  }}</q-item-label>
                  <q-item-label caption>SKU: {{ item.sku }}</q-item-label>
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
                <q-item-section side>
                  <q-item-label class="text-subtitle2"
                    >${{
                      (item.price * item.quantity).toFixed(2)
                    }}</q-item-label
                  >
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </q-card-section>

        <!-- Total Price Section -->
        <q-card-section>
          <div class="text-h6 text-right">小計 ${{ totalPrice }}</div>
          <div class="row items-center justify-between full-width">
            <q-btn label="結帳" color="primary" class="full-width q-ml-sm" />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ShoppingCart',
  data() {
    return {
      // Cart items with product details
      cartItems: [
        {
          name: 'Example Product 1',
          sku: 'EX-123456',
          price: 99.99,
          quantity: 2,
          image: 'https://cdn.quasar.dev/img/mountains.jpg',
        },
        {
          name: 'Example Product 2',
          sku: 'EX-789012',
          price: 49.99,
          quantity: 1,
          image: 'https://cdn.quasar.dev/img/parallax1.jpg',
        },
      ],
      totalPrice: 0,
    };
  },
  methods: {
    // Updates the total price based on cart items and their quantity
    updateTotalPrice() {
      this.totalPrice = this.cartItems.reduce((sum, item) => {
        return sum + item.price * item.quantity;
      }, 0);
    },
  },
  mounted() {
    // Initialize total price on component mount
    this.updateTotalPrice();
  },
};
</script>

<style scoped>
.q-page {
  padding: 20px;
}

.q-card {
  max-width: 500px;
  margin: 0 auto;
}

.q-btn.full-width {
  width: 100%;
}

.text-h6 {
  font-weight: bold;
}

.text-caption {
  color: #757575;
}
</style>
