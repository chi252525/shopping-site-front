<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="width: 500px">
      <q-card>
        <q-card-section>
          <div class="text-h6">My Orders</div>
        </q-card-section>

        <q-card-section>
          <q-list bordered>
            <q-item v-for="order in orders" :key="order.id">
              <q-item-section>
                <div class="q-gutter-xs">
                  <div class="text-subtitle2">Order #{{ order.id }}</div>
                  <div class="text-caption">Status: {{ order.status }}</div>
                  <div class="text-caption">Total: ${{ order.totalPrice }}</div>
                </div>
              </q-item-section>

              <q-item-section side>
                <q-btn
                  flat
                  dense
                  label="View Details"
                  @click="viewOrderDetails(order.id)"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      // Sample orders data (this would typically come from an API)
      orders: [
        {
          id: 1,
          status: 'Shipped',
          totalPrice: 120,
          items: ['Product 1', 'Product 2'],
        },
        { id: 2, status: 'Delivered', totalPrice: 80, items: ['Product 3'] },
        {
          id: 3,
          status: 'Pending',
          totalPrice: 200,
          items: ['Product 4', 'Product 5', 'Product 6'],
        },
      ],
    };
  },
  methods: {
    viewOrderDetails(orderId) {
      // Navigate to the Order Details page
      this.$router.push({ path: `/order/${orderId}` });
    },
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
</style>
